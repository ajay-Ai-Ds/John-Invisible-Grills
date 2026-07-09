import { MetadataRoute } from "next";
import { servicesData } from "@/lib/servicesData";
import { locationsData } from "@/lib/locationsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://johninvisiblegrills.com";

  const staticUrls = [
    "",
    "/gallery",
    "/about",
    "/faq",
    "/contact"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const serviceUrls = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  const locationUrls = locationsData.map((loc) => ({
    url: `${baseUrl}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6
  }));

  return [...staticUrls, ...serviceUrls, ...locationUrls];
}
