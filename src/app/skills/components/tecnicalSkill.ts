import { FaHtml5, FaJava, FaJsSquare, FaMicrosoft, FaNodeJs, FaReact, FaVuejs } from "react-icons/fa";
import { SiMongodb, SiNestjs, SiPostgresql } from "react-icons/si";


export const technicalSkills = [
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
