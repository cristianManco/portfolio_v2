"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import {
  FaDownload,
} from "react-icons/fa"
import ExperienceAndEducation from "./components/Experience"
import { interests, personalData } from "./components/interests"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 pt-10">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                About Me
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate developer crafting digital experiences with code and creativity
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Profile Section */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-full">
                  <Image
                    width={300}
                    height={300}
                    src="/img/codigo.jpg"
                    alt="Cristian"
                    className="w-80 h-80 object-cover rounded-full bg-slate-900"
                  />
                </div>
                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                />
              </div>

              {/* Description */}
              <div className="space-y-6">
                <motion.p
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Hello, I&apos;m <span className="text-purple-400 font-semibold">Cristian</span>, a passionate software
                  developer with a love for problem-solving and creating innovative solutions. My journey in the world
                  of technology started from a young age, and since then, I have acquired skills in a variety of
                  programming languages and technologies.
                </motion.p>

                <motion.p
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  I strongly believe in <span className="text-pink-400 font-semibold">continuous learning</span> and
                  adaptability in this constantly evolving field. My goal is to use my technical and creative skills to
                  develop software that makes a meaningful impact and improves people&apos;s lives.
                </motion.p>

                <motion.p
                  className="text-gray-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  I&apos;m always looking for new opportunities to grow and challenges to overcome. I hope to have the
                  opportunity to work with you and create something{" "}
                  <span className="text-purple-400 font-semibold">amazing</span> together!
                </motion.p>

                {/* Download CV Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <motion.a
                    href="/img/HV-CRISTIAN MANCO.pdf"
                    download
                    className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="group-hover:animate-bounce" />
                    <span>Download CV</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            {/* Personal Data & Interests */}
            <motion.div
              className="space-y-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Personal Data */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-8">
                  Personal Data
                </h3>
                <div className="space-y-6">
                  {personalData.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-4 group"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="text-white text-lg" />
                      </div>
                      <div>
                        <p className="text-purple-400 font-semibold text-sm uppercase tracking-wide">{item.label}</p>
                        <p className="text-gray-300 text-lg">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50">
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-8">
                  Interests
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {interests.map((interest, index) => (
                    <motion.div
                      key={index}
                      className="group relative overflow-hidden bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      {/* Background Gradient */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      <div className="relative flex flex-col items-center text-center space-y-3">
                        <div
                          className={`w-12 h-12 bg-gradient-to-r ${interest.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <interest.icon className="text-white text-xl" />
                        </div>
                        <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors duration-300">
                          {interest.name}
                        </span>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <ExperienceAndEducation />
    </div>
  )
}
