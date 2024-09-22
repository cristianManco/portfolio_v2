'use client'

import { motion } from 'framer-motion'
import { FaGamepad, FaHeadphones, FaPlane, FaCode, FaHiking, FaBook, FaCar, FaFilm } from 'react-icons/fa'

const interests = [
  { name: 'GAMES', icon: FaGamepad },
  { name: 'MUSIC', icon: FaHeadphones },
  { name: 'TRAVEL', icon: FaPlane },
  { name: 'DEVELOPMENT', icon: FaCode },
  { name: 'SPORTS', icon: FaHiking },
  { name: 'BOOKS', icon: FaBook },
  { name: 'CARS', icon: FaCar },
  { name: 'MOVIES', icon: FaFilm },
]

export default function About() {
  return (
    <section className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            About Me
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hello, I`m Cristian, a passionate software developer with a love for problem-solving and creating innovative solutions. My journey in the world of technology started from a young age, and since then, I have acquired skills in a variety of programming languages and technologies.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I strongly believe in continuous learning and adaptability in this constantly evolving field. My goal is to use my technical and creative skills to develop software that makes a meaningful impact and improves people`s lives.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I`m always looking for new opportunities to grow and challenges to overcome. I hope to have the opportunity to work with you and create something amazing together!
            </p>
            <motion.a
              href="/img/Cristian-CV.pdf"
              download
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV <i className="fas fa-download ml-2"></i>
            </motion.a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-pink-600 mb-6">Personal Data</h3>
            <ul className="space-y-4 text-gray-300">
              <li><strong className="text-purple-400">Birthday:</strong> 10-10-2004</li>
              <li><strong className="text-purple-400">Phone:</strong> 313-525-86-60</li>
              <li><strong className="text-purple-400">Email:</strong> riwiaprender@gmail.com</li>
              <li><strong className="text-purple-400">Website:</strong> https://cristdev1.vercel.app/</li>
              <li><strong className="text-purple-400">Address:</strong> CR 65 San Antonio prado, Medellin</li>
              <li><strong className="text-purple-400">Position:</strong> FREELANCE AND STUDY</li>
            </ul>
            <h3 className="text-2xl font-semibold text-pink-600 mt-12 mb-6">Interests</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {interests.map((interest, index) => (
                <motion.div 
                  key={index} 
                  className="flex flex-col items-center justify-center bg-gray-800 p-4 rounded-lg hover:bg-purple-700 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <interest.icon className="text-3xl text-black mb-2" />
                  <span className="text-gray-400 text-sm">{interest.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}