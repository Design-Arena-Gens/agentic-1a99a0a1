"use client";

import { useEffect, useRef } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4 * devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.4 * devicePixelRatio
    }));

    const onResize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      // subtle grid
      ctx.fillStyle = 'rgba(255,255,255,0.02)';
      for (let x = 0; x < width; x += 50 * devicePixelRatio) {
        ctx.fillRect(x, 0, 1, height);
      }
      for (let y = 0; y < height; y += 50 * devicePixelRatio) {
        ctx.fillRect(0, y, width, 1);
      }
      // particles and connections
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < 180 * devicePixelRatio) {
            const alpha = 1 - d / (180 * devicePixelRatio);
            const grad = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
            grad.addColorStop(0, `rgba(0,229,255,${0.25 * alpha})`);
            grad.addColorStop(1, `rgba(0,255,156,${0.25 * alpha})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        ctx.fillStyle = 'rgba(157,78,221,0.9)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2 * devicePixelRatio, 0, Math.PI * 2);
        ctx.fill();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener('resize', onResize);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="absolute inset-0 -z-10">
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(0,229,255,0.10),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(0,255,156,0.12),transparent_60%)]"></div>
    </div>
  );
}
