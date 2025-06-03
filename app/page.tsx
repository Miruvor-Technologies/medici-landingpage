"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Users, Shield, Zap, ArrowRight, GraduationCap, Heart, Globe, Mail, Twitter, Menu, X } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Users,
    title: "You Choose",
    description:
      "Whether you care about nurses, artists or engineers, you choose who to support. Medici lets you fund verified students directly and transparently.",
    gradient: "from-blue-500 via-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Fully Transparent",
    description:
      "Every transfer is public and traceable on the blockchain. No donor sign-ups required and our code is open-source for anyone to audit.",
    gradient: "from-green-500 via-teal-500 to-blue-500",
  },
  {
    icon: GraduationCap,
    title: "Verified Students",
    description:
      "We check enrollment documents, IDs and do live-video interviews. Linked public profiles give you confidence each student is real.",
    gradient: "from-orange-500 via-red-500 to-pink-500",
  },
]

const howItWorksSteps = [
  {
    icon: Globe,
    title: "Discover",
    description:
      "Browse verified student profiles from universities worldwide. Read their stories, goals, and academic achievements.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Heart,
    title: "Connect",
    description:
      "Choose students whose missions resonate with you. Review their academic progress and funding requirements.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Zap,
    title: "Fund",
    description:
      "Send funds directly to student wallets using blockchain technology. Instant, secure, and transparent.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Shield,
    title: "Track",
    description:
      "Monitor student progress through regular updates. See the real impact of your contribution on their education.",
    color: "from-orange-500 to-red-500",
  },
]

const faqs = [
  {
    question: "How can I verify that the student received my donation?",
    answer:
      "When you complete a transaction, you'll receive a transaction reference or hash. While we notify you of the transaction status, you don't need to take our word for it. Use the hash to independently verify the transaction on any public blockchain explorer.",
  },
  {
    question: "What fees does Medici charge?",
    answer:
      "Medici charges a small fee per transaction to support platform development. However, during our early access phase, all platform fees are waived. You'll only pay the standard blockchain network fee.",
  },
  {
    question: "Can I donate if I'm not familiar with cryptocurrencies?",
    answer:
      "You'll need a crypto wallet with funds to complete a donation. If you're new to crypto, our team can share resources and guide you through setting up a wallet and adding funds.",
  },
  {
    question: "Will I receive updates about the student I support?",
    answer:
      "We encourage students to share updates on how they use the funds they receive. If you'd like to stay informed, sign up with your email after you complete a transaction to receive occasional, non-spammy updates about their progress. We're also working on features that improve accountability and traceability over time.",
  },
  {
    question: "Are donations made through Medici tax-deductible?",
    answer:
      "Donations made through Medici are currently not tax-deductible. We are exploring partnerships and paths to enable this in the future.",
  },
  {
    question: "Can I support students outside the US?",
    answer:
      "Medici is currently available to US citizens and international students who are enrolled or expected to enroll at a US institution. We're actively working on expanding access to students globally.",
  },
  {
    question: "What blockchain does Medici operate on?",
    answer:
      "Medici runs on the Solana blockchain and supports USDC (a stablecoin pegged to the US dollar) for all transactions.",
  },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const howItWorksRef = useRef(null)
  const featuresRef = useRef(null)
  const heroRef = useRef(null)

  const isHowItWorksInView = useInView(howItWorksRef, { once: true, margin: "-100px" })
  const isFeaturesInView = useInView(featuresRef, { once: true, margin: "-50px" })

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div className="min-h-screen bg-background">
      {/* Enhanced Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl blur opacity-30 animate-pulse"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Medici
            </span>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/student">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium px-4 sm:px-6">
                I am a Student
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20"></div>
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 10 + i * 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <div className="mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
              >
                Fund a Student's Future.{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Direct. Instant. Transparent.
                </span>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Browse real student profiles. Filter by field, university or background. <br />
              Send any amount. Securely, peer-to-peer, via the blockchain.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex justify-center items-center"
            >
              <Link href="/notify">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg rounded-full border-2 hover:bg-muted/50 transition-all duration-300"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Why Choose Medici Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              animate={{
                y: [-20, -60, -20],
                x: i % 2 === 0 ? [0, 10, 0] : [0, -10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
              style={{
                left: `${30 + (i * 5)}%`,
                top: "50%",
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background glow */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent rounded-3xl"
              style={{
                filter: 'blur(40px)',
                transform: 'translateY(-20%)'
              }}
            />
            
            <div className="relative text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="mb-4 inline-block"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">✦</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Why Medici
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed"
              >
                Educational funding is broken. We're using the blockchain to fix it.
              </motion.p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-300" />
                <Card className="relative backdrop-blur-xl bg-card/50 border-border/50 overflow-hidden">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced How It Works Section */}
      <section id="how-it-works" className="py-16 relative overflow-hidden" ref={howItWorksRef}>
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background glow */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent rounded-3xl"
              style={{
                filter: 'blur(40px)',
                transform: 'translateY(-20%)'
              }}
            />
            
            <div className="relative text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, type: "spring" }}
                viewport={{ once: true }}
                className="mb-4 inline-block"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto">
                  <span className="text-white text-2xl">✦</span>
                </div>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold mb-6"
              >
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  How Medici Works
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed"
              >
                 
              </motion.p>
            </div>
          </motion.div>

          <div className="max-w-7xl mx-auto mt-16">
            <Card className="p-8 backdrop-blur-xl bg-gradient-to-br from-background/50 via-muted/50 to-background/50 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left side - Text content */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-left space-y-6"
                >
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Back a Student in a Few Clicks
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Browse through student profiles and choose someone you want to fund. Click "Back This Student", enter your preferred amount and approve the transaction through your crypto wallet.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Funds reach the student's wallet instantly, all recorded on the blockchain. No logins. No intermediaries. Secure and traceable.
                  </p>
                </motion.div>

                {/* Right side - Animated GIF in Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden bg-white dark:bg-black border-border/50 shadow-2xl">
                    <div className="relative">
                      <img
                        src="/howitworks.gif"
                        alt="How Medici Works"
                        className="w-full h-auto"
                        style={{ display: 'block' }}
                      />
                    </div>
                  </Card>
                </motion.div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about Medici
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="backdrop-blur-xl bg-card/50 border-border/50 rounded-xl px-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-muted/50 backdrop-blur-xl border-t border-border/50 py-16 px-4">
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
                <Link href="#faq" className="block text-muted-foreground hover:text-foreground transition-colors">
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
    </div>
  )
}
