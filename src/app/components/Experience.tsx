'use client'

import { motion } from 'framer-motion'
import { FaLaptopCode, FaUniversity, FaBriefcase, FaGraduationCap, FaLaptop, FaCode } from 'react-icons/fa'

const experienceAndStudies = [
  {
    id: '1',
    title: 'Software Developer',
    icon: FaLaptopCode,
    description: 'Worked as an intern developing web applications using JavaScript, HTML, and CSS. Collaborated with a team to build and maintain client websites.',
    date: 'January 2022 - Present',
    type: 'work', // Nueva propiedad para diferenciar tipo
  },
  {
    id: '2',
    title: 'Technician in software analysis and development',
    icon: FaUniversity,
    description: 'Studied software development focusing on algorithms, data structures, and software development methodologies. Graduated with honors.',
    date: '2023 - 2024',
    type: 'education', // Nueva propiedad para diferenciar tipo
  },
  {
    id: '3',
    title: 'Freelance Developer',
    icon: FaBriefcase,
    description: 'Worked on various freelance projects, building websites and web applications for clients. Technologies used: HTML, CSS, JavaScript, React, Node.js, nestJS, SQL, MongoDB.',
    date: 'April 2023',
    type: 'work',
  },
  {
    id: '4',
    title: 'Online Web Developer Udemy',
    icon: FaLaptop,
    description: 'Completed an intensive online bootcamp focusing on full-stack development. Learned front-end and back-end technologies such as React, Node.js, MongoDB, and Express.',
    date: '2023',
    type: 'education',
  },
  {
    id: '5',
    title: 'Software Developer',
    icon: FaLaptopCode,
    description: 'Software developer in BPO Global services. Built websites and web applications for clients. Front-end and back-end technologies such as React, Node.js, MongoDB, and Express.',
    date: '2024 - 2025',
    type: 'work',
  },
  {
    id: '6',
    title: 'Full Stack Developer',
    icon: FaLaptopCode,
    description: 'Full Stack developer in Riwi.io contract for training. Built websites and web applications for clients. Front-end and back-end technologies such as React, Node.js, MongoDB, and Express.',
    date: '2024 - 2025',
    type: 'work',
  },
  {
    id: '7',
    title: 'Testing with Python',
    icon: FaLaptopCode,
    description: 'Worked on testing using Python to automate tasks and improve application performance.',
    date: '2024 - 2025',
    type: 'work',
  },
  {
    id: '8',
    title: 'Methodologies and Skills',
    icon: FaGraduationCap,
    description: 'Courses on YouTube focusing on modern development methodologies and skills.',
    date: '2024 - 2025',
    type: 'education',
  },
  {
    id: '9',
    title: 'Git, GitHub',
    icon: FaCode,
    description: 'Learning and applying version control using Git and GitHub for various projects.',
    date: '2024 - 2025',
    type: 'education',
  },
]

export default function ExperienceAndEducation() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Experience & Education
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experienceAndStudies.map((item) => (
            <motion.div
              key={item.id}
              className={`bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Agregar la barra de color con animación */}
              <div
                className={`absolute top-0 left-0 h-full w-2 rounded-l-lg transition-all duration-500 ${item.type === 'work' ? 'bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 animate-pulse' : 'bg-gradient-to-b from-green-500 via-green-600 to-green-700 animate-pulse'}`}
              ></div>

              <div className="flex items-center mb-4">
                <item.icon className="text-3xl text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-sky-400">{item.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 flex-grow">{item.description}</p>

              {/* Agregar espacio  entre la descripción y la fecha/etiqueta */}
              <div className="mt-auto flex justify-between items-center w-full">
                <span className={`text-sm text-gray-400`}>{item.date}</span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${item.type === 'work' ? 'bg-blue-800 text-black' : 'bg-green-800 text-black'}`}
                >
                  {item.type === 'work' ? 'Work Experience' : 'Education'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
