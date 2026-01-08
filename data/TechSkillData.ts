import { AuthjsIcon } from "@/components/icons/AuthjsIcon";
import { BetterAuthIcon } from "@/components/icons/BetterAuthIcon";
import { FigmaIcon } from "@/components/icons/FigmaIcon";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { HostingerIcon } from "@/components/icons/HostingerIcon";
import { NextjsIcon } from "@/components/icons/NextjsIcon";
import { VercelIcon } from "@/components/icons/VercelIcon";

export const coreData = [
  { name: "JavaScript", icon: "/icons/core/js.svg" },
  { name: "TypeScript", icon: "/icons/core/ts.svg" },
  { name: "Nodejs", icon: "/icons/core/nodejs.svg" },
  { name: "HTML", icon: "/icons/core/html5.svg" },
  { name: "CSS", icon: "/icons/core/css3.svg" },
];

export const frameworksData = [
  { name: "Nextjs", icon: NextjsIcon },
  { name: "React", icon: "/icons/frameworks/react.svg" },
  { name: "Express", icon: "/icons/frameworks/express.svg" },
  { name: "tRPC", icon: "/icons/frameworks/trpc.svg" },
  { name: "Tanstack Query", icon: "/icons/frameworks/reactQuery.svg" },
  { name: "TailwindCSS", icon: "/icons/frameworks/tailwind.svg" },
  { name: "Motion", icon: "/icons/frameworks/motion.svg" },
  { name: "Better Auth", icon: BetterAuthIcon },
  { name: "Authjs", icon: AuthjsIcon },
  { name: "Jwt", icon: "/icons/frameworks/jwt.svg" },
];

export const databasesData = [
  { name: "MongoDB", icon: "/icons/databases/mongodb.svg" },
  { name: "PostgreSQL", icon: "/icons/databases/postgresql.svg" },
  { name: "NeonDB", icon: "/icons/databases/neon.svg" },
  { name: "Prisma", icon: "/icons/databases/prisma.svg" },
];

export const toolsData = [
  { name: "NPM", icon: "/icons/tools/npm.svg" },
  { name: "PNPM", icon: "/icons/tools/pnpm.svg" },
  { name: "Git", icon: "/icons/tools/git.svg" },
];

export const platformData = [
  { name: "Github", icon: GithubIcon },
  { name: "Vercel", icon: VercelIcon },
  { name: "Cloudflare", icon: "/icons/platforms/cloudflare.svg" },
  { name: "Hostinger", icon: HostingerIcon },
];

export const softwareData = [
  { name: "PostHog", icon: "/icons/softwares/posthog.svg" },
  { name: "Postman", icon: "/icons/softwares/postman.svg" },
  { name: "Sentry", icon: "/icons/softwares/sentry.svg" },
  { name: "Figma", icon: FigmaIcon },
];

export const devopsData = [
  { name: "Github Actions (CI/CD)", icon: GithubIcon },
];
