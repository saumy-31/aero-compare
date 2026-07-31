// generate-sitemap.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory paths for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import your blog posts data source dynamically
import { MOCK_BLOG_POSTS } from './src/data/mockBlogPosts.js';

const DOMAIN = 'https://flysava.com';

// Define all static pages required
const staticPages = [
  { url: '/', changefreq: 'daily', priority: '1.0' },
  { url: '/flights', changefreq: 'daily', priority: '0.9' },
  { url: '/status', changefreq: 'weekly', priority: '0.6' },
  { url: '/explore', changefreq: 'weekly', priority: '0.8' },
  { url: '/travel-guides', changefreq: 'weekly', priority: '0.8' }
];

// Validation Function: Stops the build if data is malformed, missing fields, or contains duplicates
function validateBlogPosts(posts) {
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    console.error('\n❌ Build Failed: MOCK_BLOG_POSTS is missing or empty. Cannot generate a complete sitemap.');
    process.exit(1); 
  }

  const slugs = new Set();
  const requiredFields = ['title', 'slug', 'seoTitle', 'seoDescription', 'image'];

  posts.forEach((post, index) => {
    // 1. Check for missing or empty required fields
    for (const field of requiredFields) {
      if (!post[field] || typeof post[field] !== 'string' || post[field].trim() === '') {
        console.error(`\n❌ Build Failed: Blog post at index ${index} is missing a valid "${field}".`);
        console.error(`Post data snippet: ${JSON.stringify({ ...post, content: '...' }).substring(0, 150)}`);
        process.exit(1);
      }
    }

    // 2. Check for duplicate slugs
    if (slugs.has(post.slug)) {
      console.error(`\n❌ Build Failed: Duplicate blog slug found: "${post.slug}"`);
      console.error('Each blog post must have a unique slug to be included in the sitemap exactly once.');
      process.exit(1);
    }
    slugs.add(post.slug);
  });
}

function generateSitemap() {
  console.log('Generating dynamic sitemap for FlySava...');

  // 1. Run strict validation
  validateBlogPosts(MOCK_BLOG_POSTS);

  // 2. Map static routes
  let sitemapEntries = staticPages.map((page) => {
    return `
  <url>
    <loc>${DOMAIN}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // 3. Map dynamic blog routes from validated data source
  MOCK_BLOG_POSTS.forEach((post) => {
    // Use lastUpdated if it exists, fallback to publishedDate
    const targetDate = post.lastUpdated || post.publishedDate;
    let lastModDate = new Date().toISOString().split('T')[0];
    
    if (targetDate) {
      const parsedDate = new Date(targetDate);
      if (!isNaN(parsedDate.getTime())) {
        lastModDate = parsedDate.toISOString().split('T')[0];
      }
    }

    sitemapEntries.push(`
  <url>
    <loc>${DOMAIN}/blog/${post.slug}</loc>
    <lastmod>${lastModDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
    <image:image>
      <image:loc>${post.image}</image:loc>
    </image:image>
  </url>`);
  });

  // 4. Build final XML structure with Image Sitemap namespace included
  const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapEntries.join('')}
</urlset>`;

  // 5. Ensure public directory exists
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // 6. Write sitemap.xml to public folder
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXML.trim());
  
  // 7. Log specific required output
  console.log(`✅ Generated sitemap with ${staticPages.length} static pages.`);
  console.log(`✅ Generated sitemap with ${MOCK_BLOG_POSTS.length} blog pages.`);
  console.log(`✅ Total URLs in sitemap: ${staticPages.length + MOCK_BLOG_POSTS.length}`);

  // 8. Generate robots.txt
  const robotsTXT = `User-agent: *
Allow: /

Sitemap: ${DOMAIN}/sitemap.xml
`;

  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTXT.trim());
  console.log('✅ Successfully updated robots.txt.');
}

generateSitemap();