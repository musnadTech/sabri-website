import type { MetadataRoute } from "next"
import { siteConfig } from "@/lib/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} - Full-Stack Developer`,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/logo-light.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo-dark.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}

