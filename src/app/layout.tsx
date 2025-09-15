'use client';

import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';

// Import CSS module
import theme from '@/utils/theme';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import { Images } from '@/assets';
import classes from './layout.module.css';
import { poppins, roboto } from '@/utils/fonts';
import Footer from '@/components/Footer/Footer';
import AnimatedBackground from '@/components/AnimatedBackground.tsx/AnimatedBackground';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <body className={roboto.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.mainLayout}>
            <AnimatedBackground />
            <Head>
              <link rel="preload" href={Images.heroImage.src} as="image" type="image/webp" />
            </Head>

            {/* Header */}
            <Header />

            {children}

            {/* Footer */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
