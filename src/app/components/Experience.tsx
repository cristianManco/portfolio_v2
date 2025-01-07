'use client'

import { motion } from 'framer-motion'
import { FaLaptopCode, FaUniversity, FaBriefcase, FaGraduationCap, FaLaptop, FaCode } from 'react-icons/fa'

const experienceAndStudies = [
  {
    id: '1',
    title: 'Technical Analyst and Software Developer',
    icon: FaUniversity,
    description: 'Training at CENSA (Centro de Sistemas de Antioquia) with a focus on algorithms, data structures, and agile methodologies. Proficiency in languages such as JavaScript, Java, C#, HTML, and databases like MySQL and MongoDB.',
    date: '2023 - 2024',
    type: 'education',
  },
  {
    id: '2',
    title: 'Freelance Developer',
    icon: FaBriefcase,
    description: 'Freelance experience in personalized projects, using technologies such as HTML, CSS, JavaScript, React, Node.js, NestJS, Next.js, SQL, and MongoDB.',
    date: 'April 2023',
    type: 'work',
  },
  {
    id: '3',
    title: 'Web Developer',
    icon: FaLaptop,
    description: 'Intensive course on Udemy about complete web development, covering front-end technologies like HTML, CSS, JavaScript, and React.',
    date: '2023',
    type: 'education',
  },
  {
    id: '4',
    title: 'Software Developer',
    icon: FaLaptopCode,
    description: 'Development and maintenance of web applications at BPO Global Services, using front-end and back-end technologies such as Angular, Node.js, MySQL, SQL Server, CSS, Next.js, and Express.',
    date: '2024 - 2025',
    type: 'work',
  },
  {
    id: '5',
    title: 'Full Stack Developer',
    icon: FaLaptopCode,
    description: 'Learning contract at Riwi.io, a software development company, developing web applications and custom software with NestJS, TypeScript, Node.js, MongoDB, SQL, Next.js, React, HTML, CSS. Also participated in the integration of external APIs and platforms like Firebase Auth and Moodle. Additionally, improved my skills in English, leadership, and human competencies.',
    date: '2023 - 2024',
    type: 'work',
  },
  {
    id: '6',
    title: 'Python Testing',
    icon: FaLaptopCode,
    description: 'Course at CENSA (Centro de Sistemas de Antioquia) on Python and unit testing using unittest, Selenium, and Faker for testing forms and web applications.',
    date: '2024 - 2025',
    type: 'work',
  },
  {
    id: '7',
    title: 'Methodologies and Competencies',
    icon: FaGraduationCap,
    description: 'Courses on YouTube about agile methodologies like Scrum and project management tools like Jira, Confluence, and ClickUp, focused on leadership and managing high-performance teams.',
    date: '2024 - 2025',
    type: 'education',
  },
  {
    id: '8',
    title: 'Git and GitHub',
    icon: FaCode,
    description: 'Proficiency in version control with Git and GitHub, including Git Flow and branching strategies in web and custom software projects.',
    date: '2023 - 2024',
    type: 'education',
  },
  {
    id: '9',
    title: 'Learning Plan 2025',
    icon: FaGraduationCap,
    description: 'For the year 2025, I plan to continue learning and strengthening my technical and soft skills, focusing on new technologies and agile methodologies.',
    date: '2025 - 2026',
    type: 'education',
  },
]

export default function ExperienceAndEducation() {
  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Experience & Education
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {experienceAndStudies.map((item) => (
            <motion.div
              key={item.id}
              className={`bg-gradient-to-r from-gray-900 via-gray-900 to-slate-900 p-6 rounded-lg shadow-lg hover:shadow-2xl relative flex flex-col justify-between`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Agregar la barra de color con animación */}
              <div
                className={`absolute top-0 left-0 h-full w-2 rounded-l-lg transition-all duration-500 ${item.type === 'work' ? 'bg-gradient-to-b from-blue-500 via-blue-600 to-blue-700 animate-pulse' : 'bg-gradient-to-b from-green-500 via-green-600 to-green-700 animate-pulse'}`}
              ></div>

              <div className="flex items-center mb-4">
                <item.icon className="text-3xl text-purple-600 mr-4" />
                <h3 className="text-xl font-semibold text-sky-400">{item.title}</h3>
              </div>
              <p className="text-gray-300 mb-4 flex-grow">{item.description}</p>

              {/* Agregar espacio entre la descripción y la fecha/etiqueta */}
              <div className="mt-auto flex justify-between items-center w-full">
                <span className={`text-sm text-gray-400`}>{item.date}</span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${item.type === 'work' ? 'bg-blue-800 text-black' : 'bg-green-800 text-black'}`}
                >
                  {item.type === 'work' ? 'Work Experience' : 'Education'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
