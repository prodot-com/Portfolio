import { Button } from "@/Components/magicui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/magicui/card";
import { Input } from "@/Components/magicui/input";
import { Label } from "@/Components/magicui/label";
import { BorderBeam } from "../magicui/border-beam";

type Project = {
    name: string;
    description: string;
    tools: string[];
};

const projects: Project[] = [
    { name: "A", description: "Des A", tools: ["React", "Java"] },
    { name: "B", description: "Des B", tools: ["React", "Java"] },
    { name: "B", description: "Des B", tools: ["React", "Java"] },
];

export function Projectcard() {
    return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
    {projects.map((project) => (
        <Card key={project.name} className="relative w-[350px] overflow-hidden">
            <CardHeader className="px-2">
            <div className="space-y-1">
                <CardTitle className="mt-1 text-base">{project.name}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
            </div>
            </CardHeader>

        <CardContent>
            <div className="flex flex-wrap gap-2 mb-4">
                {project.tools.map((tool) => (
                <span
                    key={tool}
                    className="text-xs bg-gray-100 dark:bg-neutral-800 px-2 py-1 rounded-md"
                >
                    {tool}
                </span>
                ))}
            </div>

        </CardContent>

        {/* <CardFooter className="flex justify-between">
            <Button variant="outline">Register</Button>
            <Button>Login</Button>
          </CardFooter> */}

          {/* Animated Borders */}
        <BorderBeam
            duration={6}
            size={100}
            className="from-transparent via-red-500 to-transparent"
        />
        <BorderBeam
            duration={6}
            delay={3}
            size={100}
            borderWidth={2}
            className="from-transparent via-blue-500 to-transparent"
        />
        </Card>
        ))}
    </div>
    );
}
