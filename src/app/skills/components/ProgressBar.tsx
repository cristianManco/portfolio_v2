import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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


export default ProgressBar;