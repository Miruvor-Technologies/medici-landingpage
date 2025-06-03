import Link from "next/link"
import { Mail, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background/60 backdrop-blur-lg border-t border-border/50 py-16 px-4 mt-auto">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-30"></div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Medici
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              A peer-to-peer platform where donors browse verified student profiles and fund their education using USDC on the Solana blockchain.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Platform</h4>
            <div className="space-y-3">
              <Link
                href="#how-it-works"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="#faq" 
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQ
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-lg">Connect</h4>
            <div className="space-y-3">
              <a
                href="https://x.com/Medici_ac"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span>Twitter</span>
              </a>
              <a
                href="mailto:rd@stableresearch.xyz"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Medici. All rights reserved. Funding human potential through the blockchain.
          </p>
        </div>
      </div>
    </footer>
  )
} 