import type { MetadataRoute } from "next";

const routes = [
  "/",
  "/about",
  "/events",
  "/volunteer-hours",
  "/gallery",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "https://silverambassadors.example.com";

  return routes.map((route) => ({
    url: `${base}${route === "/" ? "" : route}`,
    lastModified: "2026-10-23",
    changeFrequency: route === "/" || route === "/events" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
