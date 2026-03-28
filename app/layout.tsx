import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Academia Bilingue - MindSpring Academy",
  description:
    "Welcome to MindSpring Academy, where we nurture each student's unique strengths, helping them grow into confident, capable individuals ready to succeed in life and beyond.",
  openGraph: {
    title: "Academia Bilingue - MindSpring Academy",
    description:
      "Welcome to MindSpring Academy, where we nurture each student's unique strengths, helping them grow into confident, capable individuals ready to succeed in life and beyond.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&family=Roboto+Serif:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/images/webclip.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
