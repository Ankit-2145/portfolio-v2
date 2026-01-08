import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projectData } from "@/data/ProjectData";

export const ProjectSection = () => {
  return (
    <section className="space-y-16 font-inconsolata">
      {projectData.map((project, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-center items-start md:items-center gap-4 md:gap-8"
        >
          <div className="w-full md:w-auto shrink-0">
            <Image
              src={project.image}
              alt={project.name}
              width={300}
              height={150}
              className="object-cover w-full md:w-80 h-auto"
            />
          </div>
          <div className="space-y-4 w-full">
            <div className="flex items-start justify-between">
              <div>
                <Link href={project.link} target="_blank">
                  <h3 className="text-lg font-jetBrainsMono font-semibold inline-flex items-center gap-1">
                    {project.name}

                    <ArrowUpRight className="w-4 h-4" />
                  </h3>
                </Link>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              {project.description}
            </p>

            {project.achievements && (
              <ul className="space-y-2">
                {project.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="text-sm text-muted-foreground flex gap-2"
                  >
                    <span className="text-primary">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
