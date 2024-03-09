import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import BottomNav from "@/components/BottomNav";

import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ali Ghanati's Website",
  description:
    "Greetings stranger, Welcome! Maybe you could find what you seek in my website, so please take a look :)",
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
      <body className={poppins.className}>
        {children}
        <BottomNav />
      </body>
    </html>
  );
}
