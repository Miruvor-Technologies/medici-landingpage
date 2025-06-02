"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Search, Filter, Sparkles, Globe, Shield } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: Search,
    title: "Smart Discovery",
    description:
      "Advanced search and filtering by university, field of study, funding goals, and academic achievements.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Filter,
    title: "Precision Filters",
    description: "Filter by degree level, funding amount, location, GPA, and academic performance metrics.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "Every student profile is thoroughly verified with enrollment proof and academic documentation.",
    gradient: "from-green-500 to-emerald-500",
  },
]

const comingSoonFeatures = [
  "Browse verified student profiles with detailed academic backgrounds",
  "Read compelling personal stories and educational goals",
  "View funding progress and requirements in real-time",
  "Connect directly through blockchain technology",
  "Track student progress with regular updates",
  "Fund with one-click using secure wallet integration",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-8">
        <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center pt-16">
          <div className="mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
            >
              <Users className="h-12 w-12 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              About Medici
              <span className="block text-2xl md:text-3xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-4">
                Revolutionizing Education Funding
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto"
            >
              We're crafting the ultimate student funding experience. Through blockchain technology, we connect students
              worldwide with donors—no middlemen, just pure educational impact.
            </motion.p>
          </div>

          {/* Feature Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <Card className="backdrop-blur-xl bg-card/50 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardHeader>
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* What to Expect Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20 rounded-3xl p-8 md:p-12 mb-16"
          >
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <h3 className="text-3xl font-bold">Our Vision</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div>
                <h4 className="font-bold text-xl mb-4 text-blue-600">For Donors</h4>
                <ul className="space-y-3">
                  {comingSoonFeatures.slice(0, 3).map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-xl mb-4 text-purple-600">Platform Features</h4>
                <ul className="space-y-3">
                  {comingSoonFeatures.slice(3).map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.5 + index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Global Impact Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
            className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8 mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Globe className="h-8 w-8 text-green-600" />
              <h3 className="text-2xl font-bold">Global Educational Impact</h3>
            </div>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Connect with students from top universities worldwide. From MIT to Oxford, from Stanford to
              Cambridge—discover brilliant minds who need your support to achieve their educational dreams and create
              positive change in the world.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 