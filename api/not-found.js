export default function handler(req, res) {
  res.status(404).json({
    success: false,
    error: "API endpoint not found",
    available_endpoints: [
      "/api/search",
      "/api/set/:number",
      "/api/compare/prices",
      "/api/stats/trending",
      "/api/categories",
      "/api/compare/sets",
      "/api/health"
    ]
  });
}