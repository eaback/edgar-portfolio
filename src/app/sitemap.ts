import { MetadataRoute } from "next";
import { POSTS } from "@/lib/posts";
import { CASE_STUDIES } from "@/lib/projects";

const BASE_URL = "https://edgarbacker.dev";
const LOCALES = ["en", "nl", "sv", "de", "no"] as const;

function localeUrl(locale: string, path: string): string {
  const prefix = locale === "en" ? "" : `/${locale}`;
  return `${BASE_URL}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["/", "/about", "/work", "/blog", "/contact"];

  const staticEntries = staticPages.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: localeUrl(locale, path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.8,
    }))
  );

  const postEntries = POSTS.flatMap((post) =>
    LOCALES.map((locale) => ({
      url: localeUrl(locale, `/blog/${post.slug}`),
      lastModified: new Date(post.date),
      changeFrequency: "yearly" as const,
      priority: 0.6,
    }))
  );

  const caseStudyEntries = Object.values(CASE_STUDIES).flatMap((cs) =>
    LOCALES.map((locale) => ({
      url: localeUrl(locale, `/work/${cs.slug}`),
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    }))
  );

  return [...staticEntries, ...postEntries, ...caseStudyEntries];
}
