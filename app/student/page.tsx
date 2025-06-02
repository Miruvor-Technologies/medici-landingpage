"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, CheckCircle, Clock, Star, Zap, Shield, Users, Search, Loader2 } from "lucide-react"
import Link from "next/link"
import { useDebounce } from "@/hooks/use-debounce"

const studentTexts = [
  "Get discovered by donors worldwide.",
  "Secure funding for your education.",
  "Join the blockchain revolution.",
  "Transform your academic future.",
]

const advantages = [
  {
    icon: Star,
    title: "Priority Visibility",
    description: "Early applicants get featured prominently to donors",
  },
  {
    icon: Shield,
    title: "Verified Profile",
    description: "Build trust with comprehensive verification process",
  },
  {
    icon: Users,
    title: "Global Reach",
    description: "Connect with donors from around the world",
  },
]

interface University {
  id: string
  name: string
  city: string
  state: string
  fullName: string
}

interface FormData {
  name: string
  email: string
  university: string
  fieldOfStudy: string
  degree: string
  fundsRequested: string
  country: string
}

export default function StudentPage() {
  const [currentText, setCurrentText] = useState(0)
  const [showForm, setShowForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [universities, setUniversities] = useState<University[]>([])
  const [showUniversities, setShowUniversities] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    university: "",
    fieldOfStudy: "",
    degree: "",
    fundsRequested: "",
    country: "US"
  })
  const [isSearching, setIsSearching] = useState(false)

  const debouncedUniversitySearch = useDebounce(formData.university, 300)
  const universityInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setShowForm(true), 2500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % studentTexts.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const searchUniversities = async () => {
      if (debouncedUniversitySearch.length < 3) {
        setUniversities([])
        setIsSearching(false)
        return
      }

      setIsSearching(true)
      try {
        const response = await fetch(
          `/api/universities/search?query=${encodeURIComponent(debouncedUniversitySearch)}`
        )
        if (!response.ok) throw new Error('Failed to fetch universities')
        const data = await response.json()
        setUniversities(data)
        setShowUniversities(true)
      } catch (error) {
        console.error('Error searching universities:', error)
        setUniversities([])
      } finally {
        setIsSearching(false)
      }
    }

    searchUniversities()
  }, [debouncedUniversitySearch])

  const handleUniversitySelect = (university: University) => {
    setFormData(prev => ({
      ...prev,
      university: university.name
    }))
    setShowUniversities(false)
    setUniversities([])
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/students", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center max-w-lg"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl"
          >
            <CheckCircle className="h-12 w-12 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Application Submitted Successfully!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-muted-foreground mb-8 leading-relaxed"
          >
            Congratulations! Your application has been received and is now in our review queue. As an early applicant,
            you'll have priority visibility when we launch. We'll contact you once our platform goes live with next
            steps for profile completion and verification.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-400/30 rounded-xl p-4 mb-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="h-5 w-5 text-yellow-600" />
              <span className="font-semibold text-yellow-700 dark:text-yellow-400">Early Bird Status Confirmed</span>
            </div>
            <p className="text-sm text-yellow-700 dark:text-yellow-300">
              You're now in our priority queue for maximum donor visibility!
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }}>
            <Link href="/">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/10 dark:to-pink-950/20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {[...Array(12)].map((_, i) => (
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

      <div className="container mx-auto px-4 py-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentText}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold mb-6"
              >
                {studentTexts[currentText]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-muted-foreground leading-relaxed mb-8"
          >
            We're building the future of education funding. Get early access and priority visibility to donors worldwide
            through our blockchain-powered platform.
          </motion.p>

          {/* Development Status Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-6 mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-3">
              <Clock className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-lg">Platform in Development</span>
            </div>
            <p className="text-muted-foreground">
              Join our early access program to secure priority placement when we launch
            </p>
          </motion.div>
        </motion.div>

        {/* Advantages Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <Card className="backdrop-blur-xl bg-card/50 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Early Bird Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-2xl mb-12 max-w-2xl mx-auto shadow-xl"
        >
          <div className="flex items-center justify-center space-x-3 mb-3">
            <Star className="h-6 w-6" />
            <span className="font-bold text-xl">Early Bird Advantage</span>
          </div>
          <p className="text-center">
            Apply now for maximum visibility! Early applicants get priority placement and featured status when we
            launch.
          </p>
        </motion.div>

        {/* Form Section */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              className="max-w-2xl mx-auto"
            >
              <Card className="backdrop-blur-xl bg-card/80 border-border/50 shadow-2xl">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-3">Student Application</h2>
                    <p className="text-muted-foreground">Secure your spot in our early access program</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <Label htmlFor="name" className="text-sm font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-2 h-12"
                          placeholder="Enter your full name"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2 h-12"
                          placeholder="Enter your email"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Label htmlFor="university" className="text-sm font-medium">
                        University *
                      </Label>
                      <div className="relative">
                        <Input
                          id="university"
                          name="university"
                          type="text"
                          required
                          value={formData.university}
                          onChange={handleChange}
                          onFocus={() => {
                            if (formData.university.length >= 3) {
                              setShowUniversities(true)
                            }
                          }}
                          ref={universityInputRef}
                          className="mt-2 h-12"
                          placeholder="Start typing your university name..."
                        />
                        <div className="absolute right-3 top-5">
                          {isSearching ? (
                            <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                          ) : (
                            <Search className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                      
                      {showUniversities && universities.length > 0 && (
                        <div className="absolute z-50 w-full mt-1 bg-card rounded-md border border-border shadow-lg max-h-60 overflow-auto">
                          {universities.map((uni) => (
                            <button
                              key={uni.id}
                              type="button"
                              className="w-full px-4 py-2 text-left hover:bg-muted/50 focus:bg-muted/50 focus:outline-none"
                              onClick={() => handleUniversitySelect(uni)}
                            >
                              {uni.fullName}
                            </button>
                          ))}
                        </div>
                      )}
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <Label htmlFor="fieldOfStudy" className="text-sm font-medium">
                          Field of Study *
                        </Label>
                        <Input
                          id="fieldOfStudy"
                          name="fieldOfStudy"
                          type="text"
                          required
                          value={formData.fieldOfStudy}
                          onChange={handleChange}
                          className="mt-2 h-12"
                          placeholder="e.g., Computer Science"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <Label htmlFor="degree" className="text-sm font-medium">
                          Degree Level *
                        </Label>
                        <Select 
                          value={formData.degree}
                          onValueChange={(value) => handleSelectChange("degree", value)}
                        >
                          <SelectTrigger className="mt-2 h-12">
                            <SelectValue placeholder="Select degree level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                            <SelectItem value="master">Master's Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                            <SelectItem value="associate">Associate Degree</SelectItem>
                            <SelectItem value="certificate">Certificate Program</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
                        <Label htmlFor="fundsRequested" className="text-sm font-medium">
                          Funds Requested (USD) *
                        </Label>
                        <Input
                          id="fundsRequested"
                          name="fundsRequested"
                          type="number"
                          required
                          min="1000"
                          value={formData.fundsRequested}
                          onChange={handleChange}
                          className="mt-2 h-12"
                          placeholder="e.g., 5000"
                        />
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <Label htmlFor="country" className="text-sm font-medium">
                          Country *
                        </Label>
                        <Select 
                          defaultValue="US"
                          value={formData.country}
                          onValueChange={(value) => handleSelectChange("country", value)}
                        >
                          <SelectTrigger id="country" className="mt-2 h-12">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="US">United States</SelectItem>
                          </SelectContent>
                        </Select>
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                    >
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </motion.div>
                  </form>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="mt-6 text-center"
                  >
                    <Link href="/" className="text-blue-600 hover:text-blue-700 text-sm transition-colors">
                      ← Back to Home
                    </Link>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
