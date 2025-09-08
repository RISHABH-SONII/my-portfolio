"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light", // change to "dark" for dark mode
    primary: {
      main: "#1976d2", // blue
    },
    secondary: {
      main: "#9c27b0", // purple
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

export default theme;
