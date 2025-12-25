"use client";

import Image from "next/image";
import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";
import VerticalDashedLine from "@/components/ui/VerticalDashedLine";

import PlusIcons from "@/components/icons/PlusIcons";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section>
      <VerticalDashedLine position="left" />
      <VerticalDashedLine position="right" />
      <PlusIcons />
      <div className="relative flex justify-between items-center gap-6 mt-52 pl-17">
        {/* 🔼 TOP BORDER */}
        <motion.div
          className="absolute top-0 left-0 w-full border-t-2 border-dashed"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* 🔽 BOTTOM BORDER */}
        <motion.div
          className="absolute bottom-0 left-0 w-full border-b-2 border-dashed"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* ⬅️ LEFT BORDER (Top → Bottom) */}
        <motion.div
          className="absolute top-0 left-218 h-full border-l-2 border-dashed"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />

        {/* ➡️ RIGHT BORDER (Bottom → Top) */}
        <motion.div
          className="absolute bottom-0 right-60 h-full border-r-2 border-dashed"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "bottom" }}
        />
        <div className="space-y-2 p-2">
          <h1 className="font-jetBrainsMono text-base text-foreground">
            Hey, I&apos;m{" "}
            <span className="font-doto text-2xl font-semibold uppercase">
              Ankit Sharma
            </span>
          </h1>
          <p className="font-inconsolata text-base text-justify text-muted-foreground max-w-3xl">
            I&apos;m a{" "}
            <span className="text-foreground font-medium">
              <Highlighter action="highlight" color="#00b4d8">
                Full Stack Developer
              </Highlighter>
            </span>{" "}
            and
            <span className="text-foreground font-medium">
              {" "}
              <Highlighter action="highlight" color="#ffc300">
                Freelancer
              </Highlighter>
            </span>{" "}
            with strong curiosity and enthusiasm for both design and
            development. I build beautiful, functional websites with a focus on
            performance, clarity, and great user experience. I&apos;m always
            learning, improving, and looking for opportunities to grow and
            create meaningful digital products.
          </p>
        </div>
        <div className="pr-16">
          <Image
            src="/memoji2.svg"
            alt="memoji"
            className="pointer-events-none"
            width={175}
            height={175}
          />
        </div>
      </div>
      <div className="flex gap-4 mt-8 ml-18">
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
