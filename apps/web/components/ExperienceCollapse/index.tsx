"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

export interface ExperienceCollapseProps {
  image: string | StaticImageData;
  imageAlt: string;
  title: string;
  company: string;
  date: string;
  children: Array<JSX.Element>;
}

export default function ExperienceCollapse({
  image,
  imageAlt,
  title,
  company,
  date,
  children,
}: ExperienceCollapseProps): JSX.Element {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl border border-current px-2 mb-2">
      <div
        className="flex flex-row items-center py-3 text-sm cursor-pointer"
        onClick={() => {
          setOpen((open) => !open);
        }}
      >
        <div className="bg-secondary p-2 rounded w-16 h-16 flex items-center justify-center">
          <Image src={image} alt={imageAlt} />
        </div>
        <div className="flex flex-col justify-center ms-2">
          <div className="font-medium">{title}</div>
          <div className="text-primary">{company}</div>
          <div className="text-primary">{date}</div>
        </div>
        <div className="ms-auto">
          <svg
            className={`w-3 me-2 text-primary ${open ? "" : "rotate-180"}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </div>
      </div>
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden mb-1 ${open ? "max-h-screen" : "max-h-0"}`}
      >
        {children}
      </div>
    </div>
  );
}
