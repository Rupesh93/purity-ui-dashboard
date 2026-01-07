"use client";

import { ThemeProvider } from "next-themes";


export function ColorModeProvider(props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      disableTransitionOnChange
      {...props}
    />
  );
}
