import type { Metadata } from "next";
import Head from "next/head";
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
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Developer Portfolio of Rino Godson" />
      </Head>
      <body className={`overflow-hidden antialiased bg-black text-white `}>
        {children}
      </body>
    </html>
  );
}
