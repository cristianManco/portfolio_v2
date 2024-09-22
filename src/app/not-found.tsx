'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-b from-slate-900 to-gray-900 text-emerald-700">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 5, 0] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 1 }}
        >
          <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4 mx-auto" />
        </motion.div>
        <motion.h1
          className="text-9xl font-extrabold tracking-widest mb-4"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          404
        </motion.h1>
        <motion.div
          className="bg-red-600 text-black px-2 py-1 text-sm rounded-md font-bold mb-8"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Not Found
        </motion.div>
        <motion.p
          className="text-gray-300 mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Oops! The page you are looking for might have been removed or is temporarily unavailable.
        </motion.p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/" className="relative inline-block text-lg group">
            <span className="relative z-10 block px-8 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-8 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative flex items-center">
                <FaHome className="mr-2" />
                Go Home
              </span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}