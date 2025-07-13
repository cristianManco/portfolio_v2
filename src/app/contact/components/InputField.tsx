"use client"
import { motion, AnimatePresence } from "framer-motion"
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa"
import type React from "react"

interface InputFieldProps {
  name: string
  type?: string
  placeholder: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: React.ComponentType<any>
  multiline?: boolean
  rows?: number
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFocus: () => void
  onBlur: () => void
  error?: string
  isFocused: boolean
}

export default function InputField({
  name,
  type = "text",
  placeholder,
  icon: Icon,
  multiline = false,
  rows = 1,
  value,
  onChange,
  onFocus,
  onBlur,
  error,
  isFocused
}: InputFieldProps) {
  const hasError = !!error
  const hasValue = value.length > 0

  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 ${
          hasError
            ? "border-red-500/50"
            : isFocused
            ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
            : "border-gray-700/50 hover:border-gray-600/50"
        }`}
      >
        <div className="flex items-start p-4">
          <div
            className={`flex-shrink-0 w-6 h-6 mt-1 transition-colors duration-300 ${
              hasError ? "text-red-400" : isFocused ? "text-purple-400" : "text-gray-400"
            }`}
          >
            <Icon />
          </div>
          <div className="flex-1 ml-4">
            <motion.label
              className={`absolute transition-all duration-300 pointer-events-none ${
                isFocused || hasValue ? "text-xs -translate-y-2 text-purple-400" : "text-gray-400 translate-y-0"
              }`}
              animate={{
                fontSize: isFocused || hasValue ? "0.75rem" : "1rem",
                y: isFocused || hasValue ? -8 : 0,
              }}
            >
              {placeholder}
            </motion.label>
            {multiline ? (
              <textarea
                name={name}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                rows={rows}
                className="w-full bg-transparent text-white placeholder-transparent resize-none focus:outline-none mt-2"
                required
              />
            ) : (
              <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                className="w-full bg-transparent text-white placeholder-transparent focus:outline-none mt-2"
                required
              />
            )}
          </div>
          {hasValue && !hasError && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex-shrink-0 text-green-400 ml-2">
              <FaCheckCircle className="w-4 h-4" />
            </motion.div>
          )}
          {hasError && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex-shrink-0 text-red-400 ml-2">
              <FaExclamationCircle className="w-4 h-4" />
            </motion.div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {hasError && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-red-400 text-sm mt-2 ml-2"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  )
}