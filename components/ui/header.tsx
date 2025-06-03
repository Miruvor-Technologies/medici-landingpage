import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-background/40 border-b border-border/30 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logowithtext.svg"
            alt="Medici"
            width={240}
            height={64}
            className="h-16 w-auto dark:invert"
            priority
          />
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