import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { experiences } from "@/data/experience";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/resume/",
    "/extracurriculars/ner/",
    ...experiences.map((e) => `/experience/${e.slug}/`),
    ...projects.map((p) => `/projects/${p.slug}/`),
  ];
  return routes.map((route) => ({
    url: `${site.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
