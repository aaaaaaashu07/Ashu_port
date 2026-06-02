import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anushka Joshi — Software Engineer · Edge AI · Creative Dev",
  description:
    "Portfolio of Anushka Joshi — Computer Engineering student specializing in Edge AI, creative tech, and full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
