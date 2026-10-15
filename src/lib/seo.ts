import type { Metadata } from "next"

export const SITE_URL = "https://3saroj.com.np"
export const SITE_NAME = "Saroj Bhattarai"

const image = { url: "/profile.jpeg", width: 800, height: 800, alt: "Saroj Bhattarai" }

// Next.js replaces nested objects like `openGraph` rather than merging them,
// so every page builds its full metadata here to keep the share image.
export function pageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const fullTitle = path === "/" ? title : `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: SITE_NAME,
      images: [image],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
      creator: "@3sarojbhattarai",
    },
  }
}
