import { cn } from "@/lib/utils"
import { Marquee } from "../magicui/marquee"

const reviews = [
  { name: "JavaScript", category: "language", icon: "../../../assets/techicons/javscript.svg", color: "bg-gray-500" },
  { name: "TypeScript", category: "language", icon: "../../../assets/techicons/typescript.svg", color: "bg-gray-500" },
  { name: "Java", category: "language", icon: "../../../assets/techicons/java.svg", color: "bg-gray-500" },
  { name: "Python", category: "language", icon: "../../../assets/techicons/python.svg", color: "bg-gray-500" },
  
  // Frameworks & Libraries
  { name: "React.js", category: "framework", icon: "../../../assets/techicons/react.svg", color: "bg-gray-500" },
  { name: "Express.js", category: "framework", icon: "../../../assets/techicons/express.svg", color: "bg-gray-500" },
  { name: "Node.js", category: "framework", icon: "../../../assets/techicons/nodejs.svg", color: "bg-gray-500" },
  { name: "Tailwind CSS", category: "framework", icon: "../../../assets/techicons/tailwind.svg", color: "bg-gray-500" },
  
  // Databases & Tools
  { name: "MongoDB", category: "database", icon: "../../../assets/techicons/mongodb.svg", color: "bg-gray-500" },
  { name: "PostgreSQL", category: "database", icon: "../../../assets/techicons/postgresql.svg", color: "bg-gray-500" },
  
  // Developer Tools
  { name: "Git", category: "tool", icon: "../../../assets/techicons/git.svg", color: "bg-gray-500" },
  { name: "Google Cloud", category: "tool", icon: "../../../assets/techicons/google-cloud.svg", color: "bg-gray-500" },
  { name: "Postman", category: "tool", icon: "../../../assets/techicons/postman.svg", color: "bg-gray-500" },
  { name: "Github", category: "tool", icon: "../../../assets/techicons/github.svg", color: "bg-gray-500" },
];

const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

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
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={icon} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{category}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{color}</blockquote>
    </figure>
  )
}

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.category} {...review} />
        ))}
      </Marquee>
      {/* <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee> */}
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}


// import { cn } from "@/lib/utils"
// import { Marquee } from "../magicui/marquee"

// const techStack = [
//   { name: "JavaScript", category: "language", icon: "../../../assets/techicons/javscript.svg", color: "bg-gray-500" },
//   { name: "TypeScript", category: "language", icon: "../../../assets/techicons/typescript.svg", color: "bg-gray-500" },
//   { name: "Java", category: "language", icon: "../../../assets/techicons/java.svg", color: "bg-gray-500" },
//   { name: "Python", category: "language", icon: "../../../assets/techicons/python.svg", color: "bg-gray-500" },
  
//   // Frameworks & Libraries
//   { name: "React.js", category: "framework", icon: "../../../assets/techicons/react.svg", color: "bg-gray-500" },
//   { name: "Express.js", category: "framework", icon: "../../../assets/techicons/express.svg", color: "bg-gray-500" },
//   { name: "Node.js", category: "framework", icon: "../../../assets/techicons/nodejs.svg", color: "bg-gray-500" },
//   { name: "Tailwind CSS", category: "framework", icon: "../../../assets/techicons/tailwind.svg", color: "bg-gray-500" },
  
//   // Databases & Tools
//   { name: "MongoDB", category: "database", icon: "../../../assets/techicons/mongodb.svg", color: "bg-gray-500" },
//   { name: "PostgreSQL", category: "database", icon: "../../../assets/techicons/postgresql.svg", color: "bg-gray-500" },
  
//   // Developer Tools
//   { name: "Git", category: "tool", icon: "../../../assets/techicons/git.svg", color: "bg-gray-500" },
//   { name: "Google Cloud", category: "tool", icon: "../../../assets/techicons/google-cloud.svg", color: "bg-gray-500" },
//   { name: "Postman", category: "tool", icon: "../../../assets/techicons/postman.svg", color: "bg-gray-500" },
//   { name: "Github", category: "tool", icon: "../../../assets/techicons/github.svg", color: "bg-gray-500" },
// ];


// const TechIcon = ({
//   icon,
//   name,
//   color
// }: {
//   icon: string
//   name: string
//   color: string
// }) => {
//   return (
//     <figure
//       className={cn(
//         "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
//         // light styles
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         // dark styles
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={icon} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//         </div>
//       </div>
//       {/* <blockquote className="mt-2 text-sm">{body}</blockquote> */}
//     </figure>
//   )
// }

// export default function TechStackMarquee({ className = "" }) {
//   return (
//     <div className={`w-full ${className}`}>
//       {/* Title - matching other component styles */}
//       <div className="mb-4">
//         <h2 className="text-sm sm:text-md opacity-30 leading-relaxed -tracking-[0.01em] mb-2">
//           Stack I use
//         </h2>
//         <p className="text-sm dark:text-white/70 text-black/70 leading-relaxed">
//           Technologies I work with to build products that solve real problems
//         </p>
//       </div>

//       {/* Single Marquee Container */}
//       <div className="relative">
//         <Marquee pauseOnHover className="[--duration:80s] [--gap:1rem]">
//           {techStack.map((tech, index) => (
//             <TechIcon key={`${tech.name}-${index}`} {...tech}/>
//           ))}
//         </Marquee>

//         {/* Fade edges for better visual effect */}
//         <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white dark:from-[hsl(0,3%,6.5%)] to-transparent pointer-events-none z-10" />
//         <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white dark:from-[hsl(0,3%,6.5%)] to-transparent pointer-events-none z-10" />
//       </div>
//     </div>
//   );
// }