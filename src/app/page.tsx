'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import About from './about/page'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export default function Home() {
  return (
    <>
    
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br bg-slate-950 to-gray-900 opacity-50" />
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-800 rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </motion.div>
      </div>
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
              'Database Analist',
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
          {[
            { icon: FaGithub, href: 'https://github.com/cristianManco' },
            { icon: FaLinkedin, href: 'https://www.linkedin.com/in/cristiandev18' },
            { icon: FaTwitter, href: 'https://twitter.com/@Camilo224831245' },
          ].map((social, index) => (
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
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </>
  )
}