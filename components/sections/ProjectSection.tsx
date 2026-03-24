import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projectData } from "@/data/ProjectData";

export const ProjectSection = () => {
  return (
    <section className="space-y-16 font-inconsolata">
      {projectData.length === 0 && (
        <div className="flex min-h-[60vh] items-center justify-center text-center">
          <p className="font-inconsolata text-sm text-muted-foreground opacity-70">
            Projects are being updated, please check back later...
          </p>
        </div>
      )}
      {projectData.map((project) => (
        <div
          key={project.name}
          className="flex flex-col items-start justify-center md:flex-row md:items-center"
        >
          <div className="w-full space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <Link href={project.link || ""} target="_blank">
                  <h3 className="group inline-flex items-center gap-1 font-jetBrainsMono text-lg font-semibold">
                    {project.name}
                    {project.link && (
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                  </h3>
                </Link>
                <p className="mt-1 text-sm text-foreground opacity-60">
                  {project.stack.map((tech, index) => (
                    <span key={tech} className="mx-1">
                      {tech}
                      {index < project.stack.length - 1 ? " |" : ""}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              {project.description}
            </p>

            <ul className="space-y-2">
              {project.achievements.map((achievement, index) => (
                <li
                  key={index}
                  className="flex gap-2 text-sm text-muted-foreground"
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
