export default function DeskLamp() {
  return (
    <div className="pointer-events-none absolute -top-6 -right-28 z-10 hidden sm:block">
      <svg
        width="200"
        height="160"
        viewBox="0 0 200 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="opacity-20"
      >
        {/* Base - flat line */}
        <line x1="80" y1="150" x2="140" y2="150" stroke="#737373" strokeWidth="2" />
        {/* Stand - vertical */}
        <line x1="110" y1="150" x2="110" y2="90" stroke="#737373" strokeWidth="1.5" />
        {/* Arm - diagonal */}
        <line x1="110" y1="90" x2="50" y2="40" stroke="#737373" strokeWidth="1.5" />
        {/* Lamp shade - angled line */}
        <line x1="50" y1="40" x2="20" y2="48" stroke="#737373" strokeWidth="2" />
      </svg>

      {/* Soft glow under lamp head */}
      <div
        className="absolute top-10 left-0 h-60 w-40"
        style={{
          background: "radial-gradient(ellipse at 25% 0%, rgba(255,255,255,0.05) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
