'use client'

import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { motion } from 'framer-motion'

const WhatsAppWidget: React.FC = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+57 3135258660'
  const message = 'Hola, me gustaría obtener más información sobre tus servicios.'

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-12 left-5 bg-green-400 border-2 border-green-900 text-black p-4 rounded-full shadow-lg z-50"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <FaWhatsapp size={24} />
    </motion.a>
  )
}

export default WhatsAppWidget