"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-start min-h-[70vh] py-20">
      <div className=" space-y-4">
        <span className="font-jetBrainsMono text-xs text-muted-foreground">
          Hey, I&apos;m{" "}
        </span>
        <h1 className="font-doto text-2xl font-semibold uppercase">
          Ankit Sharma
        </h1>
        <p className="font-inconsolata text-base text-justify text-muted-foreground">
          I&apos;m a{" "}
          <span className="text-foreground font-medium">
            full-stack developer
          </span>{" "}
          and
          <span className="text-foreground font-medium"> freelancer</span>{" "}
          passionate about design and development.
          <br /> I create fast, clear, and user-friendly websites,
          <br /> always learning and looking for ways to build better digital
          products.
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <Button className="group bg-black hover:bg-black text-white cursor-pointer hover: shadow-[0px_32px_64px_-12px_#0000004c,0px_16px_32px_-4px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]">
          Download Resume{" "}
          <Download className="group-hover:translate-y-0.5 transition-all" />
        </Button>
        <Button className="group bg-black hover:bg-black text-white border-none cursor-pointer shadow-[0px_32px_64px_-16px_#0000004c,0px_16px_32px_-8px_#0000004c,0px_8px_16px_-4px_#0000003d,0px_4px_8px_-2px_#0000003d,0px_-8px_16px_-1px_#00000029,0px_2px_4px_-1px_#0000003d,0px_0px_0px_1px_#000000,inset_0px_0px_0px_1px_#ffffff14,inset_0px_1px_0px_#ffffff33]">
          Email Me{" "}
          <Mail className="group-hover:translate-y-0.5 transition-all" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
