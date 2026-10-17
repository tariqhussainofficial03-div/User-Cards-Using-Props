 
import './App.css'
import UserCard from './components/UserCrd'
import UserCrd from './components/UserCrd'
import Tariq from './images/Tariq.jpg'
import Faisal from './images/FaisalNoor.jpg'
import Moin from './images/AbdulMoin.jpg'
import Aesha from './images/AeshaFatima.jpg'
import Noshaba from './images/NoshabaFeroz.jpg'
import Sara from './images/SaraKhan.jpg'
import Yasir from './images/Yasirnawaz.jpg'
import Zakir from './images/ZakirHussain.jpg'
import Zoya from './images/ZoyaRehman.jpg'
 



import React from 'react'

function App() {

const team = [
  {
    id: 1,
    name: "Tarique Hussain",
    role: "Frontend Developer",
    city: "Lahore, Pakistan",
    year: "Joined 2024",
    img: Tariq,
    desc: "Passionate about building modern web <br /> applications with React. Always eager to learn.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    gradient: "from-[#3B8CFF] to-[#5AA9FF]",
    light: "bg-[#EBF3FF]",
    text: "text-[#2E7BFF]",
    btn: "bg-[#2563EB]",
    icon: "react"
  },
  {
    id: 2,
    name: "Yasir Nawaz",
    role: "Wordpress + Full Stack",
    city: "Karachi, Pakistan",
    year: "Joined 2023",
    img: Yasir,
    desc: "Building scalable web applications and <br /> love working with modern technologies.",
    skills: ["React", "Node.js", "MongoDB"],
    gradient: "from-[#A26CFF] to-[#C08DFF]",
    light: "bg-[#F3EDFF]",
    text: "text-[#8B5CF6]",
    btn: "bg-[#7C3AED]",
    icon: "layers"
  },
  {
    id: 3,
    name: "Sara Khan",
    role: "UI/UX Designer",
    city: "Islamabad, Pakistan",
    year: "Joined 2022",
    img:  Sara,
    desc: "Designing beautiful and user-friendly <br /> experiences for the web and mobile.",
    skills: ["Figma", "UI Design", "Prototyping"],
    gradient: "from-[#2ECCAA] to-[#20B99B]",
    light: "bg-[#E6FBF5]",
    text: "text-[#0EB99A]",
    btn: "bg-[#0EA5A0]",
    icon: "figma"
  },
  {
    id: 4,
    name: "Faisal Noor",
    role: "Wordpress Developer",
    city: "Multan, Pakistan",
    year: "Joined 2023",
    img: Faisal,
    desc: "Working with Node.js, Express & MongoDB. <br /> Focused on building efficient and scalable APIs.",
    skills: ["Node.js", "Express", "MongoDB"],
    gradient: "from-[#FF7AA2] to-[#FF8FB0]",
    light: "bg-[#FFE6EE]",
    text: "text-[#E94C80]",
    btn: "bg-[#E94C80]",
    icon: "js"
  },
  {
    id: 5,
    name: "Ayesha Niaz",
    role: "Frontend Developer",
    city: "Faisalabad, Pakistan",
    year: "Joined 2024",
    img: Aesha,
    desc: "React enthusiast with a keen eye for design <br /> and clean code.",
    skills: ["React", "Next.js", "Tailwind CSS"],
    gradient: "from-[#3B8CFF] to-[#5B7FFF]",
    light: "bg-[#EBF3FF]",
    text: "text-[#2E7BFF]",
    btn: "bg-[#2563EB]",
    icon: "code"
  },
  {
    id: 6,
    name: "Abdul Moin",
    role: "WooCommerce Expert",
    city: "Peshawar, Pakistan",
    year: "Joined 2022",
    img: Moin,
    desc: "Always learning new technologies <br /> and solving real problems.",
    skills: ["JavaScript", "React", "Tailwind CSS"],
    gradient: "from-[#FF9A2E] to-[#FFB347]",
    light: "bg-[#FFF2E0]",
    text: "text-[#E67E00]",
    btn: "bg-[#FF8C00]",
    icon: "code2"
  },
   {
    id: 7,
    name: "Zakir Hussain",
    role: "Frontend Developer",
    city: "Lahore, Pakistan",
    year: "Joined 2024",
    img: Zakir,
    desc: "Passionate about building modern web <br /> applications with React. Always eager to learn.",
    skills: ["React", "JavaScript", "Tailwind CSS"],
    gradient: "from-[#3B8CFF] to-[#5AA9FF]",
    light: "bg-[#EBF3FF]",
    text: "text-[#2E7BFF]",
    btn: "bg-[#2563EB]",
    icon: "react"
  },
  {
    id: 8,
    name: "Noshaba Feroz",
    role: "Full Stack Developer",
    city: "Karachi, Pakistan",
    year: "Joined 2023",
    img: Noshaba,
    desc: "Building scalable web applications and <br /> love working with modern technologies.",
    skills: ["React", "Node.js", "MongoDB"],
    gradient: "from-[#A26CFF] to-[#C08DFF]",
    light: "bg-[#F3EDFF]",
    text: "text-[#8B5CF6]",
    btn: "bg-[#7C3AED]",
    icon: "layers"
  },
  {
    id: 9,
    name: "Zoya Rehman",
    role: "UI/UX Designer",
    city: "Islamabad, Pakistan",
    year: "Joined 2022",
    img:  Zoya,
    desc: "Designing beautiful and user-friendly <br /> experiences for the web and mobile.",
    skills: ["Figma", "UI Design", "Prototyping"],
    gradient: "from-[#2ECCAA] to-[#20B99B]",
    light: "bg-[#E6FBF5]",
    text: "text-[#0EB99A]",
    btn: "bg-[#0EA5A0]",
    icon: "figma"
  },
 
];

  return (
    <div>
      <UserCard TeamData = {team}></UserCard>
    
    </div>
    
  )
}

export default App
 