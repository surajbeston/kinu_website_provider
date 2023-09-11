export default [
  { UserAgent: "*" },
  { Disallow: "/" },
  { BlankLine: true },

  { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` },
];
