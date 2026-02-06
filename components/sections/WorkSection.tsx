import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { workData } from "@/data/WorkData";

export const WorkSection = () => {
  return (
    <section className="space-y-16 font-inconsolata mb-16">
      {workData.map((work, index) => (
        <div key={index} className="relative gap-4 md:gap-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div>
                <Link href={work.link || ""} target="_blank">
                  <h3 className="group text-lg font-jetBrainsMono font-semibold inline-flex items-center gap-1">
                    {work.company}
                    {work.link && (
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
                    )}
                  </h3>
                </Link>
                <p className="text-sm text-foreground opacity-60 mt-1">
                  {work.type && (
                    <>
                      {work.type}
                      <span className="mx-1">|</span>
                    </>
                  )}
                  {work.role}
                </p>
              </div>
              <div className="hidden -mr-1.5 mt-2 h-px w-[600px] rounded-full self-center flex-row gap-2 bg-linear-to-r from-transparent to-foreground" />
              <div className="text-sm text-foreground md:col-span-1 pt-1">
                {work.period}
                <div className="mt-1 text-xs opacity-80">{work.location}</div>
              </div>
            </div>
            {work.description && (
              <p className="text-sm text-muted-foreground my-8">
                {work.description}
              </p>
            )}

            {work.achievements && (
              <ul className="space-y-2">
                {work.achievements.map((achievement, index) => (
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
