import { cn } from "@/lib/utils"
import { Marquee } from "../magicui/marquee"

const reviews = [
  { name: "JavaScript", category: "language", icon: "../../../public/techicons/javascript.svg", color: "bg-gray-500" },
  { name: "TypeScript", category: "language", icon: "../../../public/techicons/typescript.svg", color: "bg-gray-500" },
  { name: "Java", category: "language", icon: "../../../public/techicons/java.svg", color: "bg-gray-500" },
  { name: "Python", category: "language", icon: "../../../public/techicons/python.svg", color: "bg-gray-500" },
  
  // Frameworks & Libraries
  { name: "React.js", category: "framework", icon: "../../../public/techicons/react.svg", color: "bg-gray-500" },
  { name: "Express.js", category: "framework", icon: "../../../public/techicons/express.svg", color: "bg-gray-500" },
  { name: "Node.js", category: "framework", icon: "../../../public/techicons/node.svg", color: "bg-gray-500" },
  { name: "Tailwind CSS", category: "framework", icon: "../../../public/techicons/tailwind.svg", color: "bg-gray-500" },
  
  // Databases & Tools
  { name: "MongoDB", category: "database", icon: "../../../public/techicons/mongodb.svg", color: "bg-gray-500" },
  { name: "PostgreSQL", category: "database", icon: "../../../public/techicons/postgresql.svg", color: "bg-gray-500" },
  
  // Developer Tools
  { name: "Git", category: "tool", icon: "../../../public/techicons/git.svg", color: "bg-gray-500" },
  { name: "Google Cloud", category: "tool", icon: "../../../public/techicons/google-cloud.svg", color: "bg-gray-500" },
  { name: "Postman", category: "tool", icon: "../../../public/techicons/postman.svg", color: "bg-gray-500" },
  { name: "Github", category: "tool", icon: "../../../public/techicons/github.svg", color: "bg-gray-500" },
];



const ReviewCard = ({
  icon,
  name,
  category,
  color,
}: {
  icon: string
  name: string
  category: string
  color: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-40 cursor-pointer overflow-hidden rounded-xl  p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-200 hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center justify-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={icon} />
        <div className="flex flex-col">
          <figcaption className="text-[12px] font-medium heading-font dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative mt-10 px-4 md:pl-6 flex flex-col gap-3 w-full max-w-5xl overflow-hidden">
      <div>
        <p className="heading-font">Technologies I use</p>
      </div>
      <Marquee pauseOnHover className="[--duration:60s] [--gap:1rem]">
        {reviews.map((review) => (
          <ReviewCard key={review.category} {...review} />
        ))}
      </Marquee>
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-[hsl(0,3%,9%)] to-transparent pointer-events-none z-10" />
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-[hsl(0,7%,9%)] to-transparent pointer-events-none z-10" />
    </div>
  )
}

