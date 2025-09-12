'use client';
import classes from './Footer.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Images } from '@/assets';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaRegCopyright } from 'react-icons/fa';

export function Footer() {
  return (
    <div className={classes.footer}>
      <div className={classes.footerSocialLinks}>
        <div className={classes.footerImageContainer}>
          <Image
            className={classes.footerImage}
            src={Images.headerLogo.src}
            alt="headerlogo"
            width={70}
            height={70}
          />
        </div>
        <div className={classes.footerDescription}>
          <Link href="/" aria-label="Privacy Policy">
            Privacy Policy
          </Link>
        </div>
        <div className={classes.socialLinks}>
          <Link
            href="https://www.linkedin.com/company/externshipai/"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn color="#fff" />
          </Link>
          <Link href="https://www.instagram.com/fliprindia/" target="_blank" aria-label="Instagram">
            <FaInstagram color="#fff" />
          </Link>
          <Link href="https://www.facebook.com/fliprindia/" target="_blank" aria-label="Facebook">
            <FaFacebookF color="#fff" />
          </Link>
        </div>
      </div>
      <div className={classes.copyright}>
        <FaRegCopyright className={classes.copyRightSymbol} color="#fff" />
        <p className={classes.copyrightText}>
          2022{' '}
          <Link href={'https://flipr.ai/'} target="_blank">
            Flipr.ai
          </Link>{' '}
          All rights reserved.
        </p>
      </div>
    </div>
  );
}
