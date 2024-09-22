'use client'

import { motion } from 'framer-motion'
import { LinearProgress } from '@mui/material'

const skills = [
  { name: 'Javascript & Typescript', level: 85 },
  { name: 'Nestjs', level: 90 },
  { name: 'Nodejs & express', level: 70 },
  { name: 'Nextjs & Reactjs', level: 65 },
  { name: 'Vuejs', level: 40 },
  { name: 'HTML & CSS', level: 88 },
  { name: 'MYSQL & POSTGRESQL', level: 79 },
  { name: 'MONGO DB', level: 89 },
  { name: 'C# .NET', level: 60 },
  { name: 'Java', level: 39 },
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
  { name: 'Empatia', level: 97 },
]




export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-purple-400 mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <motion.h3
              className="text-2xl font-semibold text-white mb-6"
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
                <div className="flex justify-between mb-1">
                  <span className="text-base font-medium text-white">{skill.name}</span>
                  <span className="text-sm font-medium text-white">{skill.level}%</span>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  className="h-2 bg-gray-700 rounded-full overflow-hidden"
                  classes={{
                    bar: 'bg-gradient-to-r from-purple-500 to-pink-500',
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
                  <span className="text-base font-medium text-white">{skill.name}</span>
                  <span className="text-sm font-medium text-white">{skill.level}%</span>
                </div>
                <LinearProgress
                  variant="determinate"
                  value={skill.level}
                  className="h-2 bg-gray-700 rounded-full overflow-hidden"
                  classes={{
                    bar: 'bg-gradient-to-r from-green-500 to-blue-500',
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