'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { FaLinkedinIn, FaEnvelope, FaWhatsapp, FaGithub } from 'react-icons/fa'

export default function Footer() {
  const socialLinks = [
    // { icon: FaTwitter, href: 'https://twitter.com/@Camilo224831245', label: 'Twitter' },
    { icon: FaGithub, href: 'https://github.com/cristianManco', label: 'GitHub' },
    // { icon: FaSkype, href: 'https://secure.skype.com/', label: 'Skype' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/in/cristiandev18', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'https://mail.google.com/mail/u/1/#inbox', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/3148497467', label: 'WhatsApp' },
  ]

  return (
    <footer className="bg-slate-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            <Link href="#inicio" className="mb-8 inline-block">
              <i className="fas fa-angles-up text-3xl text-purple-400 hover:text-purple-300 transition-colors duration-300"></i>
            </Link>
          </motion.div>
          <div className="flex space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              >
                <link.icon className="text-2xl" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>
          <motion.p 
            className="text-center text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            All rights reserved: Cristian Manco &copy; {new Date().getFullYear()}
          </motion.p>
        </div>
      </div>
    </footer>
  )
}