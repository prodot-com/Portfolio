import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedinIn,
  faXTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { AnimatedThemeToggler } from "@/Components/magicui/animated-theme-toggler";
import { House } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

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
    <div className="relative">
      <div className="min-h-screen w-full flex justify-center items-start py-16 bg-white dark:bg-neutral-900 text-black dark:text-white print:bg-white">
        <div className="max-w-3xl w-full border border-gray-400 rounded-md shadow-md bg-white dark:bg-neutral-900 p-8 print:shadow-none print:border-none print:rounded-none">
          
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold">Probal Ghosh</h1>
            <div className="mt-1 space-x-2 text-sm text-blue-600">
              <a href="tel:+919775757648" className="hover:underline">+91 9775757648</a> |
              <a href="mailto:xprobal52@gmail.com" className="hover:underline">xprobal52@gmail.com</a> |
              <a href="#" className="hover:underline">LinkedIn</a> |
              <a href="#" className="hover:underline">Github</a> |
              <a href="#" className="hover:underline">Twitter</a>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          <section className="mb-6">
            <h2 className="uppercase font-semibold text-gray-700 dark:text-gray-300 tracking-wide text-sm mb-1">
              Education
            </h2>
            <div className="flex justify-between">
              <div>
                <p className="font-semibold">
                  Government College of Engineering & Textile Technology
                </p>
                <p className="italic text-sm">
                  Bachelor of Technology in Information Technology
                </p>
              </div>
              <div className="text-right text-sm">
                <p>Serampore, West Bengal</p>
                <p>Sep. 2023 - 2027</p>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <div>
                <p className="font-semibold">Sargachi Ramakrishna Mission High School</p>
                <p className="italic text-sm">Grade: 90%</p>
              </div>
              <div className="text-right text-sm">
                <p>West Bengal</p>
              </div>
            </div>
          </section>

          <hr className="border-gray-400 my-4" />

          <section className="mb-6">
            <h2 className="uppercase font-semibold text-gray-700 dark:text-gray-300 tracking-wide text-sm mb-2">
              Projects
            </h2>

            <div className="mb-4">
              <p className="font-bold">
                Cric Scoreboard – Live Cricket Scoring App
              </p>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                <li>Developed a real-time cricket scoring application enabling ball-by-ball match tracking for grassroots or community games.</li>
                <li>Currently integrating live match updates using Socket.IO and Express.js, allowing multiple users to view ball-by-ball updates in real-time.</li>
                <li>Implementing a match sharing feature to broadcast game URLs and enable remote viewers to track ongoing matches live.</li>
              </ul>
              <p className="mt-2 text-sm"><span className="font-semibold">Tech Stack:</span> React.js, Express.js, Socket.IO, JavaScript, CSS, React Router</p>
              <p className="text-sm"><span className="font-semibold">GitHub Repo:</span> <a href="#" className="text-blue-600 hover:underline">Link</a></p>
            </div>

            <div>
              <p className="font-bold">Educational Website:</p>
              <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                <li>Developed a responsive and user-friendly educational website aimed at providing academic content and resources in a structured layout.</li>
              </ul>
              <p className="mt-2 text-sm"><span className="font-semibold">Tech Stack:</span> JavaScript, React, CSS</p>
              <p className="text-sm"><span className="font-semibold">Live Link:</span> <a href="#" className="text-blue-600 hover:underline">Link</a></p>
            </div>
          </section>

          <hr className="border-gray-400 my-4" />

          
          <section>
            <h2 className="uppercase font-semibold text-gray-700 dark:text-gray-300 tracking-wide text-sm mb-2">
              Technical Skills
            </h2>
            <p className="text-sm"><span className="font-semibold">Languages:</span> JavaScript, Java, Python, C, HTML/CSS</p>
            <p className="text-sm"><span className="font-semibold">Frameworks:</span> React.js, Express.js, MongoDB, Tailwind CSS, Node.js, Python</p>
            <p className="text-sm"><span className="font-semibold">Developer Tools:</span> Git, Postman, Google Cloud Platform, VS Code, GitHub</p>
          </section>
        </div>
      </div>

      <div className="print:hidden fixed flex justify-center border-2 w-[75%] md:w-auto md:min-w-[400px] left-1/2 -translate-x-1/2 bg-white/10 dark:bg-[#101112]/10 shadow-xl 
          border-gray-400 bottom-0 mb-4 md:mb-8 items-center gap-1 md:gap-2 p-2 px-2 md:px-4 cursor-pointer transition-all delay-200 ease-in-out rounded-3xl 
          backdrop-blur-[7px] z-20 hover:scale-105">

        <div className="relative group">
          <House
            size={35}
            onClick={() => navigate("/")}
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
          <AnimatedThemeToggler className="pt-1.5 pl-1.5 px-1 py-1.5 hover:ml-2 rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out cursor-pointer" />
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
