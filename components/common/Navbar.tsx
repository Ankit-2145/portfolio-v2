"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Feather,
  FileText,
  FlaskConical,
  Folder,
  GraduationCap,
  Home,
  LucideIcon,
  Menu,
} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from "@/components/ui/theme-toggle";

interface NavItem {
  name: string;
  href: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "Work", href: "/work", icon: GraduationCap },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Blog", href: "/blog", icon: FileText },
  { name: "Lab", href: "/lab", icon: FlaskConical },
  { name: "Skills", href: "/skills", icon: Feather },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="font-inconsolata border-b border-dashed">
      <div className="flex justify-between items-center">
        <Link href="/" className="px-2.5 md:px-5 py-3.5 bg-background">
          <span className="text-base text-foreground font-medium select-none">
            ANKIT SHARMA.
          </span>
        </Link>
        <div className="hidden lg:flex items-center">
          {navItems.map((item) => {
            const isActive =
              (pathname === "/" && item.href === "/") ||
              pathname === item.href ||
              pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "px-2.5 md:px-5 py-3.5",
                  isActive && "bg-foreground text-background",
                )}
              >
                <span className="flex items-center gap-2 text-base font-medium">
                  <item.icon className="size-4" /> {item.name}
                </span>
              </Link>
            );
          })}

          <span className="px-2.5 md:px-5 py-3.5">
            <ModeToggle />
          </span>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="px-0 text-lg hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-background" side="top">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col px-6 divide-y-2 divide-dashed">
                {navItems.map((item) => {
                  const isActive =
                    (pathname === "/" && item.href === "/") ||
                    pathname === item.href ||
                    pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "px-2.5 md:px-5 py-3.5 text-xl text-foreground",
                        isActive && "bg-background text-foreground",
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
