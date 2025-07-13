'use client'
import { useState } from "react"
import React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  FaExternalLinkAlt,
  FaGithub,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaDatabase,
  FaMobile,
  FaDesktop,
  FaFilter,

} from "react-icons/fa"
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb, SiPostgresql, } from "react-icons/si"
import { projects } from "./projects"


const categories = ["All", "Frontend", "Backend", "Full Stack", "Mobile"]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const techIcons: { [key: string]: any } = {
  "Next.js": SiNextdotjs,
  React: FaReact,
  "Vue.js": FaVuejs,
  "Node.js": FaNodeJs,
  NestJS: SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  console.log(hoveredProject);

  const filteredProjects = projects.filter(
    (project) => selectedCategory === "All" || project.category === selectedCategory,
  )

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Frontend":
        return FaDesktop
      case "Backend":
        return FaDatabase
      case "Mobile":
        return FaMobile
      default:
        return FaDesktop
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 pt-10">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
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
                My Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A collection of projects showcasing my skills and passion for development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`group relative px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${selectedCategory === category
                    ? "text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25"
                    : "text-gray-400 bg-gray-800/50 hover:text-white hover:bg-gray-700/50"
                  }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              >
                <div className="flex items-center space-x-2">
                  <FaFilter className="text-sm" />
                  <span>{category}</span>
                </div>
                {selectedCategory === category && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-20"
                    layoutId="activeCategory"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group relative"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(Number(project.id))}
                  onHoverEnd={() => setHoveredProject(null)}
                >
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20">
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${project.status === "Completed"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}
                    >
                      {project.status}
                    </span>
                  </div>

                  <motion.div
                    className="bg-gray-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500"
                    whileHover={{ y: -10 }}
                  >
                    {/* Project Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />

                      {/* Overlay on Hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex space-x-3">
                            <Link
                              href={project.websiteUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 bg-gray-900/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-gray-800/80 transition-colors duration-300"
                            >
                              <FaGithub className="text-sm" />
                              <span className="text-sm font-medium">Code</span>
                            </Link>
                            <Link
                              href={project.liveUrl || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-2 bg-purple-600/80 backdrop-blur-sm text-white px-4 py-2 rounded-xl hover:bg-purple-700/80 transition-colors duration-300"
                            >
                              <FaExternalLinkAlt className="text-sm" />
                              <span className="text-sm font-medium">Live</span>
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                          {project.name}
                        </h3>
                        <div className="flex items-center space-x-2 text-gray-400">
                          {React.createElement(getCategoryIcon(project.category), { className: "text-sm" })}
                          <span className="text-sm">{project.year}</span>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">{project.description}</p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, techIndex) => (
                          <div
                            key={techIndex}
                            className="flex items-center space-x-1 bg-gray-800/50 text-gray-300 text-xs px-3 py-1 rounded-full border border-gray-700/50"
                          >
                            {techIcons[tech] && React.createElement(techIcons[tech], { className: "text-xs" })}
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>

                      {/* Category Badge */}
                      <div className="flex items-center space-x-2">
                        <span className="bg-purple-500/20 text-purple-400 text-xs font-semibold px-3 py-1 rounded-full border border-purple-500/30">
                          {project.category}
                        </span>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-gray-400 text-lg">No projects found in this category.</div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  )
}
