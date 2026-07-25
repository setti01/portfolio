import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function ClickEffect({
  color = "#ffffff",
  duration = 0.3,
  strokeWidth = 2,
  effectSize = 90,
}) {
  const containerRef = useRef(null);
  const [snipers, setSnipers] = useState([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleClick = (e) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x < 0 || y < 0 || x > rect.width || y > rect.height) return;
      const id = `${e.timeStamp}-${Math.round(x)}-${Math.round(y)}`;
      setSnipers((prev) => [...prev, { id, x, y }]);
    };

    container.addEventListener("click", handleClick);
    return () => container.removeEventListener("click", handleClick);
  }, []);

  const svgStyle = (x, y) => ({
    position: "absolute",
    left: x - effectSize / 2,
    top: y - effectSize / 2,
    width: effectSize,
    height: effectSize,
    pointerEvents: "none",
    overflow: "visible",
  });

  return (
    <div
      ref={containerRef}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 10,
      }}
    >
      {snipers.map((sniper) => (
        <div key={sniper.id} style={{ pointerEvents: "none" }}>
          <svg style={svgStyle(sniper.x, sniper.y)}
            ref={(el) => {
              if (!el) return;
              const lines = el.querySelectorAll("line");
              lines.forEach((line, index) => {
                const angle = [0, 90, 180, 270][index] * (Math.PI / 180);
                const cx = effectSize / 2;
                const cy = effectSize / 2;
                const len = effectSize * 0.2;
                const sx = cx + 5 * Math.cos(angle);
                const sy = cy - 5 * Math.sin(angle);
                const ex = cx + (5 + len) * Math.cos(angle);
                const ey = cy - (5 + len) * Math.sin(angle);
                gsap.set(line, { attr: { x1: sx, y1: sy, x2: ex, y2: ey }, strokeWidth });
                gsap.timeline()
                  .to(line, { attr: { x1: ex, y1: ey, x2: ex, y2: ey }, translateX: (5 + len) * Math.cos(angle), translateY: -(5 + len) * Math.sin(angle), duration, ease: "power2.out" })
                  .to(line, { strokeWidth: 0, duration: duration * 0.4, ease: "linear" }, duration * 0.6);
              });
            }}
          >
            {[0, 90, 180, 270].map((_, i) => (
              <line key={i} x1={effectSize/2} y1={effectSize/2} x2={effectSize/2} y2={effectSize/2} stroke={color} strokeWidth={strokeWidth} strokeLinecap="square" />
            ))}
          </svg>
          {[Math.PI/3, (2*Math.PI)/3, (4*Math.PI)/3, (5*Math.PI)/3, Math.PI/6, (5*Math.PI)/6, (7*Math.PI)/6, (11*Math.PI)/6].map((angle, i) => (
            <div key={i}
              style={{ position: "absolute", left: sniper.x - strokeWidth/2, top: sniper.y - strokeWidth/2, width: strokeWidth, height: strokeWidth, backgroundColor: color, pointerEvents: "none" }}
              ref={(el) => {
                if (!el || el.dataset.animated) return;
                el.dataset.animated = "true";
                gsap.timeline()
                  .to(el, { x: Math.cos(angle) * (effectSize * 0.4), y: Math.sin(angle) * (effectSize * 0.4), duration, ease: "power2.out", onComplete: () => setSnipers((prev) => prev.filter((s) => s.id !== sniper.id)) })
                  .to(el, { width: 0, height: 0, duration: duration * 0.4, ease: "linear" }, duration * 0.6);
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
