import type { MetadataRoute } from "next";

const base = "https://msalshamsi.ae";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/fleet", "/contact"];
  const now = new Date();

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
