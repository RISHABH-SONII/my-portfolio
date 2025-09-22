'use client';

import { useEffect, useRef } from 'react';

type Mode = 'constellation' | 'aurora' | 'blobs';
const MODE: Mode = 'constellation'; // switch between animations

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (MODE === 'constellation' && canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      const context = ctx as CanvasRenderingContext2D;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // ⭐ star type
      const stars: {
        x: number;
        y: number;
        vx: number;
        vy: number;
        baseVx: number;
        baseVy: number;
      }[] = [];

      const STAR_COUNT = 400; // increase for more stars ✨

      for (let i = 0; i < STAR_COUNT; i++) {
        const baseVx = (Math.random() - 0.5) * 0.5; // slower drift
        const baseVy = (Math.random() - 0.5) * 0.5;
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: baseVx,
          vy: baseVy,
          baseVx,
          baseVy,
        });
      }

      // 🖱️ track mouse
      const mouse = { x: -9999, y: -9999 };
      const handleMouseMove = (e: MouseEvent) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      };
      window.addEventListener('mousemove', handleMouseMove);

      function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < stars.length; i++) {
          const s = stars[i];

          // ✨ apply hover repulsion
          const dx = s.x - mouse.x;
          const dy = s.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const force = (120 - dist) * 0.02;
            s.vx += (dx / dist) * force;
            s.vy += (dy / dist) * force;
          } else {
            // 💤 ease back to slow drift
            s.vx += (s.baseVx - s.vx) * 0.02;
            s.vy += (s.baseVy - s.vy) * 0.02;
          }

          // move star
          s.x += s.vx;
          s.y += s.vy;

          // 🌌 wrap around edges (never disappear)
          if (s.x < 0) s.x = canvas.width;
          else if (s.x > canvas.width) s.x = 0;
          if (s.y < 0) s.y = canvas.height;
          else if (s.y > canvas.height) s.y = 0;

          // draw star
          context.beginPath();
          context.arc(s.x, s.y, 2, 0, Math.PI * 2);
          context.fillStyle = '#868282ff';
          context.fill();

          // draw connecting lines
          for (let j = i + 1; j < stars.length; j++) {
            const s2 = stars[j];
            const dist2 = Math.hypot(s.x - s2.x, s.y - s2.y);
            if (dist2 < 100) {
              context.beginPath();
              context.moveTo(s.x, s.y);
              context.lineTo(s2.x, s2.y);
              context.strokeStyle = 'rgba(255,255,255,0.1)';
              context.stroke();
            }
          }
        }

        requestAnimationFrame(draw);
      }
      draw();

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };
      window.addEventListener('resize', handleResize);

      // cleanup
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none' }}>
      {MODE === 'constellation' && (
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      )}
      {MODE === 'aurora' && <div id="aurora" className="aurora-bg"></div>}
      {MODE === 'blobs' && <div id="blobs" className="blobs-bg"></div>}
    </div>
  );
}
