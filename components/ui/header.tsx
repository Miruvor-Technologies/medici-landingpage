import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/40 border-b border-border/30 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Medici
          </span>
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="/student">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-4 sm:px-6 shadow-md hover:shadow-lg transition-all duration-300">
              I am a Student
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
} 