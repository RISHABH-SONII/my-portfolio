'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [tagline, setTagline] = useState('');
  const fullTagline = 'I build stunning web experiences with React & Next.js.';

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTagline(fullTagline.slice(0, index));
      index++;
      if (index > fullTagline.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
        zIndex: 2, // ensures it's above the background
        padding: '0 1rem',
      }}
    >
      <h1 style={{ fontSize: '4rem', fontWeight: 700, marginBottom: '1rem' }}>
        Hi, I&apos;m Rishabh
      </h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem', minHeight: '2em' }}>{tagline}</p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a
          href="#projects"
          style={{
            padding: '0.75rem 2rem',
            border: '2px solid #00ffff',
            borderRadius: '50px',
            color: '#00ffff',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#00ffff33')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          View My Work
        </a>
        <a
          href="#contact"
          style={{
            padding: '0.75rem 2rem',
            border: '2px solid #ff00ff',
            borderRadius: '50px',
            color: '#ff00ff',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#ff00ff33')}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
