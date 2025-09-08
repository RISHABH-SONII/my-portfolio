"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Box, Typography, Stack, Link as MuiLink, Button } from "@mui/material";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Stack spacing={1} alignItems="center">
          <Typography>
            Get started by editing <code>src/app/page.tsx</code>.
          </Typography>
          <Typography>Save and see your changes instantly.</Typography>
        </Stack>

        <Stack direction="row" spacing={2} className={styles.ctas}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Image src="/vercel.svg" alt="Vercel logo" width={20} height={20} />}
            component="a"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </Button>

          <Button
            variant="outlined"
            color="primary"
            component="a"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </Button>
        </Stack>
      </main>

      <Box className={styles.footer}>
        <MuiLink href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer" underline="hover">
          <Image src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </MuiLink>
        <MuiLink href="https://vercel.com/templates?framework=next.js" target="_blank" rel="noopener noreferrer" underline="hover">
          <Image src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </MuiLink>
        <MuiLink href="https://nextjs.org" target="_blank" rel="noopener noreferrer" underline="hover">
          <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </MuiLink>
      </Box>
    </div>
  );
}
