import { MetadataRoute } from "next";

export default function robots() {
  const baseUrl = "https://mukulfoundation.org"; // Replace with your actual domain

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
