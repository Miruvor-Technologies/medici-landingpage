import type { Metadata, Viewport } from "next"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
}

export const metadata: Metadata = {
  title: "Get Early Access",
  description: "Join Medici's early access list to be among the first donors to support verified students directly and transparently.",
  keywords: ["early access", "education funding", "student funding", "blockchain", "transparency", "direct funding"],
  openGraph: {
    title: "Get Early Access | Medici",
    description: "Join Medici's early access list to be among the first donors to support verified students directly and transparently.",
    images: [
      {
        url: "/og-image-notify.png",
        width: 1200,
        height: 630,
        alt: "Medici Early Access"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Early Access | Medici",
    description: "Join Medici's early access list to be among the first donors to support verified students directly and transparently.",
    images: ["/og-image-notify.png"],
  }
} 