import { useEffect, useState } from "react";
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
import { House, Paperclip, Copyright} from "lucide-react";
import {TechStackMarquee } from "@/Components/ui/TechStack";
import { AnimatedThemeToggler } from "@/Components/magicui/animated-theme-toggler";
import { ScrollProgress } from "@/Components/magicui/scroll-progress";
import { Projectcard } from "@/Components/ui/ProjectCard";
import { EducationCard } from "@/Components/ui/Education";
import { Contact } from "@/Components/ui/Contact";
import { Experience } from "@/Components/ui/Experience";
import { useNavigate } from "react-router-dom";
import BottomNavbar from "@/Components/ui/BottomNavbar";
import { ResumeLink } from "@/lib/Links";





const Home = () => {
  const navigate = useNavigate()
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

  return (
    // <div className="grid grid-cols-1 lg:grid-cols-4 bg-white dark:bg-neutral-900">
    <div className="grid grid-cols-1 lg:grid-cols-4 items-stretch bg-white dark:bg-neutral-900 min-h-screen ">
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
                <h1
                onClick={()=>navigate(0)}
                className="cursor-pointer bitcount-double-ink hover:underline decoration-[#A22DA2] text-3xl tracking-tight transition delay-25">
                  probal
                </h1>
              </div>
            </div>
          </div>

          <ScrollProgress className="fixed left-0 w-full h-[4px] bg-gradient-to-r from-green-500 via-purple-500 to-blue-500 z-40 transition-all duration-300" />

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

            <div className="absolute inset-0 flex items-center font-bold justify-center text-white dark:text-black selection:bg-neutral-400 italic text-xl md:text-2xl heading-font">
              Build anything.
            </div>
          </div>

          <div className="selection:bg-neutral-700 w-full max-w-5xl mt-[-56px] md:mt-[-72px] px-4 lg:ml-12 z-20">
            <img
              src={pro2}
              alt="Profile"
              className="w-28 h-28 md:w-35 md:h-35 rounded-full border-4 border-white dark:border-neutral-600 shadow-xl mb-4 object-cover md:ml-4"
            />
            <div className="">
              <div className="w-full md:w-auto flex justify-between mr-12">
                  <h2 className="heading-font text-black dark:text-white selection:bg-neutral-700 text-3xl md:text-4xl font-semibold tracking-tight">
                Probal Ghosh
              </h2>

              <div className="relative group">
                <a 
                href={ResumeLink}
                target="_blank" 
                rel="noopener noreferrer"
                >
              <Paperclip
                size={35}
                className="px-1 py-1.5 cursor-pointer rounded-full dark:hover:bg-[#262626] dark:text-white hover:bg-neutral-300 transition-all duration-300 ease-in-out"
              />
              </a>
              <span className="absolute bottom-13 left-1/2 -translate-x-1/2 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 bg-black text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                Resume
              </span>
            </div>
            </div>
              
              <p className="heading-font dark:text-neutral-500 text-neutral-600 text-sm md:text-[16px] mt-1">
                21 • engineer • fullstack developer
              </p>
            </div>
          </div>

          <div className="heading-font w-full pr-17 max-w-5xl px-4 lg:ml-12 mt-10 z-20">
            <div className="flex">
              <p className="selection:bg-neutral-700 font-bold text-2xl text-black dark:text-white">
                About
              </p>
            </div>

            <p className="selection:bg-neutral-700 text-black text-[12px] md:text-[15px] dark:text-neutral-400">
              Hello! I'm a developer from Kolkata, India. I enjoy programming and
              exploring technology. Currently working on my own projects.{" "}
              <span className="font-bold dark:text-neutral-200">
                Open to work
              </span>
              , freelance, or collaborate.
            </p>
          </div>

          <TechStackMarquee/>

          <div className="selection:bg-neutral-700 mt-10 px-4 md:px-9 flex flex-col gap-3 w-full max-w-5xl">
            <div className="md:px-0">
              <p className="font-bold text-black  dark:text-white text-[15px] md:text-xl heading-font selection:bg-neutral-600">
                GitHub Contributions •{" "}
                <span className="underline md:decoration-white md:dark:decoration-neutral-950 md:hover:decoration-green-500 decoration-green-500 cursor-pointer">
                  <a href="https://github.com/prodot-com"
                  target="blank">@prodot-com</a>
                </span>
              </p>
            </div>

            <div className="rounded-2xl p-[1.4px] animate-rotate-border bg-conic/[from_var(--border-angle)] dark:from-bg-neutral-900 via-green-500 dark:bg-neutral-900 from-80% via-90% to-100%">
              <div className="relative px-1 py-3 rounded-2xl bg-white dark:bg-neutral-900 overflow-x-auto scrollbar-hide md:mx-0">
                <GitHubCalendar
                  username="prodot-com"
                  blockSize={8.2}
                  fontSize={12}
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

          <div className="selection:bg-neutral-700 px-0 md:px-2 mt-9 font-bold w-full max-w-5xl">
            <p className="pl-8 heading-font text-[15px] md:text-xl">Featured Projects</p>
                  <Projectcard />
          </div>

          <div className="selection:bg-neutral-700 px-2 pl-3 md:pl-11 mt-3 font-bold w-full max-w-5xl">
          <Experience/>
          </div>

          <div className="selection:bg-neutral-700 px-2 pl-3 md:pl-11 mt-1 font-bold w-full max-w-5xl">
          <EducationCard/>
          </div>

          <div className="selection:bg-neutral-700 heading-font sm:pr-17 px-4 lg:ml-14 mt-2 sm:mt-1 z-20 w-full max-w-5xl  border-neutral-500 dark:border-neutral-600 pt-4">
            <Contact/>
          </div>

          <div className="selection:bg-neutral-700 mt-7 pt-5 pl-4 md:px-9 border-t-1 dark:border-neutral-700 flex flex-col gap-3 w-full max-w-5xl min-h-[170px]">
            <p className="pl-2 flex items-center gap-1 inter-font">
              <Copyright className="w-4 sm:w-5"/> 
              <p className="text-[15px] sm:text-[17px]">2025 Probal Ghosh. All rights reserved.</p>
            </p>
          </div>

          <BottomNavbar/>
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