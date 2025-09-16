// // 'use client';

// // import { useEffect } from 'react';
// // import gsap from 'gsap';

// // export default function AnimatedBackground() {
// //   useEffect(() => {
// //     const container = document.getElementById('animated-bg');
// //     const particlesContainer = document.getElementById('particles');

// //     if (!container || !particlesContainer) return;

// //     // Create particles (if not already added)
// //     if (particlesContainer.children.length === 0) {
// //       for (let i = 0; i < 20; i++) {
// //         const particle = document.createElement('div');
// //         particle.className = 'particle absolute w-2 h-2 bg-white/20 rounded-full';
// //         particlesContainer.appendChild(particle);
// //       }
// //     }

// //     const particles = container.querySelectorAll('.particle');
// //     particles.forEach((particle, index) => {
// //       gsap.set(particle, {
// //         x: Math.random() * window.innerWidth,
// //         y: Math.random() * window.innerHeight,
// //         scale: Math.random() * 0.5 + 0.5,
// //       });

// //       gsap.to(particle, {
// //         y: `-=${Math.random() * 80}`,
// //         x: `+=${Math.random() * 40 - 20}`,
// //         duration: Math.random() * 8 + 8,
// //         repeat: -1,
// //         yoyo: true,
// //         ease: 'power1.inOut',
// //         delay: index * 0.5,
// //       });

// //       gsap.to(particle, {
// //         rotation: 360,
// //         duration: Math.random() * 20 + 20,
// //         repeat: -1,
// //         ease: 'none',
// //       });
// //     });

// //     // Animate gradient orbs
// //     const orbs = container.querySelectorAll('.gradient-orb');
// //     orbs.forEach((orb, index) => {
// //       gsap.to(orb, {
// //         x: `+=${Math.random() * 80 - 40}`,
// //         y: `+=${Math.random() * 80 - 40}`,
// //         duration: Math.random() * 8 + 8,
// //         repeat: -1,
// //         yoyo: true,
// //         ease: 'power1.inOut',
// //         delay: index * 2,
// //       });
// //     });
// //   }, []);

// //   return (
// //     <div id="animated-bg" className="fixed inset-0 overflow-hidden pointer-events-none z-0">
// //       {/* Gradient Orbs */}
// //       <div className="gradient-orb absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
// //       <div className="gradient-orb absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
// //       <div className="gradient-orb absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

// //       {/* Floating Particles */}
// //       <div id="particles"></div>

// //       {/* Grid Pattern */}
// //       <div
// //         className="absolute inset-0 opacity-5"
// //         style={{
// //           backgroundImage: `
// //             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
// //             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
// //           `,
// //           backgroundSize: '50px 50px',
// //         }}
// //       ></div>
// //     </div>
// //   );
// // }

// 'use client';

// import { useEffect } from 'react';
// import gsap from 'gsap';
// import styles from './AnimatedBackground.module.css';

// export default function AnimatedBackground() {
//   useEffect(() => {
//     const container = document.getElementById('animated-bg');
//     const particlesContainer = document.getElementById('particles');

//     if (!container || !particlesContainer) return;

//     // Create particles (if not already added)
//     if (particlesContainer.children.length === 0) {
//       for (let i = 0; i < 20; i++) {
//         const particle = document.createElement('div');
//         particle.className = styles.particle;
//         particlesContainer.appendChild(particle);
//       }
//     }

//     const particles = container.querySelectorAll(`.${styles.particle}`);
//     particles.forEach((particle, index) => {
//       gsap.set(particle, {
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         scale: Math.random() * 0.5 + 0.5,
//       });

//       gsap.to(particle, {
//         y: `-=${Math.random() * 80}`,
//         x: `+=${Math.random() * 40 - 20}`,
//         duration: Math.random() * 1 + 1,
//         repeat: -1,
//         yoyo: true,
//         ease: 'power1.inOut',
//         delay: index * 0.5,
//       });

//       gsap.to(particle, {
//         rotation: 360,
//         duration: Math.random() * 20 + 20,
//         repeat: -1,
//         ease: 'none',
//       });
//     });

//     // Animate gradient orbs
//     const orbs = container.querySelectorAll(`.${styles.gradientOrb}`);
//     orbs.forEach((orb, index) => {
//       gsap.to(orb, {
//         x: `+=${Math.random() * 80 - 40}`,
//         y: `+=${Math.random() * 80 - 40}`,
//         duration: Math.random() * 8 + 8,
//         repeat: -1,
//         yoyo: true,
//         ease: 'power1.inOut',
//         delay: index * 2,
//       });
//     });
//   }, []);

//   return (
//     <div id="animated-bg" className={styles.animatedBg}>
//       {/* Gradient Orbs */}
//       <div className={`${styles.gradientOrb} ${styles.orbBlue}`}></div>
//       <div className={`${styles.gradientOrb} ${styles.orbPurple}`}></div>
//       <div className={`${styles.gradientOrb} ${styles.orbEmerald}`}></div>

//       {/* Floating Particles */}
//       <div id="particles" className={styles.particles}></div>

//       {/* Grid Pattern */}
//       <div className={styles.gridPattern}></div>
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useRef } from 'react';

// type Mode = 'constellation' | 'aurora' | 'blobs';
// const MODE: Mode = 'constellation'; // switch between animations

// export default function AnimatedBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     if (MODE === 'constellation' && canvasRef.current) {
//       const canvas = canvasRef.current;

//       // ✅ const + safe check
//       const ctx = canvas.getContext('2d');
//       if (!ctx) return;
//       const context = ctx as CanvasRenderingContext2D;

//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       const stars: { x: number; y: number; vx: number; vy: number }[] = [];
//       for (let i = 0; i < 120; i++) {
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.5,
//           vy: (Math.random() - 0.5) * 0.5,
//         });
//       }

//       function draw() {
//         context.clearRect(0, 0, canvas.width, canvas.height);

//         for (let i = 0; i < stars.length; i++) {
//           const s = stars[i];
//           s.x += s.vx;
//           s.y += s.vy;

//           if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
//           if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

//           context.beginPath();
//           context.arc(s.x, s.y, 2, 0, Math.PI * 2);
//           context.fillStyle = '#868282ff';
//           context.fill();

//           for (let j = i + 1; j < stars.length; j++) {
//             const s2 = stars[j];
//             const dist = Math.hypot(s.x - s2.x, s.y - s2.y);
//             if (dist < 100) {
//               context.beginPath();
//               context.moveTo(s.x, s.y);
//               context.lineTo(s2.x, s2.y);
//               context.strokeStyle = 'rgba(255,255,255,0.1)';
//               context.stroke();
//             }
//           }
//         }

//         requestAnimationFrame(draw);
//       }
//       draw();

//       const handleResize = () => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//       };
//       window.addEventListener('resize', handleResize);

//       return () => {
//         window.removeEventListener('resize', handleResize);
//       };
//     }

//     if (MODE === 'aurora') {
//       const aurora = document.getElementById('aurora');
//       aurora?.classList.add('animate-aurora');
//     }

//     if (MODE === 'blobs') {
//       const blobs = document.getElementById('blobs');
//       blobs?.classList.add('animate-blobs');
//     }
//   }, []);

//   return (
//     <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
//       {MODE === 'constellation' && (
//         <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
//       )}
//       {MODE === 'aurora' && <div id="aurora" className="aurora-bg"></div>}
//       {MODE === 'blobs' && <div id="blobs" className="blobs-bg"></div>}
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useRef } from 'react';

// type Mode = 'constellation' | 'aurora' | 'blobs';
// const MODE: Mode = 'constellation'; // switch between animations

// export default function AnimatedBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     if (MODE === 'constellation' && canvasRef.current) {
//       const canvas = canvasRef.current;

//       const ctx = canvas.getContext('2d');
//       if (!ctx) return;
//       const context = ctx as CanvasRenderingContext2D;

//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       const stars: { x: number; y: number; vx: number; vy: number }[] = [];
//       for (let i = 0; i < 120; i++) {
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: (Math.random() - 0.5) * 0.5,
//           vy: (Math.random() - 0.5) * 0.5,
//         });
//       }

//       // 🖱️ track mouse position
//       const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
//       const handleMouseMove = (e: MouseEvent) => {
//         mouse.x = e.clientX;
//         mouse.y = e.clientY;
//       };
//       window.addEventListener('mousemove', handleMouseMove);

//       function draw() {
//         context.clearRect(0, 0, canvas.width, canvas.height);

//         for (let i = 0; i < stars.length; i++) {
//           const s = stars[i];
//           s.x += s.vx;
//           s.y += s.vy;

//           // bounce at edges
//           if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
//           if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

//           // ✨ repel/attract effect
//           const dx = s.x - mouse.x;
//           const dy = s.y - mouse.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < 120) {
//             // 👉 change multiplier: +0.02 = repel, -0.02 = attract
//             const force = (120 - dist) * 0.02;
//             s.vx += (dx / dist) * force;
//             s.vy += (dy / dist) * force;
//           }

//           // draw star
//           context.beginPath();
//           context.arc(s.x, s.y, 2, 0, Math.PI * 2);
//           context.fillStyle = '#868282ff';
//           context.fill();

//           // draw connecting lines
//           for (let j = i + 1; j < stars.length; j++) {
//             const s2 = stars[j];
//             const dist2 = Math.hypot(s.x - s2.x, s.y - s2.y);
//             if (dist2 < 100) {
//               context.beginPath();
//               context.moveTo(s.x, s.y);
//               context.lineTo(s2.x, s2.y);
//               context.strokeStyle = 'rgba(255,255,255,0.1)';
//               context.stroke();
//             }
//           }
//         }

//         requestAnimationFrame(draw);
//       }
//       draw();

//       const handleResize = () => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//       };
//       window.addEventListener('resize', handleResize);

//       // cleanup
//       return () => {
//         window.removeEventListener('mousemove', handleMouseMove);
//         window.removeEventListener('resize', handleResize);
//       };
//     }

//     if (MODE === 'aurora') {
//       const aurora = document.getElementById('aurora');
//       aurora?.classList.add('animate-aurora');
//     }

//     if (MODE === 'blobs') {
//       const blobs = document.getElementById('blobs');
//       blobs?.classList.add('animate-blobs');
//     }
//   }, []);

//   return (
//     <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
//       {MODE === 'constellation' && (
//         <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
//       )}
//       {MODE === 'aurora' && <div id="aurora" className="aurora-bg"></div>}
//       {MODE === 'blobs' && <div id="blobs" className="blobs-bg"></div>}
//     </div>
//   );
// }

// 'use client';

// import { useEffect, useRef } from 'react';

// type Mode = 'constellation' | 'aurora' | 'blobs';
// const MODE: Mode = 'constellation'; // switch between animations

// export default function AnimatedBackground() {
//   const canvasRef = useRef<HTMLCanvasElement | null>(null);

//   useEffect(() => {
//     if (MODE === 'constellation' && canvasRef.current) {
//       const canvas = canvasRef.current;

//       const ctx = canvas.getContext('2d');
//       if (!ctx) return;
//       const context = ctx as CanvasRenderingContext2D;

//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;

//       // star type includes base velocity + active velocity
//       const stars: {
//         x: number;
//         y: number;
//         vx: number;
//         vy: number;
//         baseVx: number;
//         baseVy: number;
//       }[] = [];

//       for (let i = 0; i < 300; i++) {
//         const baseVx = (Math.random() - 0.5) * 0.2; // slow base drift
//         const baseVy = (Math.random() - 0.5) * 0.2;
//         stars.push({
//           x: Math.random() * canvas.width,
//           y: Math.random() * canvas.height,
//           vx: baseVx,
//           vy: baseVy,
//           baseVx,
//           baseVy,
//         });
//       }

//       // 🖱️ track mouse position
//       const mouse = { x: -9999, y: -9999 }; // start off-screen
//       const handleMouseMove = (e: MouseEvent) => {
//         mouse.x = e.clientX;
//         mouse.y = e.clientY;
//       };
//       window.addEventListener('mousemove', handleMouseMove);

//       function draw() {
//         context.clearRect(0, 0, canvas.width, canvas.height);

//         for (let i = 0; i < stars.length; i++) {
//           const s = stars[i];

//           // ✨ apply hover repulsion
//           const dx = s.x - mouse.x;
//           const dy = s.y - mouse.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);

//           if (dist < 120) {
//             const force = (120 - dist) * 0.02; // repulsion strength
//             s.vx += (dx / dist) * force;
//             s.vy += (dy / dist) * force;
//           } else {
//             // 💤 slowly return velocity to base drift
//             s.vx += (s.baseVx - s.vx) * 0.02;
//             s.vy += (s.baseVy - s.vy) * 0.02;
//           }

//           // move star
//           s.x += s.vx;
//           s.y += s.vy;

//           // bounce at edges
//           if (s.x < 0 || s.x > canvas.width) s.vx *= -1;
//           if (s.y < 0 || s.y > canvas.height) s.vy *= -1;

//           // draw star
//           context.beginPath();
//           context.arc(s.x, s.y, 2, 0, Math.PI * 2);
//           context.fillStyle = '#868282ff';
//           context.fill();

//           // draw connecting lines
//           for (let j = i + 1; j < stars.length; j++) {
//             const s2 = stars[j];
//             const dist2 = Math.hypot(s.x - s2.x, s.y - s2.y);
//             if (dist2 < 100) {
//               context.beginPath();
//               context.moveTo(s.x, s.y);
//               context.lineTo(s2.x, s2.y);
//               context.strokeStyle = 'rgba(255,255,255,0.1)';
//               context.stroke();
//             }
//           }
//         }

//         requestAnimationFrame(draw);
//       }
//       draw();

//       const handleResize = () => {
//         canvas.width = window.innerWidth;
//         canvas.height = window.innerHeight;
//       };
//       window.addEventListener('resize', handleResize);

//       // cleanup
//       return () => {
//         window.removeEventListener('mousemove', handleMouseMove);
//         window.removeEventListener('resize', handleResize);
//       };
//     }
//   }, []);

//   return (
//     <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
//       {MODE === 'constellation' && (
//         <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
//       )}
//       {MODE === 'aurora' && <div id="aurora" className="aurora-bg"></div>}
//       {MODE === 'blobs' && <div id="blobs" className="blobs-bg"></div>}
//     </div>
//   );
// }

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
        const baseVx = (Math.random() - 0.5) * 0.1; // slower drift
        const baseVy = (Math.random() - 0.5) * 0.1;
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
    <div style={{ position: 'fixed', inset: 0, zIndex: 0 }}>
      {MODE === 'constellation' && (
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />
      )}
      {MODE === 'aurora' && <div id="aurora" className="aurora-bg"></div>}
      {MODE === 'blobs' && <div id="blobs" className="blobs-bg"></div>}
    </div>
  );
}
