'use client';

import { useEffect, useState } from 'react';
import classes from './HeroSection.module.css';
import Image from 'next/image';
import { Images } from '@/assets';

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
    <section className={classes.heroSection}>
      <div className={classes.textColumn}>
        <p className={classes.welcomeText}>WELCOME TO MY PORTFOLIO 👋 </p>
        <h1 className={classes.nameText}>
          Rishabh <br />
          <span className={classes.nameText1}>Soni</span>
        </h1>
        <h2 className={classes.techBackground}>
          <Image src={Images.braces} alt="curly braces" height={25} width={25} />
          Flutter Dev
        </h2>
        <p className={classes.taglineText}>{tagline}</p>
      </div>

      <div className={classes.imageColumn}>
        <Image
          src={Images.heroImage.src}
          alt="heroImage"
          width={400}
          height={400}
          className={classes.heroImage}
          priority
        />
      </div>
    </section>
  );
}
