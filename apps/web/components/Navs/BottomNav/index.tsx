"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { routes } from "../routes";

export default function BottomNav(): JSX.Element {
  const pathname = usePathname();

  return (
    <nav className="bg-white flex flex-row justify-around px-4 pt-2 pb-4 fixed bottom-0 w-full md:hidden">
      {routes.map((route) => {
        const active = route.href === pathname;

        return (
          <Link
            key={route.href}
            href={route.href}
            className={`flex flex-col items-center ${active ? "font-bold text-black" : "text-primary"}`}
          >
            <route.icon width={active ? 24 : 20} height={active ? 24 : 20} />
            {route.title}
          </Link>
        );
      })}
    </nav>
  );
}
