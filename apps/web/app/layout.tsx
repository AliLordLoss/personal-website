import type { Metadata } from "next";
import { Roboto_Condensed } from "next/font/google";
import { SideNav } from "@/components/Navs";

import "./globals.css";

const myFont = Roboto_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Ghanati",
  description: "Greetings stranger! Welcome to Ali Ghanati's home [page].",
  openGraph: {
    title: "Ali Ghanati - Software Engineer",
    description: "Professional profile showcasing expertise",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={"overflow-visible md:flex pb-20 md:pb-0 " + myFont.className}
      >
        <SideNav />
        {children}
      </body>
    </html>
  );
}
