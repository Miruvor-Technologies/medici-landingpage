import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

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
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'https://medici.so'),
  title: {
    default: "Medici - Fund a Student's Future",
    template: "%s | Medici"
  },
  description: "Fund verified students directly and transparently through blockchain technology. No intermediaries, instant transfers, and full traceability.",
  keywords: ["education funding", "student funding", "blockchain", "transparency", "direct funding", "education", "cryptocurrency", "student support"],
  authors: [{ name: "Medici" }],
  creator: "Medici",
  publisher: "Medici",
  icons: {
    icon: [
      { 
        url: "/favicon2.svg",
        media: "(prefers-color-scheme: light)"
      },
      {
        url: "/favicon2.svg",
        media: "(prefers-color-scheme: dark)"
      }
    ],
    shortcut: ["/favicon2.svg"],
    apple: [
      { url: "/favicon2.svg" }
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon2.svg",
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://medici.so",
    title: "Medici - Fund a Student's Future",
    description: "Fund verified students directly and transparently through blockchain technology.",
    siteName: "Medici",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Medici - Fund a Student's Future"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Medici - Fund a Student's Future",
    description: "Fund verified students directly and transparently through blockchain technology.",
    images: ["/og-image.png"],
    creator: "@medici",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
