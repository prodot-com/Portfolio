import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { AnimatedThemeToggler } from "@/Components/magicui/animated-theme-toggler";
import { House } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

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
    <div className="relative min-h-screen bg-neutral-50 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
      {/* HEADER */}
      <div className="flex justify-center items-center py-4 md:py-6 text-2xl font-semibold">
        <p className="tracking-wide text-3xl heading-font font-bold">Resume</p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex justify-center items-start py-4 px-3 sm:px-6 lg:px-10">
        <div className="w-full max-w-3xl bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 shadow-lg rounded-xl 
        p-6 sm:p-10 transition-all duration-300 print:shadow-none print:border-none print:rounded-none">
          {/* NAME & CONTACT */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Probal Ghosh</h1>
            <div className="mt-2 flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-sm text-blue-600">
              <a href="tel:+919775757648" className="hover:underline">
                +91 9775757648
              </a>
              <span>|</span>
              <a href="mailto:xprobal52@gmail.com" className="hover:underline">
                xprobal52@gmail.com
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                GitHub
              </a>
              <span>|</span>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </div>
          </div>

          <hr className="border-gray-300 dark:border-neutral-700 my-5" />

          {/* EDUCATION */}
          <section className="mb-6">
            <h2 className="uppercase font-semibold text-gray-700 dark:text-gray-300 tracking-widest text-sm mb-3 border-b border-gray-300 dark:border-neutral-700 pb-1">
              Education
            </h2>

            <div className="flex flex-col sm:flex-row justify-between mb-3">
              <div>
                <p className="font-semibold">
                  Government College of Engineering & Textile Technology
                </p>
                <p className="italic text-sm">
                  Bachelor of Technology in Information Technology
                </p>
              </div>
              <div className="text-sm sm:text-right mt-1 sm:mt-0">
                <p>Serampore, West Bengal</p>
                <p>Sep. 2023 - 2027</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between">
              <div>
                <p className="font-semibold">
                  Sargachi Ramakrishna Mission High School
                </p>
                <p className="italic text-sm">Grade: 90%</p>
              </div>
              <div className="text-sm sm:text-right mt-1 sm:mt-0">
                <p>West Bengal</p>
              </div>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-neutral-700 my-5" />

          {/* PROJECTS */}
          <section className="mb-6">
            <h2 className="uppercase font-semibold text-gray-700 dark:text-gray-300 tracking-widest text-sm mb-3 border-b border-gray-300 dark:border-neutral-700 pb-1">
              Projects
            </h2>

            <div className="mb-5">
              <p className="font-bold text-base">
                Cric Scoreboard – Live Cricket Scoring App
              </p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>
                  Developed a real-time cricket scoring app enabling ball-by-ball match tracking for community games.
                </li>
                <li>
                  Integrated live updates using Socket.IO & Express.js for real-time multi-user sync.
                </li>
                <li>
                  Added match sharing for remote live tracking.
                </li>
              </ul>
              <p className="mt-2 text-sm">
                <span className="font-semibold">Tech Stack:</span> React.js, Express.js, Socket.IO, JavaScript, CSS, React Router
              </p>
              <p className="text-sm">
                <span className="font-semibold">GitHub Repo:</span>{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Link
                </a>
              </p>
            </div>

            <div>
              <p className="font-bold text-base">Educational Website</p>
              <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                <li>
                  Built a responsive educational website offering structured academic resources.
                </li>
              </ul>
              <p className="mt-2 text-sm">
                <span className="font-semibold">Tech Stack:</span> JavaScript, React, CSS
              </p>
              <p className="text-sm">
                <span className="font-semibold">Live Link:</span>{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Link
                </a>
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-neutral-700 my-5" />

          {/* SKILLS */}
          <section>
            <h2 className="uppercase font-semibold text-gray-700 dark:text-gray-300 tracking-widest text-sm mb-3 border-b border-gray-300 dark:border-neutral-700 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1 text-sm">
              <p>
                <span className="font-semibold">Languages:</span> JavaScript, Java, Python, C, HTML/CSS
              </p>
              <p>
                <span className="font-semibold">Frameworks:</span> React.js, Express.js, MongoDB, Tailwind CSS, Node.js
              </p>
              <p>
                <span className="font-semibold">Developer Tools:</span> Git, Postman, GCP, VS Code, GitHub
              </p>
            </div>
          </section>
        </div>
      </div>

          <div className="fixed flex justify-center border-2 w-[75%] md:w-auto md:min-w-[400px] left-1/2 -translate-x-1/2 bg-white/10 dark:bg-[#101112]/10 shadow-xl 
          border-gray-400 bottom-0 mb-4 md:mb-8 items-center gap-1 md:gap-2 p-2 px-2 md:px-4 cursor-pointer transition-all delay-200 ease-in-out rounded-3xl 
          backdrop-blur-[7px] z-20 hover:scale-105">
            <div className="relative group">
              <House
                size={35}
                onClick={()=>navigate("/")}
                className="px-1 py-1.5 hover:mr-3 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
              />
              <span className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                Home
              </span>
            </div>

            <div className="flex items-center gap-1 md:gap-2 px-2 border-x-2 border-gray-400">
              <div className="relative group">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="px-1 py-1.5 hover:mx-3 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
                  size="xl"
                />
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                  Mail
                </span>
              </div>

              <div className="relative group">
                <FontAwesomeIcon
                  icon={faXTwitter}
                  className="px-1 py-1.5 hover:mx-3 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
                  size="xl"
                />
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                  X
                </span>
              </div>

              <div className="relative group">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="px-1 py-1.5 hover:mx-3 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
                  size="xl"
                />
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                  LinkedIn
                </span>
              </div>

              <div className="relative group">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="px-1 py-1.5 hover:mx-3 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
                  size="xl"
                />
                <span className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                  GitHub
                </span>
              </div>
            </div>

            <div
              className="relative group"
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
            >
              <AnimatedThemeToggler className="pt-1.5 pl-1.5 px-1 py-1.5 hover:ml-2 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out cursor-pointer"/>
              <span className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </div>
          </div>
    </div>
  );
};

export default Resume;
