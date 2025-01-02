'use client'

import { motion } from 'framer-motion'
import { LinearProgress } from '@mui/material'
// Importar los iconos de React Icons
import { FaJsSquare, FaReact, FaNodeJs, FaVuejs, FaHtml5, FaJava, FaMicrosoft } from 'react-icons/fa'
import { SiNestjs, SiMongodb, SiPostgresql, } from 'react-icons/si'

const skills = [
  { name: 'Javascript & Typescript', level: 85, icon: <FaJsSquare size={24} color='#00BFFF'/>  },
  { name: 'Nestjs', level: 90, icon: <SiNestjs size={24} color='red'/> },
  { name: 'Nodejs & express', level: 80, icon: <FaNodeJs size={24} color='green'/> },
  { name: 'Nextjs & Reactjs', level: 65, icon: <FaReact size={24} color='0ffff'/> },
  { name: 'Vuejs', level: 40, icon: <FaVuejs size={24} color='green'/> },
  { name: 'HTML & CSS', level: 88, icon: <FaHtml5 size={24} color='orange'/> },
  { name: 'MYSQL & POSTGRESQL', level: 79, icon: <SiPostgresql size={24} color='blueviolet'/> },
  { name: 'MONGO DB', level: 89, icon: <SiMongodb size={24} color='green'/> },
  { name: 'C# .NET', level: 60, icon: <FaMicrosoft size={24} color='0fffff'/> },
  { name: 'Java', level: 39, icon: <FaJava size={24} color='00ffff'/> },
]

const professionalSkills = [
  { name: 'Communication', level: 90 },
  { name: 'Teamwork', level: 97 },
  { name: 'Creativity', level: 95 },
  { name: 'Discipline', level: 90 },
  { name: 'Dedication', level: 98 },
  { name: 'Responsibility', level: 99 },
  { name: 'Project Management', level: 94 },
  { name: 'Time management', level: 96 },
  { name: 'Adaptation to change', level: 99 },
  { name: 'Empathy', level: 97 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
           <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
           Skills
          </span>
          
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-white 300 mb-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Technical Skills
            </motion.h3>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="flex items-center justify-between mb-1">
                  {/* Icon */}
                  <div className="flex items-center space-x-2">
                    <div className="text-white">{skill.icon}</div>
                    <span className="text-base font-medium text-gray-400">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-white">{skill.level}%</span>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  className="h-2 bg-gray-700 rounded-full overflow-hidden"
                  classes={{
                    bar: 'bg-gradient-to-r from-purple-700 to-pink-500',
                  }}
                />
              </motion.div>
            ))}
          </div>
          {/* Professional Skills */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-white mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Professional Skills
            </motion.h3>
            {professionalSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-gray-400">{skill.name}</span>
                  <span className="text-sm font-medium text-white">{skill.level}%</span>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  className="h-2 bg-gray-700 rounded-full overflow-hidden"
                  classes={{
                    bar: 'bg-gradient-to-r from-blue-700 to-green-600',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
