import Link from "next/link"
import Image from "next/image"
import { Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center -ml-3">
              <Image
                src="/logowithtext.svg"
                alt="Medici"
                width={300}
                height={80}
                className="h-20 w-auto dark:invert"
                priority
              />
            </Link>
            <p className="text-muted-foreground text-base max-w-xs leading-relaxed">
              A peer-to-peer platform where donors browse verified student profiles and fund their education using USDC on the Solana blockchain.
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://x.com/Medici_ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                >
                  <Twitter className="h-4 w-4 mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="mailto:rd@stableresearch.xyz"
                  className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          © 2025 Medici. All rights reserved. Funding done securely via blockchain.
        </div>
      </div>
    </footer>
  )
} 