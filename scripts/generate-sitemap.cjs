const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://flysava.com';

function formatDate(dateString) {
  if (!dateString) return null;
  const parsed = new Date(dateString);
  if (isNaN(parsed.getTime())) return null;
  return parsed.toISOString().split('T')[0];
}

function escapeXml(unsafe) {
  if (!unsafe) return '';
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}

function parseTsObjectBlocks(fileContent) {
  const results = [];
  let depth = 0;
  let inString = null;
  let isEscaped = false;
  let currentBlockStart = -1;

  for (let i = 0; i < fileContent.length; i++) {
    const char = fileContent[i];

    if (inString) {
      if (isEscaped) {
        isEscaped = false;
      } else if (char === '\\') {
        isEscaped = true;
      } else if (char === inString) {
        inString = null;
      }
      continue;
    }

    if (char === "'" || char === '"' || char === '`') {
      inString = char;
      continue;
    }

    if (char === '{') {
      if (depth === 0) {
        currentBlockStart = i;
      }
      depth++;
    } else if (char === '}') {
      depth--;
      if (depth === 0 && currentBlockStart !== -1) {
        const block = fileContent.substring(currentBlockStart, i + 1);
        currentBlockStart = -1;

        const idMatch = block.match(/\bid:\s*['"]([^'"]+)['"]/);
        const slugMatch = block.match(/\bslug:\s*['"]([^'"]+)['"]/);
        const dateMatch = block.match(/\b(lastUpdated|updated|updatedDate|publishedDate):\s*['"]([^'"]+)['"]/);

        const item = {
          id: idMatch ? idMatch[1] : null,
          slug: slugMatch ? slugMatch[1] : null,
          lastmod: dateMatch ? formatDate(dateMatch[2]) : null,
        };

        if (item.id || item.slug) {
          results.push(item);
        }
      }
    }
  }

  return results;
}

function generateSitemap() {
  console.log('🔄 Generating automated public/sitemap.xml...');

  const destinationsFilePath = path.join(__dirname, '../src/data/mockDestinations.ts');
  const blogPostsFilePath = path.join(__dirname, '../src/data/mockBlogPosts.ts');

  let destinations = [];
  if (fs.existsSync(destinationsFilePath)) {
    const content = fs.readFileSync(destinationsFilePath, 'utf8');
    destinations = parseTsObjectBlocks(content);
  }

  let blogPosts = [];
  if (fs.existsSync(blogPostsFilePath)) {
    const content = fs.readFileSync(blogPostsFilePath, 'utf8');
    blogPosts = parseTsObjectBlocks(content);
  }

  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily' },
    { url: '/flights', priority: '0.9', changefreq: 'daily' },
    { url: '/hotels', priority: '0.9', changefreq: 'daily' },
    { url: '/cars', priority: '0.9', changefreq: 'daily' },
    { url: '/esim', priority: '0.9', changefreq: 'daily' },
    { url: '/destinations', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'daily' },
    { url: '/status', priority: '0.7', changefreq: 'daily' },
    { url: '/about', priority: '0.5', changefreq: 'monthly' },
    { url: '/contact', priority: '0.5', changefreq: 'monthly' },
    { url: '/careers', priority: '0.4', changefreq: 'monthly' },
    { url: '/press', priority: '0.4', changefreq: 'monthly' },
    { url: '/terms', priority: '0.3', changefreq: 'monthly' },
    { url: '/privacy', priority: '0.3', changefreq: 'monthly' },
    { url: '/cookies', priority: '0.3', changefreq: 'monthly' }
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  staticPages.forEach((page) => {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${page.url}</loc>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  const seenDestinationIds = new Set();
  destinations.forEach((dest) => {
    if (!dest.id || seenDestinationIds.has(dest.id)) return;
    seenDestinationIds.add(dest.id);

    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/destinations/${escapeXml(dest.id)}</loc>\n`;
    if (dest.lastmod) {
      xml += `    <lastmod>${dest.lastmod}</lastmod>\n`;
    }
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  const seenBlogSlugs = new Set();
  blogPosts.forEach((post) => {
    if (!post.slug || seenBlogSlugs.has(post.slug)) return;
    seenBlogSlugs.add(post.slug);

    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/blog/${escapeXml(post.slug)}</loc>\n`;
    if (post.lastmod) {
      xml += `    <lastmod>${post.lastmod}</lastmod>\n`;
    }
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>0.7</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>\n`;

  const outputPath = path.join(__dirname, '../public/sitemap.xml');
  fs.writeFileSync(outputPath, xml, 'utf8');

  console.log(`✅ Automated public/sitemap.xml generated successfully! (${staticPages.length + seenDestinationIds.size + seenBlogSlugs.size} total URLs)`);
}

generateSitemap();