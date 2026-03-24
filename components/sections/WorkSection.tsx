import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workData } from "@/data/WorkData";

export const WorkSection = () => {
  return (
    <section className="mb-16 space-y-16 font-inconsolata">
      {workData.map((work, index) => (
        <div key={index} className="relative gap-4 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <Link href={work.link || ""} target="_blank">
                  <h3 className="group inline-flex items-center gap-1 font-jetBrainsMono text-lg font-semibold">
                    {work.company}
                    {work.link && (
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    )}
                  </h3>
                </Link>
                <p className="mt-1 text-sm text-foreground opacity-60">
                  {work.type && (
                    <>
                      {work.type}
                      <span className="mx-1">|</span>
                    </>
                  )}
                  {work.role}
                </p>
              </div>
              <div className="mt-2 -mr-1.5 hidden h-px w-[600px] flex-row gap-2 self-center rounded-full bg-linear-to-r from-transparent to-foreground" />
              <div className="pt-1 text-sm text-foreground md:col-span-1">
                {work.period}
                <div className="mt-1 text-xs opacity-80">{work.location}</div>
              </div>
            </div>
            {work.description && (
              <p className="my-8 text-sm text-muted-foreground">
                {work.description}
              </p>
            )}

            {work.achievements && (
              <ul className="space-y-2">
                {work.achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-sm text-muted-foreground"
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
