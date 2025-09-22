'use client';
import classes from './Footer.module.css';
import Link from 'next/link';
import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import {
  CallOutlined,
  EmailOutlined,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  LocationOn,
} from '@mui/icons-material';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Footer() {
  const [showInput, setShowInput] = useState(false);
  const [mounted, setMounted] = useState(false); // NEW
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mounted) return;
    function handleClickOutside(e: PointerEvent) {
      // if click is outside container -> close
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowInput(false);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setShowInput(false);
    }

    document.addEventListener('pointerdown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mounted]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowInput(false);
  }

  return (
    <div className={classes.footer}>
      <div className={classes.footerHeading}>Subscribe to my updates</div>
      <div className={classes.footerSubHeading}>
        Get updates on my latest Flutter projects, open-source, and learning journey.
      </div>

      {/* <div className={classes.emailButton}>Enter your email</div> */}

      {!showInput && (
        <button
          className={classes.emailButton}
          onClick={() => {
            setMounted(true);
            setShowInput(true);
          }}
        >
          Enter your email
        </button>
      )}

      <AnimatePresence onExitComplete={() => setMounted(false)}>
        {showInput && (
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.5 }}
            style={{ display: 'inline-block', marginTop: 12, marginBottom: 12 }}
          >
            <Box
              component="form"
              onSubmit={handleSubmit}
              display="flex"
              gap={1}
              alignItems="center"
              sx={{ width: { xs: '100%', sm: 420 } }}
            >
              <TextField
                InputProps={{
                  sx: {
                    color: 'white', // text color
                    '&::placeholder': {
                      color: 'gray', // placeholder color
                      opacity: 1,
                    },
                  },
                }}
                className={classes.emailTextField}
                name="email"
                placeholder="you@domain.com"
                size="small"
                fullWidth
                autoFocus
                onClick={(e) => e.stopPropagation()} // keep clicks inside from bubbling
              />
              <Button type="submit" variant="contained" color="primary">
                Subscribe
              </Button>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={classes.blackBox}>
        <div className={classes.blackBoxHeadingText}>
          Building modern mobile apps
          <br />
          with Flutter 🚀
        </div>
        <Typography>
          Expert in GetX, learning Bloc and other advance state management libraries,
          <br />
          with strong API integration skills.
        </Typography>
        <div className={classes.viewMyWork}>View My Work</div>
      </div>

      <div className={classes.secondBlackBox}>
        <Grid container spacing={4} sx={{ px: { xs: 2, md: 6 } }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" fontWeight={700}>
              Rishabh Soni
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, color: 'white' }}>
              Flutter Developer | React & Next.js Enthusiast
            </Typography>
            <Box mt={2}>
              <Box mb={1.5} display="flex" alignItems="center" gap={1}>
                <LocationOn sx={{ fontSize: 20, color: 'silver' }} />
                <Typography>India</Typography>
              </Box>

              <Box mb={1.5} display="flex" alignItems="center" gap={1}>
                <EmailOutlined sx={{ fontSize: 20, color: 'silver' }} />
                <Typography variant="body2">rishabhsoni50414@gmail.com</Typography>
              </Box>

              <Box mb={1.5} display="flex" alignItems="center" gap={1}>
                <CallOutlined sx={{ fontSize: 20, color: 'silver' }} />
                <Typography variant="body2">+91-9685791791</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={1}>
              Quick Links
            </Typography>
            <Typography variant="body2" mb={1.5}>
              Home
            </Typography>
            <Typography variant="body2" mb={1.5}>
              Projects
            </Typography>
            <Typography variant="body2" mb={1.5}>
              Resume
            </Typography>
            <Typography variant="body2" mb={1.5}>
              Contact
            </Typography>
          </Grid>

          <Grid size={{ xs: 6, md: 2 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={1}>
              Social
            </Typography>

            <Link
              href="https://github.com/RISHABH-SONII"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.footerSocialLinks}
            >
              <Box className={classes.boxWrapper}>
                <GitHub className={classes.linkIcon} />
                <Typography variant="body2">GitHub</Typography>
              </Box>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rishabh-soni-60915a227"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.footerSocialLinks}
            >
              <Box className={classes.boxWrapper}>
                <LinkedIn className={classes.linkIcon} />
                <Typography variant="body2">LinkedIn</Typography>
              </Box>
            </Link>

            <Link
              href="https://www.facebook.com/share/1EH4PmPiQW/"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.footerSocialLinks}
            >
              <Box className={classes.boxWrapper}>
                <Facebook className={classes.linkIcon} />
                <Typography variant="body2">Facebook</Typography>
              </Box>
            </Link>

            <Link
              href="https://www.instagram.com/swayam_100nii?igsh=Yml3dHBhamp2Mjdx"
              target="_blank"
              rel="noopener noreferrer"
              className={classes.footerSocialLinks}
            >
              <Box className={classes.boxWrapper}>
                <Instagram className={classes.linkIcon} />
                <Typography variant="body2">Instagram</Typography>
              </Box>
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="subtitle1" fontWeight={600} mb={1}>
              About Me
            </Typography>
            <Typography variant="body2" sx={{ color: 'white' }}>
              Passionate Flutter developer with expertise in GetX, exploring Bloc and advanced state
              management. Strong foundation in REST API integration and backend (SQL Server).
              <br />
              <br />
              Also have knowledge about how to publish apps on Google Play Store and App Store, and
              in the future I aim to learn and work on native platforms (Android, iOS).
              <br />
              <br />
              I also have basic knowledge of .NET MVC architecture, along with experience in
              React.js and Next.js where I have created some projects. <br />
              <br />
              Languages known: Hindi and English (not perfect, but I can understand conversations
              and continuously improve my speaking ability).
              {/* Passionate Flutter developer with expertise in GetX, exploring Bloc and advanced state
              management. Strong foundation in REST API integration and backend (SQL Server). */}
            </Typography>
          </Grid>
        </Grid>
        <Box textAlign="center" mt={3} mb={2} sx={{ borderTop: '1px solid #333', pt: 3 }}>
          <Typography variant="body2" sx={{ color: 'gray' }}>
            © 2024 Rishabh Soni. All rights reserved.
          </Typography>
        </Box>
      </div>
    </div>
  );
}
