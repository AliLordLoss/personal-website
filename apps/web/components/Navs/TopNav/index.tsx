"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../routes";

export default function TopNav(): JSX.Element {
  const pathname = usePathname();
  const activeRouteIndex = routes.findIndex((route) => route.href === pathname);
  const spanPosition = activeRouteIndex * 25 + 2.5;

  return (
    <nav className="bg-white fixed top-0 w-full hidden px-4 md:block">
      <div className="relative flex flex-row justify-around py-4">
        {routes.map((route) => {
          const active = route.href === pathname;

          return (
            <Link
              key={route.href}
              href={route.href}
              className={`flex flex-col items-center ${active ? "font-bold text-black" : "text-primary"}`}
            >
              {route.title}
            </Link>
          );
        })}
        <span
          className="transition-all absolute border border-black border-2 w-1/5 rounded-full bottom-0"
          style={{
            left: `${spanPosition}%`,
            transition: "left 0.3s ease-in-out",
          }}
        ></span>
      </div>
    </nav>
  );
}
