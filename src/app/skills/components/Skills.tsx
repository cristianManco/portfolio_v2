"use client"
import { motion } from "framer-motion"
import { technicalSkills } from "./tecnicalSkill";
import { professionalSkills } from "./professionalSkill";
import ProgressBar from "./ProgressBar";


export default function Skills() {
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
                className="mb-12 py-4"
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
                className="mb-12 py-4"
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
              { number: "5+", label: "Technologies", color: "from-blue-500 to-cyan-500" },
              { number: "2+", label: "Years Experience", color: "from-purple-500 to-pink-500" },
              { number: "10+", label: "Projects Completed", color: "from-green-500 to-emerald-500" },
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
