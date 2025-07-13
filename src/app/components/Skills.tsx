"use client"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaHtml5,
  FaJava,
  FaMicrosoft,
  FaUsers,
  FaLightbulb,
  FaClock,
  FaHeart,
  FaShieldAlt,
  FaProjectDiagram,
  FaComments,
  FaSync,
  FaHandshake,
} from "react-icons/fa"
import { SiNestjs, SiMongodb, SiPostgresql } from "react-icons/si"

const technicalSkills = [
  {
    name: "JavaScript & TypeScript",
    level: 85,
    icon: FaJsSquare,
    color: "from-yellow-500 to-orange-500",
    description: "Modern ES6+, TypeScript, async/await",
  },
  {
    name: "NestJS",
    level: 90,
    icon: SiNestjs,
    color: "from-red-500 to-pink-500",
    description: "Scalable Node.js server-side applications",
  },
  {
    name: "Node.js & Express",
    level: 80,
    icon: FaNodeJs,
    color: "from-green-500 to-emerald-500",
    description: "RESTful APIs, middleware, authentication",
  },
  {
    name: "Next.js & React",
    level: 85,
    icon: FaReact,
    color: "from-cyan-500 to-blue-500",
    description: "SSR, SSG, hooks, context, state management",
  },
  {
    name: "Vue.js",
    level: 40,
    icon: FaVuejs,
    color: "from-green-400 to-green-600",
    description: "Component-based architecture, Vuex",
  },
  {
    name: "HTML & CSS",
    level: 88,
    icon: FaHtml5,
    color: "from-orange-500 to-red-500",
    description: "Semantic HTML, CSS3, Flexbox, Grid",
  },
  {
    name: "PostgreSQL & MySQL",
    level: 79,
    icon: SiPostgresql,
    color: "from-blue-600 to-purple-600",
    description: "Database design, queries, optimization",
  },
  {
    name: "MongoDB",
    level: 89,
    icon: SiMongodb,
    color: "from-green-600 to-green-700",
    description: "NoSQL, aggregation, indexing",
  },
  {
    name: "C# .NET",
    level: 40,
    icon: FaMicrosoft,
    color: "from-purple-600 to-blue-600",
    description: "Object-oriented programming, MVC",
  },
  {
    name: "Java",
    level: 30,
    icon: FaJava,
    color: "from-red-600 to-orange-600",
    description: "OOP, Spring Framework basics",
  },
]

const professionalSkills = [
  {
    name: "Communication",
    level: 90,
    icon: FaComments,
    color: "from-blue-500 to-cyan-500",
    description: "Clear and effective communication",
  },
  {
    name: "Teamwork",
    level: 97,
    icon: FaUsers,
    color: "from-purple-500 to-pink-500",
    description: "Collaborative problem solving",
  },
  {
    name: "Creativity",
    level: 95,
    icon: FaLightbulb,
    color: "from-yellow-500 to-orange-500",
    description: "Innovative solutions and ideas",
  },
  {
    name: "Discipline",
    level: 90,
    icon: FaShieldAlt,
    color: "from-gray-500 to-gray-600",
    description: "Consistent work ethic",
  },
  {
    name: "Dedication",
    level: 98,
    icon: FaHeart,
    color: "from-red-500 to-pink-500",
    description: "Passionate about development",
  },
  {
    name: "Responsibility",
    level: 99,
    icon: FaShieldAlt,
    color: "from-green-500 to-emerald-500",
    description: "Accountable and reliable",
  },
  {
    name: "Project Management",
    level: 94,
    icon: FaProjectDiagram,
    color: "from-indigo-500 to-purple-500",
    description: "Agile methodologies, planning",
  },
  {
    name: "Time Management",
    level: 96,
    icon: FaClock,
    color: "from-orange-500 to-red-500",
    description: "Efficient task prioritization",
  },
  {
    name: "Adaptation to Change",
    level: 99,
    icon: FaSync,
    color: "from-teal-500 to-cyan-500",
    description: "Flexible and adaptable",
  },
  {
    name: "Empathy",
    level: 97,
    icon: FaHandshake,
    color: "from-pink-500 to-rose-500",
    description: "Understanding team dynamics",
  },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProgressBar = ({ skill, index, type }: { skill: any; index: number; type: string }) => {
  const [progress, setProgress] = useState(0)
  console.log(type);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        setProgress(skill.level)
      },
      index * 200 + 500,
    )

    return () => clearTimeout(timer)
  }, [skill.level, index])

  return (
    <motion.div
      className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div
          className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
        >
          <skill.icon className="text-white text-xl" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg group-hover:text-purple-400 transition-colors duration-300">
            {skill.name}
          </h3>
          {skill.description && <p className="text-gray-400 text-sm">{skill.description}</p>}
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-white">{skill.level}%</span>
        </div>
      </div>

      {/* Custom Progress Bar */}
      <div className="relative">
        <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
          >
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </motion.div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          className="absolute top-0 h-3 w-1 bg-white rounded-full shadow-lg"
          initial={{ left: 0 }}
          animate={{ left: `${progress}%` }}
          transition={{ duration: 1.5, delay: index * 0.1 + 0.5, ease: "easeOut" }}
          style={{ transform: "translateX(-50%)" }}
        />
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    </motion.div>
  )
}

export default function Skills() {
  return (
    <div className="min-h-screen bg-slate-950 pt-20">
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
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
                My Skills
              </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and professional capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Sections */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Technical Skills */}
            <div>
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Technical Skills
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">Programming languages, frameworks, and technologies I work with</p>
              </motion.div>

              <div className="space-y-6">
                {technicalSkills.map((skill, index) => (
                  <ProgressBar key={skill.name} skill={skill} index={index} type="technical" />
                ))}
              </div>
            </div>

            {/* Professional Skills */}
            <div>
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-4">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-600">
                    Professional Skills
                  </span>
                </h2>
                <p className="text-gray-400 text-lg">Soft skills and professional competencies that drive success</p>
              </motion.div>

              <div className="space-y-6">
                {professionalSkills.map((skill, index) => (
                  <ProgressBar key={skill.name} skill={skill} index={index} type="professional" />
                ))}
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <motion.div
            className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: "10+", label: "Technologies", color: "from-blue-500 to-cyan-500" },
              { number: "3+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
              { number: "15+", label: "Projects Completed", color: "from-green-500 to-emerald-500" },
              { number: "100%", label: "Commitment", color: "from-orange-500 to-red-500" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
