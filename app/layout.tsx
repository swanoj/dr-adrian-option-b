import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr Adrian | Website Version B",
  description:
    "Version B content build for Dr Adrian website, based strictly on supplied website designer guides.",
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
