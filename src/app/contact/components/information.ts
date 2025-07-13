import { FaEnvelope, FaGithub, FaGlobe, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaWhatsapp } from "react-icons/fa"

export interface FormDataEmail {
  name: string
  email: string
  subject: string
  message: string
}

export interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "CR 65C #38A SUR-44, San Antonio de Prado",
    subValue: "Medellín, Antioquia, Colombia",
    color: "from-red-500 to-pink-500",
    href: "https://maps.google.com",
  },
  {
    icon: FaPhone,
    title: "Phone",
    value: "+57 313 525 8660",
    subValue: "Available 9AM - 6PM",
    color: "from-green-500 to-emerald-500",
    href: "tel:+573135258660",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    value: "camilomanco2005@gmail.com",
    subValue: "Response within 24h",
    color: "from-blue-500 to-cyan-500",
    href: "mailto:camilomanco2005@gmail.com",
  },
  {
    icon: FaGlobe,
    title: "Website",
    value: "cristdev.vercel.app",
    subValue: "Portfolio & Blog",
    color: "from-purple-500 to-pink-500",
    href: "https://cristdev.vercel.app",
  },
]

export const socialLinks = [
  {
    icon: FaGithub,
    name: "GitHub",
    href: "https://github.com/cristianManco",
    color: "hover:text-gray-300",
    bgColor: "hover:bg-gray-700",
  },
  {
    icon: FaLinkedinIn,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/cristiandev18",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-600/20",
  },
  {
    icon: FaWhatsapp,
    name: "WhatsApp",
    href: "https://wa.me/3135258660",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-600/20",
  },
  {
    icon: FaEnvelope,
    name: "Email",
    href: "mailto:camilomanco2005@gmail.com",
    color: "hover:text-red-400",
    bgColor: "hover:bg-red-600/20",
  },
]
