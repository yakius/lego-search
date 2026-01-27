export default function handler(req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.send(`User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

Sitemap: ${req.headers['x-forwarded-proto'] || 'https'}://${req.headers.host}/sitemap.xml

# BrickMind AI Search Bot
User-agent: BrickMindBot
Allow: /
Crawl-delay: 1

# Bad bots
User-agent: MJ12bot
Disallow: /

User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /`);
}