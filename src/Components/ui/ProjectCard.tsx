import { Button } from "@/Components/magicui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/Components/magicui/card";
import { BorderBeam } from "../magicui/border-beam";
import ReactMarkdown from "react-markdown";
import { Github, Globe } from "lucide-react";


type Project = {
  name: string;
  description: string;
  tools: string[];
  image?: string;
  link?: {
    gitlink?: string;
    livelink?: string;
  };
};


const projects: Project[] = [
  {
    name: "Cric-Scoreboard",
    description:
      "CricScoreBoard is a full-stack MERN application that provides **live ball-by-ball scoring** for local cricket matches.\n\nIt includes an **admin panel** for scoring and a **shareable spectator link**, with updates powered by **Socket.IO**.",
    tools: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
    image: "/cricScoreboard.png",
    link: {
        "gitlink": "https://www.prasen.dev/",
        "livelink": "live"
    }
  },
  {
    name: "Portfolio Builder",
    description:
      "A portfolio generator with customizable themes and animations using **Next.js** and **Framer Motion**.",
    tools: ["Next.js", "Framer Motion", "TailwindCSS"],
    image: "/portfolio.png",
  },
  {
    name: "Task Manager",
    description:
      "A productivity app to **track tasks, priorities, and progress** in real time.",
    tools: ["React", "TypeScript", "Firebase"],
  },
];

export function Projectcard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 p-6">
      {projects.map((project, index) => (
        <Card
          key={`${project.name}-${index}`}
          className="relative w-[350px] overflow-hidden bg-white/10 dark:bg-neutral-900 dark:border-neutral-800 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
        >
          {/* Project Image */}
          {project.image && (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-t-2xl border-b dark:border-white/10 border-white/20"
            />
          )}

          {/* Header */}
          <CardHeader className="px-3 pt-1">
            <CardTitle className="text-lg font-semibold">
              {project.name}
            </CardTitle>

            <div className="inter-font prose prose-sm dark:prose-invert text-[11px] max-w-none">
                <ReactMarkdown>
                    {project.description}
                </ReactMarkdown>
            </div>

          </CardHeader>

          {/* Content */}
          <CardContent className="px-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="text-xs bg-neutral-200 dark:bg-neutral-800 text-gray-800 dark:text-white px-2 py-1 rounded-md border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </CardContent>

<CardFooter className="px-4 pt-4">
  {project.link && (
    <div className="flex items-center gap-3">
      
      {project.link.livelink && (
        <a
          href={project.link.livelink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-md border hover:bg-neutral-700 transition"
        >
          <Globe className="w-4 h-4" /> Live
        </a>
      )}

      {project.link.gitlink && (
        <a
          href={project.link.gitlink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-xs bg-black dark:bg-white text-white dark:text-black px-2 py-1 rounded-md border hover:bg-neutral-700 transition"
        >
          <Github className="w-4 h-4" /> Source
        </a>
      )}
    </div>
  )}
</CardFooter>


          {/* Animated Borders */}
          <BorderBeam
            duration={6}
            size={200}
            className="from-transparent via-red-500 to-transparent"
          />
          <BorderBeam
            duration={6}
            delay={14}
            size={200}
            borderWidth={2}
            className="from-transparent via-blue-500 to-transparent"
          />
        </Card>
      ))}
    </div>
  );
}
