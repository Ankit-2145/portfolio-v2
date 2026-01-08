import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { labData } from "@/data/Lab";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";

export const LabCard = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-inconsolata">
      {labData.map((item) => (
        <Card
          key={item.id}
          className="relative overflow-hidden border-2 border-dashed bg-card pt-0 pb-6"
        >
          <CardContent className="p-0">
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
          </CardContent>

          {item.tags.length > 0 && (
            <div className="px-6 pb-1 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block text-xs font-medium px-2.5 py-1 bg-background text-foreground border rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <CardHeader>
            <CardTitle className="text-lg font-semibold leading-tight">
              {item.title}
            </CardTitle>

            <CardDescription className="text-sm mt-2 leading-relaxed">
              {item.description}
            </CardDescription>
          </CardHeader>

          {/* Footer */}
          <CardFooter>
            <Button asChild>
              <a
                href={item.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary inline-flex items-center gap-1 transition-colors"
              >
                View Demo
                <ArrowUpRight className="w-3 h-3 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
};
