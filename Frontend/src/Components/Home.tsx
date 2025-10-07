import { useEffect, useState } from "react";
import profile from "../../assets/profile.jpg";
import GitHubCalendar from "react-github-calendar";
import pro2 from "../../assets/pro2.jpg";
import hero1 from "../../assets/hero1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { Sun, House, Moon } from "lucide-react";

const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="grid grid-cols-4 bg-white dark:bg-neutral-900">
      <div className="min-h-full"></div>
    <div className="col-span-2">
      <div className="flex flex-col items-center min-h-screen relative overflow-hidden">
      <div className="fixed top-0 left-0 w-full h-[70px] bg-white dark:bg-black shadow z-30 flex items-center justify-center">
        <div className="flex max-w-3xl h-full">
          <div className="ml-3 h-full w-5xl flex justify-between items-center">
            <h1 className="pl-2 cursor-pointer bitcount-double-ink hover:underline decoration-[#A22DA2] text-3xl tracking-tight  transition delay-25">
              probal
            </h1>
            <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
            {isDarkMode ? (
              <Sun
                size={40}
                className="border mr-2 border-white/60 p-1.5 rounded-full text-white/60 hover:bg-neutral-800 transition-colors"
              />
            ) : (
              <Moon
                size={40}
                className="border mr-2 border-neutral-400 p-1.5 rounded-full text-neutral-600 dark:text-white hover:bg-neutral-100 dark:hover:bg-[#262626] transition-colors"
              />
            )}
          </button>
          </div>
          
        </div>
      </div>

      <div className="relative w-full max-w-5xl mt-[70px] overflow-hidden">
        <img
          src={hero1}
          alt="Hero Background"
          className="w-full h-[380px] object-cover"
        />

        <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-white dark:from-black to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-white dark:from-neutral-900 to-transparent"></div>
        <div className="absolute bottom-0 top-0 left-0 w-[70px] bg-gradient-to-r from-white dark:from-neutral-900 to-transparent"></div>
        <div className="absolute bottom-0 top-0 right-0 w-[70px] bg-gradient-to-l from-white dark:from-neutral-900 to-transparent"></div>

        <div className="absolute inset-0 flex items-center font-bold justify-center text-white dark:text-black italic text-2xl heading-font">
          Build anything.
        </div>
      </div>

      {/* ─── Profile Section ───────────────────── */}
      <div className="w-full max-w-5xl mt-[-72px] ml-12 z-20">
        <img
          src={pro2}
          alt="Profile"
          className="w-35 h-35 rounded-full border-4 border-white 
          dark:border-neutral-600 shadow-xl mb-4 object-cover ml-4"
        />
        <div>
          <h2 className="heading-font text-black dark:text-white text-4xl font-semibold tracking-tight">
            Probal Ghosh
          </h2>
          <p className="heading-font dark:text-neutral-500 text-neutral-600 text-[16px] mt-1">
            22 • engineer • fullstack developer
          </p>
        </div>
      </div>

      <div className=" heading-font w-full pr-17 max-w-5xl ml-12 mt-10 z-20">
        <div className="flex">
          <p className="font-bold text-2xl text-black dark:text-white">About</p>
        </div>

        <p className="text-black text-[15px] dark:text-neutral-400">
          Hello! I'm a developer from Kolkata, India. I enjoy programming and
          exploring technology. Currently working on my own projects.{" "}
          <span className="font-bold dark:text-neutral-200">Open to work</span>,
          freelance, or collaborate.
        </p>
      </div>

<div className="mt-10 pl-6 flex flex-col gap-3 w-full max-w-5xl ">
  {/* Heading */}
  <div className="px-4 md:px-0 ">
    <p className="font-bold text-black dark:text-white text-xl heading-font selection:bg-neutral-600">
      GitHub Contributions • <span className="hover:underline cursor-pointer">@prodot-com</span>
    </p>
  </div>

  
  <div className=" rounded-2xl p-[1.4px] animate-rotate-border bg-conic/[from_var(--border-angle)]
  dark:from-black via-green-500  dark:to-black from-80% via-90% to-100% ">

    <div className="relative dark:border-neutral-300 p-2 rounded-2xl 
    bg-white dark:bg-neutral-900 overflow-x-auto scrollbar-hide mx-4 md:mx-0">
    
    <GitHubCalendar
      username="prodot-com"
      blockSize={9}
      fontSize={11}
      errorMessage="Error while fetching data"
      showWeekdayLabels={true}
      hideColorLegend={false}
      hideTotalCount={false}
      colorScheme={isDarkMode ? "dark" : "light"}
      style={{
        color: isDarkMode ? "white" : "black",
      }}
    />
  </div>
  </div>
</div>



      <div className="w-full min-h-[100px] mt-2">

      </div>

      <div
        className="fixed flex justify-center border-2 min-w-[400px] bg-white/10 dark:bg-[#101112]/10 shadow-xl border-gray-400 
      bottom-0 mb-8 items-center gap-2 p-2 px-4 cursor-pointer transition-all delay-200 ease-in-out rounded-3xl
      backdrop-blur-[7px] z-20"
      >
        <div>
          <House
            size={35}
            className="px-1 py-1.5 hover:mr-3 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
          />
        </div>
        <div className="flex items-center gap-2 px-2 border-x-2 border-gray-400">
          <FontAwesomeIcon
            icon={faEnvelope}
            className=" px-1 py-1.5 hover:mx-3 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
            size="xl"
          />
          <FontAwesomeIcon
            icon={faXTwitter}
            className="px-1 py-1.5 hover:mx-3 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
            size="xl"
          />
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="px-1 py-1.5 hover:mx-3 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
            size="xl"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="px-1 py-1.5 hover:mx-3 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
            size="xl"
          />
        </div>
        <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
          {isDarkMode ? (
            <Sun
              size={35}
              className="hover:ml-3 cursor-pointer px-1 py-1.5 rounded-full text-gray-800  dark:text-white hover:bg-neutral-300 dark:hover:bg-[#262626] transition-colors"
            />
          ) : (
            <Moon
              size={35}
              className="hover:ml-3 cursor-pointer p-1.5 rounded-full text-gray-800 dark:text-white hover:bg-neutral-300 dark:hover:bg-[#262626] transition-colors"
            />
          )}
        </button>
      </div>
      </div>
      </div>
      
      <div className="min-h-screen"></div>
    </div>
  );
};

export default Home;
