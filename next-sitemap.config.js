const fs = require('fs');

// Load words from a JSON file to avoid runtime DB load
const words = JSON.parse(fs.readFileSync('words-for-sitemap.json', 'utf-8'));

// Define the languages you support
const languages = ['bengali','urdu']; 

// Generate dynamic paths for each word-language combination
const generateDynamicPaths = () => {
  return words.flatMap((word) =>
    languages.map((language) => ({
    //   loc: `http://localhost:3000/english-to-${language}-meaning-${word}`,
      loc: `https://www.english-welsh.net/english-to-${language}-meaning-${word}`,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 0.9,
    }))
  );
};

module.exports = {
//   siteUrl: process.env.NEXT_PUBLIC_BASE_URL_FRONT || 'http://localhost:3000',
  siteUrl: process.env.NEXT_PUBLIC_BASE_URL_FRONT || 'https://www.english-welsh.net',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  outDir: './public',  // Output the sitemap to the public folder
  robotsTxtOptions: {
    policies: [
      // ✅ Allow good bots
      { userAgent: 'Googlebot', allow: '/' },
      { userAgent: 'Bingbot', allow: '/' },
      { userAgent: 'DuckDuckBot', allow: '/' },
      { userAgent: 'Slurp', allow: '/' },

      // 🚫 Block known bad bots
      { userAgent: 'AhrefsBot', disallow: '/' },      // SEO Crawler
      { userAgent: 'SemrushBot', disallow: '/' },     // SEO Tool
      { userAgent: 'MJ12bot', disallow: '/' },        // Link Analysis Bot
      { userAgent: 'DotBot', disallow: '/' },         // Scraper
      { userAgent: 'Baiduspider', disallow: '/' },    // Baidu (China)
      { userAgent: 'YandexBot', disallow: '/' },      // Yandex (Russia)
      { userAgent: 'Sogou', disallow: '/' },          // Chinese Bot
      { userAgent: 'Exabot', disallow: '/' },         // French Bot
      { userAgent: 'PetalBot', disallow: '/' },       // Huawei Bot
      { userAgent: 'crawler', disallow: '/' },        // Generic crawlers
      { userAgent: 'python-requests', disallow: '/' },// Python scripts
      { userAgent: 'wget', disallow: '/' },           // Wget tool
      { userAgent: 'curl', disallow: '/' },           // Curl tool

      // 🔒 Disallow sensitive/private areas
      { userAgent: '*', disallow: '/admin' },
      { userAgent: '*', disallow: '/api/private' },
      { userAgent: '*', disallow: '/server' },
      { userAgent: '*', disallow: '/config' },
      { userAgent: '*', disallow: '/.env' },
      { userAgent: '*', disallow: '/private' },
      { userAgent: '*', disallow: '/*.pdf' },
      { userAgent: '*', disallow: '/*.json' },
      { userAgent: '*', disallow: '/scripts' },
    ],
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_BASE_URL_FRONT || 'https://www.english-welsh.net'}/sitemap.xml`,
    //   `${process.env.NEXT_PUBLIC_BASE_URL_FRONT || 'http://localhost:3000'}/sitemap.xml`,
    ],
  },
  transform: async (config, url) => {
    // Static pages you want to include in the sitemap
    const staticPages = [
      '/',                  // Home page
      '/games/shuffle_game',// game page
    ];

    // If the URL is a static page, assign a higher priority (1.0), otherwise 0.7
    const priority = staticPages.includes(url) ? 1.0 : 0.9;

    return {
      loc: url,
      priority: priority,
      changefreq: 'daily', // Set the frequency of changes
    };
  },
  additionalPaths: async (config) => {
    return generateDynamicPaths(); // Generate dynamic pages based on the words from the JSON file
  },
};
