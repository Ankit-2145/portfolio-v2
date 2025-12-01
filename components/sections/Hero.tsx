import React from "react";

const Hero = () => {
  return (
    <section>
      <div className="hidden absolute top-14 left-5 w-px h-[calc(100%+30px)] dark:bg-[#26242C] bg-stone-200  pointer-events-none lg:block lg:left-16 xl:left-16"></div>
      <div className="hidden absolute top-14 right-5 w-px h-[calc(100%+30px)]  dark:bg-[#26242C] bg-stone-200  pointer-events-none lg:block lg:right-16 xl:right-16"></div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-plus hidden absolute -top-1.25 h-6 w-6 lg:translate-y-21 pointer-events-none lg:block lg:left-[3.275rem] text-neutral-300 dark:text-neutral-600 translate-y-[.5px]"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-plus hidden absolute -top-1.25 h-6 w-6 right-[1.4625rem] lg:translate-y-21 pointer-events-none lg:block lg:right-[2.7750rem] text-neutral-300 dark:text-neutral-600 translate-y-[.5px]"
        aria-hidden="true"
      >
        <path d="M5 12h14"></path>
        <path d="M12 5v14"></path>
      </svg>
    </section>
  );
};

export default Hero;
