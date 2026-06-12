import { useState, useEffect, useCallback } from "react";
import { slides } from "./components/slides-data";
import { SlideRenderer } from "./components/SlideRenderer";
import { SlideNav } from "./components/SlideNav";

export default function App() {
  /* MARKER-MAKE-KIT-INVOKED */
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const go = useCallback(
    (dir: 1 | -1) => setCurrent((c) => Math.max(0, Math.min(total - 1, c + dir))),
    [total]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-background"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="w-full flex-1 flex flex-col items-center justify-center px-4 py-6">
        <div
          className="relative w-full overflow-hidden"
          style={{
            maxWidth: "1280px",
            aspectRatio: "16/9",
            borderRadius: "4px",
            boxShadow: "0 0 0 1px rgba(245,197,24,0.15), 0 32px 80px rgba(0,0,0,0.7)",
          }}
        >
          <SlideRenderer slide={slides[current]} index={current} />
        </div>
      </div>
      <SlideNav current={current} total={total} onGo={setCurrent} onStep={go} />
    </div>
  );
}
