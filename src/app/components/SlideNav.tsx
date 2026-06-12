import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  current: number;
  total: number;
  onGo: (i: number) => void;
  onStep: (dir: 1 | -1) => void;
};

export function SlideNav({ current, total, onGo, onStep }: Props) {
  return (
    <div
      className="w-full flex items-center justify-between px-6 py-3"
      style={{
        maxWidth: "1280px",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      <button
        onClick={() => onStep(-1)}
        disabled={current === 0}
        className="flex items-center gap-2 px-4 py-2 transition-all duration-200"
        style={{
          color: current === 0 ? "rgba(122,138,170,0.3)" : "#f5c518",
          border: "1px solid",
          borderColor: current === 0 ? "rgba(122,138,170,0.15)" : "rgba(245,197,24,0.4)",
          borderRadius: "2px",
          background: "transparent",
          cursor: current === 0 ? "not-allowed" : "pointer",
          fontSize: "12px",
          letterSpacing: "0.1em",
        }}
      >
        <ChevronLeft size={14} />
        PREV
      </button>

      {/* Dot indicators */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => onGo(i)}
            style={{
              width: i === current ? "24px" : "6px",
              height: "6px",
              borderRadius: "3px",
              background: i === current ? "#f5c518" : "rgba(122,138,170,0.3)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.25s ease",
              padding: 0,
            }}
          />
        ))}
      </div>

      <div className="flex items-center gap-4">
        <span style={{ color: "#7a8aaa", fontSize: "11px", letterSpacing: "0.12em" }}>
          {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <button
          onClick={() => onStep(1)}
          disabled={current === total - 1}
          className="flex items-center gap-2 px-4 py-2 transition-all duration-200"
          style={{
            color: current === total - 1 ? "rgba(122,138,170,0.3)" : "#f5c518",
            border: "1px solid",
            borderColor: current === total - 1 ? "rgba(122,138,170,0.15)" : "rgba(245,197,24,0.4)",
            borderRadius: "2px",
            background: "transparent",
            cursor: current === total - 1 ? "not-allowed" : "pointer",
            fontSize: "12px",
            letterSpacing: "0.1em",
          }}
        >
          NEXT
          <ChevronRight size={14} />
        </button>
      </div>
    </div>
  );
}
