'use client';

import { useEffect, useState } from 'react';
import classes from './HeroSection.module.css';
import Image from 'next/image';
import { Images } from '@/assets';
import { Button } from '@mui/material';
import { Info, LocationOn, ShoppingBag, Work } from '@mui/icons-material';

export default function HeroSection() {
  const [tagline, setTagline] = useState('');
  const fullTagline =
    'I am a passionate Flutter Developer with 1.2 years of experience in building cross-platform mobile applications. Skilled in creating responsive, high-performance, and visually appealing apps, I also have hands-on experience with modern web technologies like React and Next.js. I enjoy solving complex problems and delivering user-friendly digital experiences.';

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
        <h1 className={classes.nameText}>Rishabh Soni</h1>
        <h2 className={classes.techBackground}>
          <Image src={Images.braces} alt="curly braces" height={22} width={25} />
          Flutter Developer || Web Developer
        </h2>
        <p className={classes.taglineText}>{tagline}</p>
        <div className={classes.buttonRow}>
          <Button
            className={classes.myButton}
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<Image alt="hire Icon" src={Images.officeBagIcon} height={25} width={25} />}
          >
            Hire Me
          </Button>
          <Button
            className={classes.myButton}
            type="submit"
            variant="contained"
            color="primary"
            startIcon={<Image alt="info Icon" src={Images.infoIcon} height={25} width={25} />}
          >
            About Me
          </Button>
        </div>
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
