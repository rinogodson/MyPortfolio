import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rino Godson | Portfolio",
  description: "Developer Portfolio of Rino Godson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black text-white `} 
      >
        {children}
      </body>
    </html>
  );
}
