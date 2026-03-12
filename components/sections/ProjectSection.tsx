import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectData } from "@/data/ProjectData";

export const ProjectSection = () => {
  return (
    <section className="space-y-16 font-inconsolata">
      {projectData.length === 0 && (
        <div className="flex min-h-[60vh] items-center justify-center text-center">
          <p className="font-inconsolata text-muted-foreground text-sm opacity-70">
            Projects are being updated, please check back later...
          </p>
        </div>
      )}
      {projectData.map((project) => (
        <div
          key={project.name}
          className="flex flex-col md:flex-row justify-center items-start md:items-center"
        >
          <div className="space-y-4 w-full">
            <div className="flex items-start justify-between">
              <div>
                <Link href={project.link || ""} target="_blank">
                  <h3 className="group text-lg font-jetBrainsMono font-semibold inline-flex items-center gap-1">
                    {project.name}
                    {project.link && (
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    )}
                  </h3>
                </Link>
                <p className="text-sm text-foreground opacity-60 mt-1">
                  {project.stack.map((tech, index) => (
                    <span key={tech} className="mx-1">
                      {tech}
                      {index < project.stack.length - 1 ? " |" : ""}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mt-8">
              {project.description}
            </p>

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
          </div>
        </div>
      ))}
    </section>
  );
};
