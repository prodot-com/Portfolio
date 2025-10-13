import { ChevronRight } from "lucide-react";

// The type definition remains the same
type Education = {
  icon: string;
  name: string;
  subname: string;
  startDate: number;
  endDate: number;
  link?: string;
};

// The data remains the same
const educations: Education[] = [
  {
    icon: "/gcetts.jpeg",
    name: "Government College of Engineering & Textile Technology",
    subname: "B.Tech in Information Technology",
    startDate: 2023,
    endDate: 2027,
    link: "https://www.gcetts.ac.in/",
  },
  {
    icon: "/rkm.png",
    name: "Sargachi Ramakrishna Mission High School",
    subname: "Higher Secondary",
    startDate: 2020,
    endDate: 2022,
    link: "https://www.rkmsargachi.org/rkm-hs-school/",
  },
];

export function EducationCard() {
  return (
    <div className="p-2  md:p-4">
      <p className="text-xl heading-font font-bold mb-2 md:mb-4">Education</p>

      <div className="flex flex-col">
        {educations.map((education, index) => (
          <div
            key={education.name}
            className={`
              inter-font group flex flex-col sm:flex-row sm:items-center 
              sm:justify-between gap-2 sm:gap-4 p-3
            `}
          >
            {/* Left side: Icon, Name, Subname */}
            <div className="flex items-center gap-4">
              <img
                src={education.icon}
                alt={education.name}
                className="w-12 h-12 p-1 rounded-full object-cover border border-neutral-300 dark:border-neutral-700"
              />
              <div>
                <a
                  href={education.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 group/link"
                >
                  <p className="font-semibold text-neutral-800 dark:text-neutral-200 transition-colors duration-150">
                    {education.name}
                  </p>
                  <ChevronRight className="w-4 text-neutral-800 dark:text-neutral-200 opacity-0 group-hover:opacity-100 group-hover/link:translate-x-1 transition-transform duration-200" />
                </a>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {education.subname}
                </p>
              </div>
            </div>

            
            <p className="text-sm text-neutral-600 dark:text-neutral-400 sm:text-right shrink-0">
              {education.startDate} - {education.endDate}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}