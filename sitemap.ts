import type { MetadataRoute } from "next";
import { siteConfig } from "@/site.config";
import { courses } from "@/content/courses";
import { lessonsByCourse } from "@/content/lessons";

// Builds /sitemap.xml automatically from your pages and lessons.
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/learn", "/tools", "/tools/compound-growth", "/tools/budget-builder", "/challenges", "/impact", "/about", "/sources", "/contact", "/progress", "/privacy", "/terms"];
  const lessons = courses.filter((c) => c.available).flatMap((c) => [`/learn/${c.slug}`, ...(lessonsByCourse[c.slug] ?? []).map((l) => `/learn/${c.slug}/${l.slug}`)]);
  return [...pages, ...lessons].map((p) => ({ url: siteConfig.siteUrl + p }));
}
