import "./globals.css";
import type { Metadata } from "next";
import { RootProvider } from "fumadocs-ui/provider/next";

import { Inconsolata, Doto, JetBrains_Mono } from "next/font/google";

import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import ThemeProvider from "@/components/providers/ThemeProvider";
import ScrollProvider from "@/components/providers/ScrollProvider";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inconsolata",
});

const doto = Doto({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-doto",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "Ankit Sharma - Portfolio",
  description: "I create cool digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inconsolata.variable} ${doto.variable} ${jetBrainsMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            <RootProvider>
              <ScrollProvider>{children}</ScrollProvider>
            </RootProvider>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
