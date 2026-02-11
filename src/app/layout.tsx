import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EdNxt.ai - Educational Online Consultancy",
  description: "Your partner in educational growth and career advancement.",
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased font-sans tracking-tight`}
        style={{ letterSpacing: "-0.05em" }}
      >
        {children}
      </body>
    </html>
  );
}

