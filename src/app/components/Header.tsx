"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import { Home, User, Code, Briefcase, Mail, Menu, X, ChevronRight } from "lucide-react"

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Skills", href: "/skills", icon: Code },
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Contact", href: "/contact", icon: Mail },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 py-3" : "bg-transparent py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo mejorado con icono de programación */}
          <Link href="/" className="group">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <motion.div
                  className="text-3xl lg:text-4xl font-bold flex items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-gray-400 text-2xl lg:text-3xl font-mono">{"<"}</span>
                  <motion.span
                    className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 mx-1"
                    whileHover={{
                      backgroundImage: "linear-gradient(45deg, #a855f7, #ec4899, #8b5cf6, #d946ef)",
                    }}
                  >
                    CRIS
                  </motion.span>
                  <motion.span className="text-fuchsia-300 group-hover:text-fuchsia-200 transition-colors duration-300">
                    DEV
                  </motion.span>
                  <span className="text-gray-400 text-2xl lg:text-3xl font-mono">{"/>"}</span>
                </motion.div>

                {/* Efecto de brillo sutil */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-600/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
              </div>
            </motion.div>
          </Link>

          {/* Navegación desktop mejorada */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <Link
                  href={item.href}
                  className={`group relative flex items-center space-x-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                    pathname === item.href
                      ? "text-purple-400 bg-purple-500/10 shadow-lg shadow-purple-500/20"
                      : "text-blue-200 hover:text-purple-400 hover:bg-gray-800/50"
                  }`}
                >
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }}>
                    <item.icon size={20} />
                  </motion.div>
                  <span className="font-medium">{item.name}</span>

                  {/* Indicador activo mejorado */}
                  {pathname === item.href && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 w-1 h-1 bg-purple-400 rounded-full"
                      layoutId="activeIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  {/* Efecto hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={false}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Botón menú móvil mejorado */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative p-2 text-white focus:outline-none rounded-lg bg-gray-800/50 backdrop-blur-sm border border-gray-700/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div animate={{ rotate: mobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Menú móvil mejorado */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50 mt-2"
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`group flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 ${
                    pathname === item.href
                      ? "text-purple-400 bg-purple-500/10"
                      : "text-white hover:bg-gray-800/50 hover:text-purple-400"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                      <item.icon size={20} />
                    </motion.div>
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <ChevronRight
                    size={16}
                    className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
