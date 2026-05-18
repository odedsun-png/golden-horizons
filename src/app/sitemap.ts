import type { MetadataRoute } from "next";
import { getAllArticleSlugs } from "@/lib/articles";
import { countries } from "@/lib/countries";

const siteUrl = "https://golden-horizons.org";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articleSlugs = await getAllArticleSlugs();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${siteUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${siteUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${siteUrl}/food`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    // Pillar pages
    {
      url: `${siteUrl}/best-countries-to-retire-abroad-on-a-budget`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${siteUrl}/healthcare-abroad-for-american-retirees`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${siteUrl}/retiring-abroad-checklist-for-americans`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${siteUrl}/visa-rules-for-americans-retiring-abroad`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${siteUrl}/taxes-for-americans-retiring-overseas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${siteUrl}/safest-countries-to-retire-abroad`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${siteUrl}/tax-guide`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.92,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${siteUrl}/terms-of-use`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  const articlePages: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${siteUrl}/articles/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.75,
  }));

  const destinationPages: MetadataRoute.Sitemap = countries.map((country) => ({
    url: `${siteUrl}/destinations/${country.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...articlePages, ...destinationPages];
}
