import { cn } from "@/lib/utils"
import { Marquee } from "../magicui/marquee"

const TachStack = [
  { name: "JavaScript", category: "language", icon: "/techicons/javascript.svg" },
  { name: "TypeScript", category: "language", icon: "/techicons/typescript.svg" },
  { name: "Java", category: "language", icon: "/techicons/java.svg" },
  { name: "Python", category: "language", icon: "/techicons/python.svg" },
  { name: "React.js", category: "framework", icon: "/techicons/react.svg" },
  { name: "Express.js", category: "framework", icon: "/techicons/express.svg" },
  { name: "Node.js", category: "framework", icon: "/techicons/node.svg" },
  { name: "Tailwind CSS", category: "framework", icon: "/techicons/tailwind.svg" },
  { name: "MongoDB", category: "database", icon: "/techicons/mongodb.svg" },
  { name: "PostgreSQL", category: "database", icon: "/techicons/postgresql.svg" },
  { name: "Git", category: "tool", icon: "/techicons/git.svg" },
  { name: "Google Cloud", category: "tool", icon: "/techicons/google-cloud.svg" },
  { name: "Postman", category: "tool", icon: "/techicons/postman.svg" },
  { name: "Github", category: "tool", icon: "/techicons/github.svg" },
];



const TechIcon = ({
  icon,
  name
}: {
  icon: string
  name: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-35 md:w-40 cursor-pointer overflow-hidden rounded-xl py-3 md:p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-200 hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-3">
        <img className="" width="35" height="35" alt="" src={icon}/>
        <div className="flex flex-col">
          <figcaption className="text-[12px] font-medium heading-font dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

export function TechStackMarquee() {
  return (
    <div className="relative mt-10 px-4 md:px-10 flex flex-col gap-3 w-full max-w-5xl overflow-hidden">
      <div>
        <p className="heading-font">Technologies I use</p>
      </div>
      <Marquee pauseOnHover className="[--duration:60s] [--gap:1rem]">
        {TachStack.map((tech) => (
          <TechIcon key={tech.name} {...tech} />
        ))}
      </Marquee>
      <div className="absolute left-3 top-8 md:left-10 md:top-8 w-20 h-full bg-gradient-to-r from-white dark:from-[hsl(0,3%,9%)] to-transparent pointer-events-none z-10" />
      <div className="absolute right-3 md:right-10 md:top-8 top-8 w-20 h-full bg-gradient-to-l from-white dark:from-[hsl(0,7%,9%)] to-transparent pointer-events-none z-10" />
    </div>
  )
}

