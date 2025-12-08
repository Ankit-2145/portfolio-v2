"use client";

import Image from "next/image";

import { motion } from "motion/react";
import PlusIcons from "@/components/icons/PlusIcons";

import VerticalDashedLine from "@/components/ui/VerticalDashedLine";

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
          transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* 🔽 BOTTOM BORDER */}
        <motion.div
          className="absolute bottom-0 left-0 w-full border-b-2 border-dashed"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.9, ease: "easeInOut" }}
          style={{ transformOrigin: "left" }}
        />

        {/* ⬅️ LEFT BORDER (Top → Bottom) */}
        <motion.div
          className="absolute top-0 left-166 h-full border-l-2 border-dashed"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />

        {/* ➡️ RIGHT BORDER (Bottom → Top) */}
        <motion.div
          className="absolute bottom-0 right-60 h-full border-r-2 border-dashed"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
          style={{ transformOrigin: "bottom" }}
        />
        <div className="space-y-2 p-2">
          <h1 className="font-jetBrainsMono text-base text-foreground">
            Hey, I&apos;m{" "}
            <span className="font-doto text-2xl font-semibold uppercase">
              Ankit Sharma
            </span>
          </h1>
          <p className="font-inconsolata text-base text-justify text-muted-foreground max-w-xl">
            I&apos;m a{" "}
            <span className="text-foreground font-medium">
              Full Stack Developer{" "}
            </span>
            and
            <span className="text-foreground font-medium">
              {" "}
              Freelancer
            </span>{" "}
            with strong curiosity and enthusiasm for both design and
            development. I build beautiful, functional websites with a focus on
            performance, clarity, and great user experience. I&apos;m always
            learning, improving, and looking for opportunities to grow and
            create meaningful digital products.
          </p>
        </div>
        <div className="pr-18">
          <Image
            src="/memoji2.svg"
            alt="memoji"
            className="pointer-events-none bg-none"
            width={175}
            height={175}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
