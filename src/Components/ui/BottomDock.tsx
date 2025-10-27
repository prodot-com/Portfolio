import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { House } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";
import { useNavigate } from "react-router-dom";
import { GithUbLink, LinkedInLink, XLink } from "@/lib/Links";


const BottomNavbar = ({className = ""}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const navigate = useNavigate()
    
    useEffect(() => {
        const currentTheme = document.documentElement.classList.contains("dark");
        setIsDarkMode(currentTheme);
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
        return () => observer.disconnect();
    }, []);
    
    
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
      };
  return (
    <div className={`fixed flex justify-center md:w-auto md:min-w-[310px] left-1/2 -translate-x-1/2 bg-white/10 dark:bg-neutral-7usus00/50 shadow-xl 
  border border-gray-400 bottom-0 mb-4 md:mb-8 items-center gap-2 p-2 px-4 cursor-pointer transition-all duration-300 ease-in-out rounded-2xl 
  backdrop-blur-[7px] z-20 hover:scale-105 animate-[float_4s_ease-in-out_infinite] ${className}`}>

  <div className="relative group">
    <House
      size={35}
      onClick={()=>navigate('/')}
      className="px-1 py-1.5 hover:mr-2 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
    />
    <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
      Home
    </span>
  </div>

  <div className="flex items-center gap-2 px-2 border-x-2 border-gray-400">
    <div className="relative group">
      <FontAwesomeIcon
        icon={faEnvelope}
        aria-label="Mail"
        className="px-1 py-1.5 hover:mx-2 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
        size="xl"
      />
      <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
        Mail
      </span>
    </div>

    <div className="relative group">
      <a href={XLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={faXTwitter}
          className="px-1 py-1.5 hover:mx-2 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
          size="xl"
        />
      </a>
      <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
        X
      </span>
    </div>


    <div className="relative group">
        <a href={LinkedInLink} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faLinkedinIn}
        className="px-1 py-1.5 hover:mx-2 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
        size="xl"
      />
      </a>
      <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
        LinkedIn
      </span>
    </div>


    <div className="relative group">
        <a href={GithUbLink} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faGithub}
        className="px-1 py-1.5 hover:mx-2 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out"
        size="xl"
      />
      </a>
      <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
        GitHub
      </span>
    </div>
  </div>

  <div className="relative group" onClick={toggleDarkMode}>
    <AnimatedThemeToggler 
    className="px-1.5 py-1.5 hover:ml-2 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] transition-all duration-300 ease-in-out cursor-pointer"/>
    <span className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
      {isDarkMode ? "Light" : "Dark"}
    </span>
  </div>
</div>

  )
}

export default BottomNavbar
