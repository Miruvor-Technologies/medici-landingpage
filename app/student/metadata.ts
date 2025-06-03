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
  title: "Student Application",
  description: "Apply for student funding through Medici. Get direct, transparent funding for your education from verified donors.",
  keywords: ["student application", "education funding", "student funding", "blockchain", "transparency", "direct funding"],
  openGraph: {
    title: "Student Application | Medici",
    description: "Apply for student funding through Medici. Get direct, transparent funding for your education from verified donors.",
    images: [
      {
        url: "/og-image-student.png",
        width: 1200,
        height: 630,
        alt: "Medici Student Application"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Student Application | Medici",
    description: "Apply for student funding through Medici. Get direct, transparent funding for your education from verified donors.",
    images: ["/og-image-student.png"],
  }
} 