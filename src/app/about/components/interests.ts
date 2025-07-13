import { FaBirthdayCake, FaBook, FaBriefcase, FaCode, FaEnvelope, FaFilm, FaGamepad, FaHeadphones, FaHiking, FaMapMarkerAlt, FaMotorcycle, FaPhone, FaPlane } from "react-icons/fa"


export const interests = [
  { name: "GAMES", icon: FaGamepad, color: "from-blue-500 to-cyan-500" },
  { name: "MUSIC", icon: FaHeadphones, color: "from-purple-500 to-pink-500" },
  { name: "TRAVEL", icon: FaPlane, color: "from-green-500 to-teal-500" },
  { name: "DEVELOPMENT", icon: FaCode, color: "from-orange-500 to-red-500" },
  { name: "SPORTS", icon: FaHiking, color: "from-emerald-500 to-green-500" },
  { name: "BOOKS", icon: FaBook, color: "from-amber-500 to-yellow-500" },
  { name: "MOTORCYCLES", icon: FaMotorcycle, color: "from-gray-500 to-slate-500" },
  { name: "MOVIES", icon: FaFilm, color: "from-indigo-500 to-purple-500" },
]

export const personalData = [
  { label: "Birthday", value: "4-10-2005", icon: FaBirthdayCake },
  { label: "Phone", value: "313-525-86-60", icon: FaPhone },
  { label: "Email", value: "riwiaprender@gmail.com", icon: FaEnvelope },
  { label: "Address", value: "CR 65 San Antonio prado, Medellín", icon: FaMapMarkerAlt },
  { label: "Position", value: "Software Developer & Student", icon: FaBriefcase },
]
