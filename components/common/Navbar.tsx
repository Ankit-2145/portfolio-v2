// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import {
//   Feather,
//   FlaskConical,
//   Folder,
//   GraduationCap,
//   Home,
//   LucideIcon,
//   Menu,
// } from "lucide-react";
// import { usePathname } from "next/navigation";

// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

// interface NavItem {
//   name: string;
//   href: string;
//   icon: LucideIcon;
// }

// const navItems: NavItem[] = [
//   { name: "Home", href: "/", icon: Home },
//   { name: "Work", href: "/work", icon: GraduationCap },
//   { name: "Projects", href: "/projects", icon: Folder },
//   { name: "Lab", href: "/lab", icon: FlaskConical },
//   { name: "Skills", href: "/skills", icon: Feather },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const pathname = usePathname();

//   return (
//     <header>
//       <nav className="max-w-max mx-auto mt-4 font-inconsolata border rounded-full">
//         <div className="flex justify-center items-center">
//           <div className="flex items-center divide-x-2">
//             {navItems.map((item) => {
//               const isActive =
//                 (pathname === "/" && item.href === "/") ||
//                 pathname === item.href ||
//                 pathname.startsWith(`${item.href}/`);

//               return (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={cn(
//                     "px-2.5 md:px-5 py-4",
//                     isActive && "bg-foreground text-background rounded-full"
//                   )}
//                 >
//                   <span className="flex items-center gap-2 text-base font-medium">
//                     <item.icon className="size-4" /> {item.name}
//                   </span>
//                 </Link>
//               );
//             })}

//             <span className="px-2.5 md:px-5 mt-2">
//               <AnimatedThemeToggler className="h-6 w-6 cursor-pointer" />
//             </span>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;

"use client";

import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Feather,
  FlaskConical,
  Folder,
  GraduationCap,
  Home,
  LucideIcon,
  Menu,
} from "lucide-react";

export const Navbar = () => {
  const links = [
    {
      title: "Home",
      icon: (
        <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Work",
      icon: (
        <GraduationCap className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/work",
    },
    {
      title: "Projects",
      icon: (
        <Folder className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "Lab",
      icon: (
        <FlaskConical className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/lab",
    },
    {
      title: "Skills",
      icon: (
        <Feather className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/skills",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full mt-4">
      <FloatingDock items={links} />
    </div>
  );
};
