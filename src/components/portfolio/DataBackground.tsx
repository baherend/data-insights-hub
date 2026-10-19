import { useEffect, useRef } from "react";

const INTENSITY = 1;

type Point = { x: number; y: number; vx: number; vy: number; r: number; d: boolean };

const readVar = (name: string, fallback: string) => {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
};

const hsla = (triplet: string, a: number) => {
  const [h, s, l] = triplet.split(/\s+/);
  return `hsla(${h}, ${s}, ${l}, ${a})`;
};

export default function DataBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let raf = 0;
    let visible = !document.hidden;
    let pts: Point[] = [];
    let primary = "199 89% 45%";
    let data = "176 72% 38%";
    let boost = 1;
    const t0 = performance.now();

    const readColors = () => {
      primary = readVar("--primary", primary);
      data = readVar("--data", data);
      boost = document.documentElement.classList.contains("dark") ? 1.15 : 1;
    };

    const init = () => {
      const n = Math.min(90, Math.round((W * H) / 14000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.36,
        vy: (Math.random() - 0.5) * 0.24,
        r: 1.2 + Math.random() * 1.2,
        d: Math.random() < 0.3,
      }));
    };

    const trendY = (x: number, tt: number) =>
      H * 0.64 -
      (x / W) * H * 0.3 +
      Math.sin(x * 0.02 + tt * 0.7) * H * 0.035 +
      Math.sin(x * 0.007 - tt * 0.4) * H * 0.03;

    const draw = (now: number) => {
      const tt = (now - t0) / 1000;
      const k = INTENSITY * boost;
      ctx.clearRect(0, 0, W, H);

      const nb = Math.max(12, Math.round(W / 42));
      const bw = W / nb;
      for (let i = 0; i < nb; i++) {
        const h = H * 0.14 * (0.5 + 0.5 * Math.sin(tt * 0.5 + i * 0.6));
        ctx.fillStyle = hsla(i % 3 === 0 ? data : primary, 0.07 * k);
        ctx.fillRect(i * bw + bw * 0.2, H - h, bw * 0.6, h);
      }

      ctx.lineWidth = 2;
      ctx.strokeStyle = hsla(data, 0.28 * k);
      ctx.beginPath();
      for (let x = 0; x <= W; x += 10) {
        const y = trendY(x, tt);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      const dx = ((tt * 0.05) % 1) * W;
      const dy = trendY(dx, tt);
      ctx.fillStyle = hsla(data, 0.6 * k);
      ctx.beginPath();
      ctx.arc(dx, dy, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = hsla(data, 0.25 * k);
      ctx.beginPath();
      ctx.arc(dx, dy, 9, 0, Math.PI * 2);
      ctx.stroke();

      if (!reduce) {
        for (const p of pts) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0) p.x = W;
          if (p.x > W) p.x = 0;
          if (p.y < 0) p.y = H;
          if (p.y > H) p.y = 0;
        }
      }

      const D = 120;
      ctx.lineWidth = 1;
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const ddx = pts[i].x - pts[j].x;
          const ddy = pts[i].y - pts[j].y;
          const d2 = ddx * ddx + ddy * ddy;
          if (d2 < D * D) {
            const a = (1 - Math.sqrt(d2) / D) * 0.16 * k;
            ctx.strokeStyle = hsla(primary, a);
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.stroke();
          }
        }
      }
      for (const p of pts) {
        ctx.fillStyle = hsla(p.d ? data : primary, 0.45 * k);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      init();
      draw(performance.now());
    };

    const loop = (now: number) => {
      if (!visible) return;
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const onVisibility = () => {
      visible = !document.hidden;
      if (visible && !reduce) {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(loop);
      }
    };

    readColors();
    resize();
    if (!reduce) raf = requestAnimationFrame(loop);

    const observer = new MutationObserver(() => {
      readColors();
      draw(performance.now());
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
    />
  );
}