import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { BottomNav, TopNav } from "@/components/Navs";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Ghanati's Website",
  description: "Greetings stranger! Welcome to my home [page].",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={"pb-20 pt-0 md:pt-20 " + poppins.className}>
        <TopNav />
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
