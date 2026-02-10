import { useState } from "react";

export default function CopyEmail({
  email,
  className,
}: {
  email: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleClick}
      className={`group relative cursor-pointer ${className}`}
    >
      {email}
      <span className="pointer-events-none absolute -top-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-950 px-2 py-0.5 text-xs text-neutral-300 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-neutral-950 dark:text-neutral-300">
        {copied ? "Copied!" : "Click to copy"}
      </span>
    </button>
  );
}
