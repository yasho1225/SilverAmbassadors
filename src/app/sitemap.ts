import type { MetadataRoute } from "next";
import { getSiteOrigin } from "@/lib/config";

const routes = [
  "/",
  "/about",
  "/events",
  "/volunteer-hours",
  "/gallery",
  "/contact",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteOrigin();
  if (!base) return [];

  return routes.map((route) => ({
    url: `${base}${route === "/" ? "" : route}`,
    changeFrequency:
      route === "/" || route === "/events" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
