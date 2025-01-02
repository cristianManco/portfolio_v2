'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import About from './about/page'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import WhatsAppWidget from './components/WhatsAppWidget'

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  // Verificar si el código se está ejecutando en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
        
        {/* Contenedor de partículas */}
        {isClient && (
          <div className="particles-container">
            {[...Array(60)].map((_, index) => (
              <motion.div
                key={index}
                className="particle"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: Math.random(),
                }}
                animate={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: Math.random(),
                }}
                transition={{
                  duration: Math.random() * 12 + 12,
                  repeat: Infinity,
                  repeatType: 'reverse',
                }}
              />
            ))}
          </div>
        )}

        {/* Fondo con gradiente */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br bg-slate-950 to-gray-900 opacity-50" />
        
        {/* Contenido Principal */}
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Cristian Manco
            </span>
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl text-purple-300 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Software Developer',
                2000,
                'UI/UX Expert',
                2000,
                'Problem Solver',
                2000,
                'Database Analyst',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            className="flex justify-center space-x-4 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[{ icon: FaGithub, href: 'https://github.com/cristianManco' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/cristiandev18' },
              { icon: FaTwitter, href: 'https://twitter.com/@Camilo224831245' }]
              .map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-purple-400 transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                >
                  <social.icon size={30} />
                </motion.a>
              ))}
          </motion.div>

          <motion.a
            href="/contact"
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-black font-bold py-3 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </div>
      </div>
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <WhatsAppWidget />
    </>
  )
}
