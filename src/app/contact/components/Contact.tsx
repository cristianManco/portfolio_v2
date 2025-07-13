"use client"
import { useState, useRef } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { toast, Toaster } from "react-hot-toast"
import {
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaEdit,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa"
import { contactInfo, FormDataEmail, FormErrors, socialLinks } from "./information"
import InputField from "./InputField" // Importar el componente independiente

export default function Contact() {
  const [formData, setFormData] = useState<FormDataEmail>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "name":
        return value.length < 10 ? "Name must be at least 10 characters" : undefined
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : undefined
      case "subject":
        return value.length < 10 ? "Subject must be at least 10 characters" : undefined
      case "message":
        return value.length < 30 ? "Message must be at least 30 characters" : undefined
      default:
        return undefined
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Real-time validation
    const error = validateField(name, value)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate all fields
    const newErrors: FormErrors = {}
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value)
      if (error) newErrors[key as keyof FormErrors] = error
    })

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setIsSubmitting(false)
      return
    }

    try {
      // Enviar a la API real
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Email sent successfully:', result)

      setIsSuccess(true)
      toast.success("Message sent successfully! I'll get back to you soon.", {
        icon: "🎉",
        style: {
          borderRadius: "12px",
          background: "#1f2937",
          color: "#fff",
          border: "1px solid #374151",
        },
        duration: 5000,
      })

      setFormData({ name: "", email: "", subject: "", message: "" })
      setErrors({})

      // Reset success state after animation
      setTimeout(() => setIsSuccess(false), 3000)
    } catch (error) {
      console.error('Error sending email:', error)
      toast.error("Failed to send message. Please try again.", {
        icon: "❌",
        style: {
          borderRadius: "12px",
          background: "#1f2937",
          color: "#fff",
          border: "1px solid #374151",
        },
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleFieldFocus = (fieldName: string) => {
    setFocusedField(fieldName)
  }

  const handleFieldBlur = () => {
    setFocusedField(null)
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-10">
      <Toaster position="top-right" />

      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      {/* Hero Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                Let&apos;s Work Together
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? I&apos;d love to hear about it. Send me a message and let&apos;s create something amazing
              together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50">
                <h2 className="text-3xl font-bold mb-8">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Send Message
                  </span>
                </h2>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <InputField
                    name="name"
                    placeholder="Your Name"
                    icon={FaUser}
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus("name")}
                    onBlur={handleFieldBlur}
                    error={errors.name}
                    isFocused={focusedField === "name"}
                  />
                  
                  <InputField
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    icon={FaEnvelope}
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus("email")}
                    onBlur={handleFieldBlur}
                    error={errors.email}
                    isFocused={focusedField === "email"}
                  />
                  
                  <InputField
                    name="subject"
                    placeholder="Subject"
                    icon={FaEdit}
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus("subject")}
                    onBlur={handleFieldBlur}
                    error={errors.subject}
                    isFocused={focusedField === "subject"}
                  />
                  
                  <InputField
                    name="message"
                    placeholder="Your Message"
                    icon={FaEdit}
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFieldFocus("message")}
                    onBlur={handleFieldBlur}
                    error={errors.message}
                    isFocused={focusedField === "message"}
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting || isSuccess}
                    className={`group relative w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 ${
                      isSuccess
                        ? "bg-green-600 text-white"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:shadow-lg hover:shadow-purple-500/25"
                    }`}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="submitting"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center space-x-2"
                        >
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                          >
                            <FaClock />
                          </motion.div>
                          <span>Sending...</span>
                        </motion.div>
                      ) : isSuccess ? (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center justify-center space-x-2"
                        >
                          <FaCheckCircle />
                          <span>Message Sent!</span>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="default"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="flex items-center justify-center space-x-2"
                        >
                          <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                          <span>Send Message</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <info.icon className="text-white text-xl" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors duration-300">
                            {info.title}
                          </h3>
                          <p className="text-gray-300 font-medium">{info.value}</p>
                          <p className="text-gray-400 text-sm">{info.subValue}</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50">
                <h3 className="text-2xl font-bold mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                    Connect With Me
                  </span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-3 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 transition-all duration-300 ${social.color} ${social.bgColor}`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    >
                      <social.icon className="text-xl" />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <motion.div
                className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm rounded-2xl p-6 border border-green-500/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <div>
                    <h4 className="text-white font-semibold">Available for Projects</h4>
                    <p className="text-gray-300 text-sm">Currently accepting new opportunities</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}