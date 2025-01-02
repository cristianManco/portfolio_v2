'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaDatabase, FaNodeJs,} from 'react-icons/fa'
import { SiNestjs, SiPostgresql, SiMongodb, SiTypescript,SiMysql, } from 'react-icons/si'

const projects = [
  { 
    id: '1', 
    name: 'API', 
    image: '/img/image copy 7.png', 
    tech: [<SiTypescript size={20} color="#3178C6" key="typescript" />, <SiNestjs size={20} color="#E0234E" key="nestjs" />, <SiPostgresql size={20} color="blueviolet" key="postgresql" />],
    description: 'A robust API built with NestJS and PostgreSQL.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
  { 
    id: '2', 
    name: 'Digital clock', 
    image: '/img/image copy 8.png', 
    tech: [<FaHtml5 size={20} color="#E44D26" key="html5" />, <FaCss3Alt size={20} color="#1572B6" key="css3" />, <FaJsSquare size={20} color="#F7DF1E" key="javascript" />],
    description: 'A sleek digital clock implementation using vanilla JavaScript.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
  { 
    name: 'Shopping cart', 
    image: '/img/image copy.png', 
    tech: [<FaHtml5 size={20} color="#E44D26" key="html5" />, <FaCss3Alt size={20} color="#1572B6" key="css3" />, <FaJsSquare size={20} color="#F7DF1E" key="javascript" />],
    description: 'An interactive shopping cart with dynamic updates.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
  { 
    name: 'Coders Finder', 
    image: '/img/image2.png', 
    tech: [<FaHtml5 size={20} color="#E44D26" key="html5" />, <FaCss3Alt size={20} color="#1572B6" key="css3" />, <FaJsSquare size={20} color="#F7DF1E" key="javascript" />],
    description: 'A platform to connect with and find skilled coders.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
  { 
    name: 'Metalifeverse', 
    image: '/img/image copy 6.png', 
    tech: [<FaHtml5 size={20} color="#E44D26" key="html5" />, <FaCss3Alt size={20} color="#1572B6" key="css3" />, <FaJsSquare size={20} color="#F7DF1E" key="javascript" />],
    description: 'An immersive metaverse experience for digital life.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
  { 
    name: 'Login', 
    image: '/img/image copy 5.png', 
    tech: [<FaHtml5 size={20} color="#E44D26" key="html5" />, <FaCss3Alt size={20} color="#1572B6" key="css3" />, <FaJsSquare size={20} color="#F7DF1E" key="javascript" />],
    description: 'A secure and user-friendly login interface.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
  { 
    name: 'WEB Cafeteria', 
    image: '/img/Captura de pantalla 2024-08-30 214412.png', 
    tech: [<FaHtml5 size={20} color="#E44D26" key="html5" />, <FaCss3Alt size={20} color="#1572B6" key="css3" />, <FaJsSquare size={20} color="#F7DF1E" key="javascript" />, <SiNestjs size={20} color="#E0234E" key="nestjs" />],
    description: 'A full-stack web application for a cafeteria management system.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
  { 
    name: 'cine Colombia Plantilla', 
    image: '/img/image copy 3.png', 
    tech: [<FaHtml5 size={20} color="#E44D26" key="html5" />, <FaCss3Alt size={20} color="#1572B6" key="css3" />, <FaJsSquare size={20} color="#F7DF1E" key="javascript" />],
    description: 'A template for a cinema website inspired by Cine Colombia.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
  { 
    name: 'API REST', 
    image: '/img/image copy 2.png', 
    tech: [<SiNestjs size={20} color="#E0234E" key="nestjs" />, <SiMongodb size={20} color="#47A248" key="mongodb" />, <SiTypescript size={20} color="#3178C6" key="typescript" />],
    description: 'A RESTful API built with NestJS, MongoDB, and TypeScript.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
  { 
    name: 'DATABASE', 
    image: '/img/fondo.jpg', 
    tech: [<SiMongodb size={20} color="#47A248" key="mongodb" />, <FaDatabase size={20} color="#F0DB4F" key="mysql" />, <FaJsSquare size={20} color="#F7DF1E" key="javascript" />, <FaHtml5 size={20} color="#E44D26" key="html5" />],
    description: 'A comprehensive database solution using MongoDB and MySQL.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
  { 
    name: 'APIS BACKEND', 
    image: '/img/images1.jpeg', 
    tech: [<SiMongodb size={20} color="#47A248" key="mongodb" />, <FaDatabase size={20} color="#F0DB4F" key="mysql" />, <SiNestjs size={20} color="#E0234E" key="nestjs" />, <SiTypescript size={20} color="#3178C6" key="typescript" />,
      <SiMysql size={20} color="#61DAFB" key="react" />, <FaNodeJs size={20} color="green" key="node" />],
    description: 'A collection of backend APIs using various technologies.',
    websiteUrl: 'https://github.com/cristianManco?tab=repositories'
  },
]

export default function Portfolio() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <section id="portfolio" className="py-20 bg-slate-950">
      <br />
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            PORTFOLIO
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.name}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredProject(project.name)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
                  sizes=''
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{project.name}</h3>
                <AnimatePresence>
                  {hoveredProject === project.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-gray-300 mb-4"
                    >
                      {project.description}
                    </motion.div>
                  )}
                </AnimatePresence>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <li key={techIndex} className="border-2 border-slate-600 text-xs font-semibold px-2 py-1 rounded">
                      {tech}
                    </li>
                  ))}
                </ul>
                <Link
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  See code <i className="fas fa-external-link-alt ml-1"></i>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
