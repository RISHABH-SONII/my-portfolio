// 'use client';

// import { useEffect } from 'react';
// import gsap from 'gsap';

// export default function AnimatedBackground() {
//   useEffect(() => {
//     const container = document.getElementById('animated-bg');
//     const particlesContainer = document.getElementById('particles');

//     if (!container || !particlesContainer) return;

//     // Create particles (if not already added)
//     if (particlesContainer.children.length === 0) {
//       for (let i = 0; i < 20; i++) {
//         const particle = document.createElement('div');
//         particle.className = 'particle absolute w-2 h-2 bg-white/20 rounded-full';
//         particlesContainer.appendChild(particle);
//       }
//     }

//     const particles = container.querySelectorAll('.particle');
//     particles.forEach((particle, index) => {
//       gsap.set(particle, {
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         scale: Math.random() * 0.5 + 0.5,
//       });

//       gsap.to(particle, {
//         y: `-=${Math.random() * 80}`,
//         x: `+=${Math.random() * 40 - 20}`,
//         duration: Math.random() * 8 + 8,
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
//     const orbs = container.querySelectorAll('.gradient-orb');
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
//     <div id="animated-bg" className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {/* Gradient Orbs */}
//       <div className="gradient-orb absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
//       <div className="gradient-orb absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
//       <div className="gradient-orb absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>

//       {/* Floating Particles */}
//       <div id="particles"></div>

//       {/* Grid Pattern */}
//       <div
//         className="absolute inset-0 opacity-5"
//         style={{
//           backgroundImage: `
//             linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
//             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
//           `,
//           backgroundSize: '50px 50px',
//         }}
//       ></div>
//     </div>
//   );
// }

'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import styles from './AnimatedBackground.module.css';

export default function AnimatedBackground() {
  useEffect(() => {
    const container = document.getElementById('animated-bg');
    const particlesContainer = document.getElementById('particles');

    if (!container || !particlesContainer) return;

    // Create particles (if not already added)
    if (particlesContainer.children.length === 0) {
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = styles.particle;
        particlesContainer.appendChild(particle);
      }
    }

    const particles = container.querySelectorAll(`.${styles.particle}`);
    particles.forEach((particle, index) => {
      gsap.set(particle, {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        scale: Math.random() * 0.5 + 0.5,
      });

      gsap.to(particle, {
        y: `-=${Math.random() * 80}`,
        x: `+=${Math.random() * 40 - 20}`,
        duration: Math.random() * 8 + 8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 0.5,
      });

      gsap.to(particle, {
        rotation: 360,
        duration: Math.random() * 20 + 20,
        repeat: -1,
        ease: 'none',
      });
    });

    // Animate gradient orbs
    const orbs = container.querySelectorAll(`.${styles.gradientOrb}`);
    orbs.forEach((orb, index) => {
      gsap.to(orb, {
        x: `+=${Math.random() * 80 - 40}`,
        y: `+=${Math.random() * 80 - 40}`,
        duration: Math.random() * 8 + 8,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
        delay: index * 2,
      });
    });
  }, []);

  return (
    <div id="animated-bg" className={styles.animatedBg}>
      {/* Gradient Orbs */}
      <div className={`${styles.gradientOrb} ${styles.orbBlue}`}></div>
      <div className={`${styles.gradientOrb} ${styles.orbPurple}`}></div>
      <div className={`${styles.gradientOrb} ${styles.orbEmerald}`}></div>

      {/* Floating Particles */}
      <div id="particles" className={styles.particles}></div>

      {/* Grid Pattern */}
      <div className={styles.gridPattern}></div>
    </div>
  );
}
