"use client";

import { ThemeProvider } from "next-themes";


export function ColorModeProvider(props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="#E5E5E5"
      disableTransitionOnChange
      {...props}
    />
  );
}
