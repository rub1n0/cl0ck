import type { Metadata } from "next";
import '@fontsource/space-mono/index.css';
import { ThemeModeScript } from 'flowbite-react';

export const metadata: Metadata = {
  title: "Big Digital Cl0ck",
  description: "A digital clock application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
