'use client';

import { Container, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Link from 'next/link';
// import theme from "./theme";

// Import CSS module
import theme from '@/utils/theme';
import { Poppins } from 'next/font/google';
import Head from 'next/head';
import Header from '@/components/Header/Header';
import { Images } from '@/assets';
import { Footer } from '@/components/Footer/Footer';
import classes from './layout.module.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className={classes.mainLayout}>
            <Head>
              <link rel="preload" href={Images.heroImage.src} as="image" type="image/webp" />
            </Head>

            {/* Header */}
            <Header />

            {/* Page content */}
            {children}

            {/* Footer */}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
