import { sections } from "../routes";

export interface BottomNavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function BottomNav({
  activeSection,
  setActiveSection,
}: BottomNavProps): JSX.Element {
  return (
    <nav className="bg-white flex flex-row justify-around px-4 pt-2 pb-4 fixed bottom-0 w-full md:hidden">
      {sections.slice(0, -1).map((section) => {
        const active = section.id === activeSection;

        return (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`flex flex-col items-center ${active ? "font-bold text-black" : "text-primary"}`}
          >
            <section.icon width={active ? 24 : 20} height={active ? 24 : 20} />
            {section.title}
          </button>
        );
      })}
    </nav>
  );
}
