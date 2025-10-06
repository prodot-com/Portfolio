import { useEffect, useState } from "react";
import profile from "../../assets/profile.jpg";
import pro2 from "../../assets/pro2.jpg";
import hero1 from "../../assets/hero1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Sun,House, Moon } from "lucide-react";

const Home = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check local storage for a saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // If no preference is saved, use the user's system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // --- Effect to Apply Theme ---
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // --- Toggle Function ---
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-white relative overflow-hidden">

      
      <div className="fixed top-0 left-0 w-full h-[70px] bg-white shadow z-30 flex items-center justify-center">
        <div className=" h-full w-5xl flex items-center">
          <h1 className="cursor-pointer bitcount-double-ink hover:underline decoration-[#A22DA2] text-3xl tracking-tight hover:scale-105 transition delay-25">probal</h1>
        </div>
      </div>

      
      <div className="relative w-full max-w-5xl mt-[70px] rounded-b-2xl overflow-hidden shadow-lg">
        <img
          src={hero1}
          alt="Hero Background"
          className="w-full h-[380px] object-cover"
        />

        
        <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 top-0 left-0 w-[70px] bg-gradient-to-r from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 top-0 right-0 w-[70px] bg-gradient-to-l from-black/70 to-transparent"></div>

        <div className="absolute inset-0 flex items-center justify-center text-white italic text-2xl heading-font">
          Building something.
        </div>
      </div>

      {/* ─── Profile Section ───────────────────── */}
      <div className="relative w-full max-w-5xl mt-[-72px] ml-20 z-20">
        <img
          src={pro2}
          alt="Profile"
          className="w-35 h-35 rounded-full border-4 border-white shadow-xl mb-4 object-cover"
        />
        <div>
        <h2 className="heading-font text-4xl font-semibold tracking-tight">
          Probal Ghosh
        </h2>
        <p className="heading-font text-gray-600 text-sm mt-1">
          22 • engineer • fullstack developer
        </p>
        </div>
      </div>

      
      <div className="heading-font w-full max-w-5xl mt-10 px-6 text-center text-gray-700">
        <p>Welcome to my portfolio — more sections coming soon!</p>
      </div>

      
      <div className="fixed border border-gray-400 bottom-0 mb-8 flex items-center gap-2 p-2 px-4 cursor-pointer hover:scale-105 hover:shadow-lg transition-all delay-200 ease-in-out rounded-3xl">
        <div>
                  <House size={35} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out"/>
        </div>
        <div className="flex items-center gap-2 px-2 border-x-2 border-gray-400">
          <FontAwesomeIcon icon={faEnvelope} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out" size="xl"/>
          <FontAwesomeIcon icon={faXTwitter} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out" size="xl"/>
          <FontAwesomeIcon icon={faLinkedinIn} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out" size="xl"/>
          <FontAwesomeIcon icon={faGithub} className="px-1 py-1.5 rounded-full hover:bg-neutral-300 transition-all duration-300 ease-in-out" size="xl"/>
        </div>
        <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
          {isDarkMode ? (
            <Sun size={32} className="p-1.5 rounded-full text-gray-800 dark:text-gray-200 hover:bg-neutral-200 dark:hover:bg-gray-700 transition-colors" />
          ) : (
            <Moon size={32} className="p-1.5 rounded-full text-gray-800 dark:text-gray-200 hover:bg-neutral-200 dark:hover:bg-gray-700 transition-colors" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Home;
