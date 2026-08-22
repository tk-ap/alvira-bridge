import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ALVIRA Bridge — Get your AI profile into every agent",
  description:
    "Carry your ALVIRA profile into ChatGPT, Claude, Gemini, Cursor, and the AI tools you use.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
