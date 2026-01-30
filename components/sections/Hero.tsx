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
        <Button variant="link">
          Download Resume <Download />
        </Button>
        <Button variant="link">
          Email Me <Mail />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
