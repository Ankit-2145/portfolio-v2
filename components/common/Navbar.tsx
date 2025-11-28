"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { HyperText } from "@/components/ui/hyper-text";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";

import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <nav className="font-inconsolata border-b">
      <div className="flex justify-between items-center">
        <Link href="/" className="px-2.5 md:px-5 py-4 border-r bg-foreground">
          <span className="text-base text-background font-medium select-none">
            ANKIT SHARMA.
          </span>
        </Link>
        <div className="hidden lg:flex items-center divide-x">
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
                  "px-2.5 md:px-5 py-4",
                  isActive && "bg-foreground text-background"
                )}
              >
                <HyperText as="span" className="text-base font-medium">
                  {item.name}
                </HyperText>
              </Link>
            );
          })}

          <span className="px-2.5 md:px-5 mt-2">
            <AnimatedThemeToggler className="h-6 w-6 cursor-pointer" />
          </span>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <AnimatedThemeToggler className="h-6 w-6 cursor-pointer" />
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
              <div className="flex flex-col px-6 divide-y">
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
                        "px-2.5 md:px-5 py-4 text-xl text-foreground",
                        isActive && "bg-background text-foreground"
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

export default Navbar;
