import { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'
import {
  Card,
  CardContent,
  CardHeader,
} from "@/Components/magicui/card";
import { BorderBeam } from "../magicui/border-beam";

export function GithubCard() {
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
            <div className="selection:bg-neutral-700 mt-10 px-4 md:pl-9 flex flex-col gap-3 w-full max-w-5xl">

        <Card
            className="relative w-full overflow-hidden bg-white/10 dark:bg-black dark:border-neutral-800 backdrop-blur-md border 
            border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 min-h-[210px]"
        >

        <CardHeader className="px-2 md:pt-1">
            <div className="md:px-0">
                <p className="font-bold text-black  dark:text-white text-[15px] md:text-xl heading-font selection:bg-neutral-600">
                GitHub Contributions •{" "}
                <span className="underline md:decoration-white md:dark:decoration-neutral-950 md:hover:decoration-green-500 decoration-green-500 cursor-pointer">
                    <a href="https://github.com/prodot-com/"
                    target="blank">@prodot-com</a>
                </span>
                </p>
            </div>
        </CardHeader>

          {/* Content */}
        <CardContent className="px-3 md:px-2 pt-1">
            <div className="">
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
        </CardContent>

        <BorderBeam
            duration={6}
            size={200}
            className="from-transparent via-green-500 to-transparent"
            borderWidth={2}
            />
        </Card>
    </div>
    );
}

export default GithubCard