import { useState } from "react";
import { Moon, Sun } from "lucide-react";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export default function Nav({
  dark,
  onToggleDark,
}: {
  dark: boolean;
  onToggleDark: () => void;
}) {
  const [open, setOpen] = useState(false);

  const handleClick = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/70 backdrop-blur-sm print:hidden">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleClick("hero")}
          className="text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100"
        >
          david alsheuski
        </button>

        <div className="hidden items-center gap-6 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className="text-sm text-neutral-500 transition-colors hover:text-neutral-200"
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={onToggleDark}
            className="text-neutral-500 transition-colors hover:text-neutral-200"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="text-sm text-neutral-500 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "close" : "menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-neutral-900 px-6 pb-4 md:hidden">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleClick(s.id)}
              className="block w-full py-2 text-left text-sm text-neutral-500 transition-colors hover:text-neutral-200"
            >
              {s.label}
            </button>
          ))}
          <button
            onClick={onToggleDark}
            className="mt-1 text-neutral-500 transition-colors hover:text-neutral-200"
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={14} /> : <Moon size={14} />}
          </button>
        </div>
      )}
    </nav>
  );
}
