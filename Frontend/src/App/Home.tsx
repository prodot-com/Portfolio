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
import {TechStackMarquee } from "@/Components/ui/TechStack";
import { AnimatedThemeToggler } from "@/Components/magicui/animated-theme-toggler";





const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
    // <div className="grid grid-cols-1 lg:grid-cols-4 bg-white dark:bg-neutral-900">
    <div className="grid grid-cols-1 lg:grid-cols-4 items-stretch bg-white dark:bg-neutral-900 min-h-screen">
      <div className="hidden lg:block">
        <div className="h-full w-full relative">
  <div
    className="absolute inset-0 z-0 transition-colors duration-300"
    style={{
      backgroundImage: `
        linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
        linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
      WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
 
  <style>
    {`
      :root {
        --grid-color: #c9c8c7;
      }
      .dark {
        --grid-color: #2d2d2d;
      }
    `}
  </style>

  {/* Your Content/Components */}
</div>

      </div>


      <div className="col-span-1 lg:col-span-2">
        <div className="flex flex-col items-center min-h-screen relative overflow-hidden">
          <div className="fixed top-0 left-0 w-full h-[70px] bg-white dark:bg-black shadow z-30 flex items-center justify-center">
            <div className="w-full max-w-3xl h-full px-4">
              <div className="h-full w-full flex justify-between items-center">
                <h1 className="cursor-pointer bitcount-double-ink hover:underline decoration-[#A22DA2] text-3xl tracking-tight transition delay-25">
                  probal
                </h1>
                <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode">
                  <AnimatedThemeToggler className="pt-1.5"/>
                </button>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-5xl mt-[70px] overflow-hidden">
            <img
              src={hero1}
              alt="Hero Background"
              className="w-full h-[250px] md:h-[380px] object-cover"
            />

            <div className="absolute top-0 left-0 right-0 h-[80px] bg-gradient-to-b from-white dark:from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-[80px] bg-gradient-to-t from-white dark:from-neutral-900 to-transparent"></div>
            <div className="absolute bottom-0 top-0 left-0 w-[70px] bg-gradient-to-r from-white dark:from-neutral-900 to-transparent"></div>
            <div className="absolute bottom-0 top-0 right-0 w-[70px] bg-gradient-to-l from-white dark:from-neutral-900 to-transparent"></div>

            <div className="absolute inset-0 flex items-center font-bold justify-center text-white dark:text-black italic text-xl md:text-2xl heading-font">
              Build anything.
            </div>
          </div>

          <div className="w-full max-w-5xl mt-[-56px] md:mt-[-72px] px-4 lg:ml-12 z-20">
            <img
              src={pro2}
              alt="Profile"
              className="w-28 h-28 md:w-35 md:h-35 rounded-full border-4 border-white dark:border-neutral-600 shadow-xl mb-4 object-cover md:ml-4"
            />
            <div>
              <h2 className="heading-font text-black dark:text-white text-3xl md:text-4xl font-semibold tracking-tight">
                Probal Ghosh
              </h2>
              <p className="heading-font dark:text-neutral-500 text-neutral-600 text-sm md:text-[16px] mt-1">
                22 • engineer • fullstack developer
              </p>
            </div>
          </div>

          <div className="heading-font w-full pr-17 max-w-5xl px-4 lg:ml-12 mt-10 z-20">
            <div className="flex">
              <p className="font-bold text-2xl text-black dark:text-white">
                About
              </p>
            </div>

            <p className="text-black text-[15px] dark:text-neutral-400">
              Hello! I'm a developer from Kolkata, India. I enjoy programming and
              exploring technology. Currently working on my own projects.{" "}
              <span className="font-bold dark:text-neutral-200">
                Open to work
              </span>
              , freelance, or collaborate.
            </p>
          </div>

          <div className="mt-10 px-4 md:pl-6 flex flex-col gap-3 w-full max-w-5xl">
            <div className="md:px-0">
              <p className="font-bold text-black dark:text-white text-xl heading-font selection:bg-neutral-600">
                GitHub Contributions •{" "}
                <span className="hover:underline decoration-green-500 cursor-pointer">
                  @prodot-com
                </span>
              </p>
            </div>

            <div className="rounded-2xl p-[1.4px] animate-rotate-border bg-conic/[from_var(--border-angle)] dark:from-bg-neutral-900 via-green-500 dark:bg-neutral-900 from-80% via-90% to-100%">
              <div className="relative px-5 py-3 rounded-2xl bg-white dark:bg-neutral-900 overflow-x-auto scrollbar-hide md:mx-0">
                <GitHubCalendar
                  username="prodot-com"
                  blockSize={8}
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

          <TechStackMarquee/>

          <div className="w-full min-h-[250px] mt-2">
           
          </div>

          <div className="fixed flex justify-center border-2 w-[75%] md:w-auto md:min-w-[400px] left-1/2 -translate-x-1/2 bg-white/10 dark:bg-[#101112]/10 shadow-xl 
          border-gray-400 bottom-0 mb-4 md:mb-8 items-center gap-1 md:gap-2 p-2 px-2 md:px-4 cursor-pointer transition-all delay-200 ease-in-out rounded-3xl backdrop-blur-[7px] z-20">
            <div className="relative group">
              <House
                size={35}
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
              <AnimatedThemeToggler className="pt-1.5 pl-1.5"/>
              <span className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                {isDarkMode ? "Light Mode" : "Dark Mode"}
              </span>
            </div>
          </div>
        </div>
      </div>


      <div className="hidden lg:block">
        <div className="h-full w-full relative">
  <div
    className="absolute inset-0 z-0 transition-colors duration-300"
    style={{
      backgroundImage: `
        linear-gradient(to right, var(--grid-color) 1px, transparent 1px),
        linear-gradient(to bottom, var(--grid-color) 1px, transparent 1px)
      `,
      backgroundSize: "20px 20px",
      backgroundPosition: "0 0, 0 0",
      maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
      WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
      maskComposite: "intersect",
      WebkitMaskComposite: "source-in",
    }}
  />
 
  <style>
    {`
      :root {
        --grid-color: #c9c8c7;
      }
      .dark {
        --grid-color: #2d2d2d;
      }
    `}
  </style>

</div>

      </div>
    </div>
  );
};

export default Home;