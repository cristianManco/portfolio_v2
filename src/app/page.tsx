"use client"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowDown, FaCode, FaRocket, FaStar, FaDownload } from "react-icons/fa"
import About from "./about/page"
import Skills from "./skills/page"
import Portfolio from "./portfolio/page"
import Contact from "./contact/page"
import WhatsAppWidget from "./components/WhatsAppWidget"

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/cristianManco",
    label: "GitHub",
    color: "hover:text-gray-300",
    bgColor: "hover:bg-gray-700/20",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/cristiandev18",
    label: "LinkedIn",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-600/20",
  },
  {
    icon: FaEnvelope,
    href: "mailto:camilomanco2005@gmail.com",
    label: "Email",
    color: "hover:text-red-400",
    bgColor: "hover:bg-red-600/20",
  },
]

const stats = [
  { number: "2+", label: "Years Experience", icon: FaCode },
  { number: "10+", label: "Projects Completed", icon: FaRocket },
  { number: "100%", label: "Client Satisfaction", icon: FaStar },
]

export default function Home() {
  const [isClient, setIsClient] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, -50])
  const y2 = useTransform(scrollY, [0, 300], [0, -100])

  useEffect(() => {
    setIsClient(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    aboutSection?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {/* Gradient Orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="absolute top-3/4 left-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: 4,
            }}
          />

          {/* Floating Particles */}
          {isClient &&
            [...Array(30)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                transition={{
                  duration: Math.random() * 20 + 10,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "linear",
                }}
              />
            ))}

          {/* Mouse Follower */}
          {isClient && (
            <motion.div
              className="absolute w-6 h-6 bg-purple-500/20 rounded-full blur-sm pointer-events-none"
              animate={{
                x: mousePosition.x - 12,
                y: mousePosition.y - 12,
              }}
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 28,
              }}
            />
          )}
        </div>

        {/* Main Content */}
        <motion.div className="relative z-10 text-center px-4 py-10" style={{ y: y1 }}>
          {/* Greeting */}
          <motion.div
            className="mb-10 mt-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
              Available for new opportunities
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white mb-2">Hello, I&apos;m</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Cristian Manco
            </span>
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.div
            className="text-xl md:text-3xl lg:text-4xl text-gray-300 mb-8 h-16 flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="mr-3">I&apos;m a</span>
            <span className="text-purple-400 font-semibold">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "UI/UX Expert",
                  2000,
                  "Problem Solver",
                  2000,
                  "Tech Enthusiast",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Number.POSITIVE_INFINITY}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about creating innovative digital solutions that make a difference. I transform ideas into
            beautiful, functional applications.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.a
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Get In Touch</span>
                <FaRocket className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="/img/HV-CRISTIAN MANCO.pdf"
              download
              className="group flex items-center space-x-2 px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-medium rounded-2xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="group-hover:animate-bounce" />
              <span>Download CV</span>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 text-gray-400 transition-all duration-300 ${social.color} ${social.bgColor} hover:border-purple-500/50`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 1.2 }}
              >
                <social.icon size={24} />
                <span className="sr-only">{social.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="text-white text-lg" />
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.button
            onClick={scrollToAbout}
            className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            whileHover={{ y: -5 }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
              <FaArrowDown className="group-hover:text-purple-400 transition-colors duration-300" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute bottom-10 left-10 w-20 h-20 border border-purple-500/20 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ y: y2 }}
        />
        <motion.div
          className="absolute top-20 right-20 w-16 h-16 border border-pink-500/20 rounded-full"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ y: y1 }}
        />
      </div>

      {/* Sections */}
      <div id="about">
        <About />
      </div>
      <Skills />
      <Portfolio />
      <Contact />
      <WhatsAppWidget />  
    </>
  )
}
