import { SVGAttributes } from "react";
import {
  BriefcaseIcon,
  MessageIcon,
  FolderIcon,
  AddressCardIcon,
  IdBadgeIcon,
  UserGraduateIcon,
} from "../Icons";

export interface SectionProps {
  id: string;
  title: string;
  icon: React.FC<React.PropsWithChildren<SVGAttributes<HTMLOrSVGElement>>>;
}

export const sections: Array<SectionProps> = [
  { id: "#about", title: "About Me", icon: AddressCardIcon },
  { id: "#education", title: "Education", icon: UserGraduateIcon },
  { id: "#experiences", title: "Experiences", icon: BriefcaseIcon },
  { id: "#projects", title: "Projects", icon: FolderIcon },
  { id: "#contact-me", title: "Contact Me", icon: MessageIcon },
  { id: "#bio", title: "Bio", icon: IdBadgeIcon },
];
