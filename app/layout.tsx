import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALVIRA Bridge — One profile. Every AI tool.",
  description:
    "Take your ALVIRA profile everywhere. Carry your context into the AI tools you already use.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
