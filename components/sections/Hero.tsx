"use client";

import { toast } from "sonner";
import { Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Highlighter } from "@/components/ui/highlighter";

const Hero = () => {
  const email = "ankitsharma2615@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    toast.success("Email Copied!");
  };

  return (
    <section className="flex flex-col justify-center items-start min-h-[75vh] py-20">
      <div className=" space-y-4">
        <span className="font-jetBrainsMono text-xs text-muted-foreground">
          Hey, I&apos;m{" "}
        </span>
        <h1 className="font-doto text-2xl font-semibold uppercase">
          Ankit Sharma
        </h1>
        <p className="font-inconsolata text-base text-muted-foreground">
          I&apos;m a{" "}
          <span className="text-foreground font-medium">
            <Highlighter action="box" color="#00b4d8">
              Frontend Developer
            </Highlighter>
          </span>{" "}
          and{" "}
          <span className="text-foreground font-medium">
            <Highlighter action="box" color="#ffc300">
              freelancer
            </Highlighter>
          </span>{" "}
          passionate about design and development.
          <br /> I create fast, clear, and user-friendly websites,
          <br /> always learning and looking for ways to build better digital
          products.
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        {/* Download Resume */}
        <a
          href="/resume/Ankit-Sharma-Resume.pdf"
          download="Ankit-Sharma-Resume.pdf"
        >
          <Button variant="default" className="cursor-pointer">
            Download Resume <Download className="ml-1.5 h-4 w-4" />
          </Button>
        </a>

        {/* Email */}
        <a href="mailto:ankitsharma2615@gmail.com">
          <Button
            variant="secondary"
            className="cursor-pointer"
            onClick={handleCopy}
          >
            Email Me <Mail className="ml-1.5 h-4 w-4" />
          </Button>
        </a>
      </div>
      <div className="flex gap-4 mt-8">
        <a
          href="https://github.com/Ankit-2145"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="link"
            className="underline underline-offset-4 cursor-pointer"
          >
            Github
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/ankit-sharma-03a680218/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="link"
            className="underline underline-offset-4 cursor-pointer"
          >
            LinkedIn
          </Button>
        </a>
        <a
          href="https://x.com/Ankit__46"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            variant="link"
            className="underline underline-offset-4 cursor-pointer"
          >
            Twitter
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
