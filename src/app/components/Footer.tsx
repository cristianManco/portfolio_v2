"use client"
import { motion } from "framer-motion"
import { FaLinkedinIn, FaEnvelope, FaWhatsapp, FaGithub } from "react-icons/fa"
import { ArrowUp, Heart, Code2 } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    {
      icon: FaGithub,
      href: "https://github.com/cristianManco",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
    {
      icon: FaLinkedinIn,
      href: "https://www.linkedin.com/in/cristiandev18",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      icon: FaEnvelope,
      href: "https://mail.google.com/mail/u/1/#inbox",
      label: "Email",
      color: "hover:text-red-400",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/3148497467",
      label: "WhatsApp",
      color: "hover:text-green-400",
    },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-950 to-black text-white overflow-hidden">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10" />
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 py-16">
        <div className="flex flex-col items-center space-y-12">
          {/* Botón scroll to top mejorado */}
          <motion.button
            onClick={scrollToTop}
            className="group relative p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ArrowUp className="w-6 h-6 text-white group-hover:animate-bounce" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </motion.button>

          {/* Logo del footer */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <span className="text-gray-400 text-xl font-mono">{"<"}</span>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                CRISDEV
              </span>
              <span className="text-gray-400 text-xl font-mono">{"/>"}</span>
            </div>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              Desarrollador Full Stack apasionado por crear experiencias digitales excepcionales
            </p>
          </motion.div>

          {/* Enlaces sociales mejorados */}
          <motion.div
            className="flex flex-wrap justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 text-purple-400 transition-all duration-300 ${link.color}`}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
              >
                <link.icon className="text-xl" />
                <span className="sr-only">{link.label}</span>

                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  {link.label}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>

                {/* Efecto hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.a>
            ))}
          </motion.div>

          {/* Separador decorativo */}
          <motion.div
            className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />

          {/* Copyright mejorado */}
          <motion.div
            className="text-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-gray-400 flex items-center justify-center space-x-2">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>y</span>
              <Code2 className="w-4 h-4 text-purple-400" />
              <span>por Cristian Manco</span>
            </p>
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados</p>
          </motion.div>
        </div>
      </div>

      {/* Efecto de partículas sutil */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-50" />
    </footer>
  )
}
