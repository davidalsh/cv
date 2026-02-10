const CODE_SNIPPETS = [
  "async def handle(request):",
  "def __init__(self, db):",
  "yield from generator()",
  "raise HTTPException(404)",
  "class UserService(Base):",
  "@app.route('/health')",
  "import asyncio",
  "const api = await fetch()",
  "export default function App()",
  "interface Props { id: string }",
  "useEffect(() => {}, [])",
  "type Result<T> = Promise<T>",
  "func main() {",
  "go handleConn(conn)",
  "defer db.Close()",
  "if err != nil { return err }",
  "std::vector<int> nums;",
  "#include <iostream>",
  "auto ptr = std::make_unique",
  "template<typename T>",
];

const seeds = CODE_SNIPPETS.map((_, i) => ({
  top: `${(i * 17 + 7) % 90}%`,
  left: `${(i * 23 + 11) % 95}%`,
  duration: `${20 + (i * 7) % 15}s`,
  delay: `${-((i * 3) % 20)}s`,
  opacity: 0.04 + (i % 5) * 0.02,
  scale: 0.7 + (i % 4) * 0.15,
}));

export default function HeroBackground() {
  return (
    <div className="absolute inset-x-0 top-16 bottom-0 -z-10 overflow-hidden">
      {CODE_SNIPPETS.map((snippet, i) => (
        <span
          key={i}
          className="absolute whitespace-nowrap font-mono text-sm text-neutral-500 animate-float"
          style={{
            top: seeds[i].top,
            left: seeds[i].left,
            opacity: seeds[i].opacity,
            transform: `scale(${seeds[i].scale})`,
            animationDuration: seeds[i].duration,
            animationDelay: seeds[i].delay,
          }}
        >
          {snippet}
        </span>
      ))}
    </div>
  );
}
