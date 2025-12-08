"use client";

import { motion } from "motion/react";

const VerticalDashedLine = ({ position = "left" }) => {
  const base =
    "hidden absolute top-14 w-px h-[calc(100vh-3.5rem)] border-dashed pointer-events-none lg:block xl:block";

  const sideClasses =
    position === "left"
      ? "left-5 lg:left-16 xl:left-16 border-l-2"
      : "right-5 lg:right-16 xl:right-16 border-r-2";

  const delay = position === "left" ? 0 : 0.35; // 👈 stagger timing

  return (
    <motion.div
      className={`${base} ${sideClasses}`}
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{
        duration: 1.2,
        delay,
        ease: "easeInOut",
      }}
      style={{ transformOrigin: "top" }}
    />
  );
};

export default VerticalDashedLine;
