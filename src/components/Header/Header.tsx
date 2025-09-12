import Link from 'next/link';
import { memo } from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import classes from './Header.module.css';
import Image from 'next/image';
import { Images } from '@/assets';

const Header = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.firstSection}>
        <Link href="/">
          <Image src={Images.headerLogoImage1.src} alt="Header Logo 1" width={40} height={40} />
        </Link>
        <Link href="/" className={classes.linkStyle}>
          <div className={classes.headerLogoText}>Rishabh Soni</div>
        </Link>
      </div>
      <div className={classes.secondSection}>
        <Link href="/" className={classes.linkStyle}>
          <div className={classes.optionStyles}>Home</div>
        </Link>
        <Link href="/" className={classes.linkStyle}>
          <div className={classes.optionStyles}>Projects</div>
        </Link>
        <Link href="/" className={classes.linkStyle}>
          <div className={classes.optionStyles}>Contact</div>
        </Link>
        <Link href="/" className={classes.linkStyle}>
          <div className={classes.optionStyles}>About</div>
        </Link>
      </div>
    </div>
  );
};

export default memo(Header);
