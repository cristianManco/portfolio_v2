'use client'

import { motion } from "framer-motion"
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { experienceAndStudies } from "./experienceAndEstudies"


export default function ExperienceAndEducation() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600">
              Experience & Education
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My journey through professional experience and continuous learning
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 via-pink-600 to-purple-600 rounded-full opacity-30" />

          <div className="space-y-12">
            {experienceAndStudies.map((item, index) => (
              <motion.div
                key={item.id}
                className={`flex items-center ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex-col lg:space-x-8`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? "lg:text-start" : "lg:text-left"}`}>
                  <motion.div
                    className="group relative bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-800/50 hover:border-purple-500/50 transition-all duration-500"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Type Indicator */}
                    <div className={`absolute top-4 ${index % 2 === 0 ? "lg:left-4" : "lg:right-4"} left-4`}>
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${item.type === "work"
                            ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                            : "bg-green-500/20 text-green-400 border border-green-500/30"
                          }`}
                      >
                        {item.type === "work" ? "Work Experience" : "Education"}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-8">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <div className="flex items-center space-x-4 mb-4 text-gray-400">
                        <span className="font-semibold text-purple-400">{item.company}</span>
                        <div className="flex items-center space-x-1">
                          <FaMapMarkerAlt className="text-xs" />
                          <span className="text-sm">{item.location}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">{item.description}</p>

                      {/* Skills */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-500/30"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Date */}
                      <div className="flex items-center space-x-2 text-gray-400">
                        <FaCalendarAlt className="text-sm" />
                        <span className="font-medium">{item.date}</span>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 flex-shrink-0">
                  <motion.div
                    className={`w-16 h-16 rounded-full border-4 border-gray-800 flex items-center justify-center ${item.type === "work"
                        ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                        : "bg-gradient-to-r from-green-600 to-emerald-600"
                      } shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <item.icon className="text-white text-xl" />
                  </motion.div>

                  {/* Pulse Effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-full ${item.type === "work" ? "bg-blue-500" : "bg-green-500"
                      } opacity-20`}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                  />
                </div>

                {/* Spacer for opposite side */}
                <div className="w-full lg:w-5/12 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { number: "2+", label: "Years Experience", color: "from-blue-500 to-cyan-500" },
            { number: "10+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
            { number: "5+", label: "Technologies", color: "from-green-500 to-emerald-500" },
            { number: "100%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" },
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
  )
}
