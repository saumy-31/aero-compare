const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://flysava.com';
const TODAY = new Date().toISOString().split('T')[0];

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
  const clustersFilePath = path.join(__dirname, '../src/data/mockDestinationClusters.ts');
  const blogPostsFilePath = path.join(__dirname, '../src/data/mockBlogPosts.ts');

  let destinations = [];
  if (fs.existsSync(destinationsFilePath)) {
    const content = fs.readFileSync(destinationsFilePath, 'utf8');
    destinations = parseTsObjectBlocks(content);
  }

  let clusters = [];
  if (fs.existsSync(clustersFilePath)) {
    const content = fs.readFileSync(clustersFilePath, 'utf8');
    clusters = parseTsObjectBlocks(content);
  }

  let blogPosts = [];
  if (fs.existsSync(blogPostsFilePath)) {
    const content = fs.readFileSync(blogPostsFilePath, 'utf8');
    blogPosts = parseTsObjectBlocks(content);
  }

  // 1. Core transactional pages (Maximum Priority)
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'daily', lastmod: TODAY },
    { url: '/flights', priority: '1.0', changefreq: 'daily', lastmod: TODAY },
    { url: '/hotels', priority: '0.9', changefreq: 'daily', lastmod: TODAY },
    { url: '/cars', priority: '0.9', changefreq: 'daily', lastmod: TODAY },
    { url: '/esim', priority: '0.9', changefreq: 'daily', lastmod: TODAY },
    { url: '/blog', priority: '0.9', changefreq: 'daily', lastmod: TODAY },
    { url: '/blog/destinations', priority: '0.85', changefreq: 'weekly', lastmod: TODAY },
    { url: '/destinations', priority: '0.8', changefreq: 'weekly', lastmod: TODAY },
    { url: '/status', priority: '0.7', changefreq: 'daily', lastmod: TODAY },
    { url: '/about', priority: '0.5', changefreq: 'monthly', lastmod: TODAY },
    { url: '/contact', priority: '0.5', changefreq: 'monthly', lastmod: TODAY },
    { url: '/careers', priority: '0.4', changefreq: 'monthly', lastmod: TODAY },
    { url: '/press', priority: '0.4', changefreq: 'monthly', lastmod: TODAY },
    { url: '/terms', priority: '0.3', changefreq: 'monthly', lastmod: TODAY },
    { url: '/privacy', priority: '0.3', changefreq: 'monthly', lastmod: TODAY },
    { url: '/cookies', priority: '0.3', changefreq: 'monthly', lastmod: TODAY }
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Write static pages
  staticPages.forEach((page) => {
    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}${page.url}</loc>\n`;
    xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    xml += `  </url>\n`;
  });

  // Write Editorial Destination Clusters (/blog/destinations/:slug)
  const seenClusterSlugs = new Set();
  clusters.forEach((cluster) => {
    const key = cluster.slug || cluster.id;
    if (!key || seenClusterSlugs.has(key)) return;
    seenClusterSlugs.add(key);

    xml += `  <url>\n`;
    xml += `    <loc>${SITE_URL}/blog/destinations/${escapeXml(key)}</loc>\n`;
    xml += `    <lastmod>${cluster.lastmod || TODAY}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  // Write Legacy Destinations (/destinations/:id)
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

  // Write Spoke Blog Articles (/blog/:slug)
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

  const totalCount = staticPages.length + seenClusterSlugs.size + seenDestinationIds.size + seenBlogSlugs.size;
  console.log(`✅ Automated public/sitemap.xml generated successfully! (${totalCount} total URLs)`);
}

generateSitemap();