"use client";

import { useState } from "react";
import Link from "next/link";
import { sections } from "../routes";
import { ChevronRightIcon } from "@/components/Icons";

export default function SideNav(): JSX.Element {
  const [open, setOpen] = useState(true);

  return (
    <nav
      className={`sticky top-0 bg-secondary flex flex-col justify-start pt-4 h-screen overflow-hidden whitespace-nowrap ${open ? "min-w-48" : "min-w-14"} transition-all ease-in-out duration-300 hidden md:block`}
    >
      <div
        className="px-2 items-center py-2 text-primary"
        onClick={() => setOpen(!open)}
      >
        <button className="p-2 rounded-full hover:bg-neutral-200">
          <ChevronRightIcon
            width={24}
            height={24}
            className={open ? "rotate-180" : ""}
          />
        </button>
      </div>
      {sections.map((section) => {
        return (
          <Link
            key={section.id}
            href={section.id}
            className="flex flex-row gap-2 items-center px-4 py-2 text-primary hover:bg-neutral-200"
          >
            <section.icon className="min-w-6" width={24} height={24} />
            {open && section.title}
          </Link>
        );
      })}
    </nav>
  );
}
