"use client";

import Link from "next/link";
import { sections } from "../routes";
import { useEffect, useState } from "react";

export interface BottomNavProps {}

export default function BottomNav({}: BottomNavProps): JSX.Element {
  const [activeSection, setActiveSection] = useState<string>("");
  useEffect(() => {
    setActiveSection(window.location.hash || "#about");
  }, []);

  return (
    <nav className="bg-white flex flex-row justify-around px-4 pt-2 pb-4 fixed bottom-0 w-full md:hidden">
      {sections.map((section) => {
        const active = section.id === activeSection;

        return (
          <Link
            key={section.id}
            href={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex flex-col items-center ${active ? "font-bold text-black" : "text-primary"}`}
          >
            <section.icon width={active ? 24 : 20} height={active ? 24 : 20} />
            {section.title}
          </Link>
        );
      })}
    </nav>
  );
}
