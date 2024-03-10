import { SVGAttributes } from "react";
import { BriefcaseIcon, MessageIcon, FolderIcon, HomeIcon } from "../Icons";

export interface RouteProps {
  href: string;
  title: string;
  icon: React.FC<React.PropsWithChildren<SVGAttributes<HTMLOrSVGElement>>>;
}

export const routes: Array<RouteProps> = [
  {
    href: "/",
    title: "Home",
    icon: HomeIcon,
  },
  {
    href: "/work-experience",
    title: "Experience",
    icon: BriefcaseIcon,
  },
  {
    href: "/projects",
    title: "Projects",
    icon: FolderIcon,
  },
  {
    href: "/contact-me",
    title: "Contact",
    icon: MessageIcon,
  },
];
