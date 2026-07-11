import type { VercelRequest, VercelResponse } from '@vercel/node';

const BASE_URL = 'https://flysava.com';

// Dynamically generate today's date (YYYY-MM-DD)
const STATIC_PAGE_BASE_DATE = new Date().toISOString().split('T')[0];

const STATIC_PAGES = [
  { route: '', changefreq: 'daily', priority: '1.0' },
  { route: '/flights', changefreq: 'daily', priority: '1.0' },
  { route: '/status', changefreq: 'hourly', priority: '0.9' },
  { route: '/destinations', changefreq: 'weekly', priority: '0.9' },
  { route: '/blog', changefreq: 'daily', priority: '0.8' },
  { route: '/about', changefreq: 'monthly', priority: '0.6' },
  { route: '/contact', changefreq: 'monthly', priority: '0.6' },
  { route: '/press', changefreq: 'weekly', priority: '0.6' },
  { route: '/careers', changefreq: 'weekly', priority: '0.5' },
  { route: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { route: '/terms', changefreq: 'yearly', priority: '0.3' },
  { route: '/cookies', changefreq: 'yearly', priority: '0.3' }
];

function parseDateToIso(dateStr: string | undefined): string {
  if (!dateStr) return STATIC_PAGE_BASE_DATE;
  
  const months: Record<string, string> = {
    january: '01', february: '02', march: '03', april: '04', may: '05', june: '06',
    july: '07', august: '08', september: '09', october: '10', november: '11', december: '12'
  };

  try {
    const cleanStr = dateStr.replace(',', '').toLowerCase().trim();
    const parts = cleanStr.split(/\s+/); 
    
    if (parts.length === 3) {
      const month = months[parts[0]] || '01';
      const day = parts[1].padStart(2, '0');
      const year = parts[2];
      return `${year}-${month}-${day}`;
    }
  } catch (e) {
    console.error('Failed to parse date string:', dateStr);
  }
  return STATIC_PAGE_BASE_DATE;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { type } = req.query;

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=43200, stale-while-revalidate=3600'); 

    // 1. FAULT-TOLERANT DYNAMIC IMPORTS
    // We load the data safely at runtime. Adding .js helps Vercel's ESM resolver trace the files.
    let mockDestinations: any[] = [];
    let mockBlogPosts: any[] = [];

    try {
      const destModule = await import('../src/data/mockDestinations.js').catch(() => import('../src/data/mockDestinations'));
      mockDestinations = destModule.MOCK_DESTINATIONS || [];
    } catch (error) {
      console.warn('Vercel Trace Warning: Could not bundle MOCK_DESTINATIONS into serverless function.');
    }

    try {
      const blogModule = await import('../src/data/mockBlogPosts.js').catch(() => import('../src/data/mockBlogPosts'));
      mockBlogPosts = blogModule.MOCK_BLOG_POSTS || [];
    } catch (error) {
      console.warn('Vercel Trace Warning: Could not bundle MOCK_BLOG_POSTS into serverless function.');
    }

    // CASE 1: Primary Index Map
    if (!type) {
      const latestBlogDate = mockBlogPosts.length > 0 
        ? parseDateToIso(mockBlogPosts[0]?.lastUpdated || mockBlogPosts[0]?.publishedDate)
        : STATIC_PAGE_BASE_DATE;

      const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${BASE_URL}/sitemap-pages.xml</loc>
    <lastmod>${STATIC_PAGE_BASE_DATE}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-destinations.xml</loc>
    <lastmod>${STATIC_PAGE_BASE_DATE}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${BASE_URL}/sitemap-blog.xml</loc>
    <lastmod>${latestBlogDate}</lastmod>
  </sitemap>
</sitemapindex>`;
      
      return res.status(200).send(indexXml.trim());
    }

    // CASE 2: Static Standard Landing/Legal Sections
    if (type === 'pages') {
      const entries = STATIC_PAGES.map(page => `
  <url>
    <loc>${BASE_URL}${page.route}</loc>
    <lastmod>${STATIC_PAGE_BASE_DATE}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

      return res.status(200).send(wrapInUrlSet(entries));
    }

    // CASE 3: Live Destination Guides
    if (type === 'destinations') {
      const entries = mockDestinations.filter(d => d && d.id).map(dest => `
  <url>
    <loc>${BASE_URL}/guide/${dest.id}</loc>
    <lastmod>${STATIC_PAGE_BASE_DATE}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`).join('');

      return res.status(200).send(wrapInUrlSet(entries));
    }

    // CASE 4: Live Blog Content Streams
    if (type === 'blog') {
      const entries = mockBlogPosts.filter(p => p && p.slug).map(post => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${parseDateToIso(post.lastUpdated || post.publishedDate)}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`).join('');

      return res.status(200).send(wrapInUrlSet(entries));
    }

    return res.status(404).send('Sitemap segment mapping not found.');
  } catch (error) {
    console.error('Sitemap Execution Engine Error:', error);
    return res.status(500).send('Internal Server Error generating sitemap streams.');
  }
}

function wrapInUrlSet(entries: string): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.trim()}
</urlset>`.trim();
}