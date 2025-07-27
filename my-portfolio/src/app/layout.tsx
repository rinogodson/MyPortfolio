import Head from "next/head";
import "./globals.css";
import { LayoutContentProvider } from "@/contexts/LayoutContentContext";

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
        <meta
          name="keywords"
          content="Rino Godson, Developer, Portfolio, Web Development"
        />
        <meta name="author" content="Rino Godson" />
        <meta title="Rino Godson | Developer Portfolio" />
      </Head>
      <body className={`overflow-hidden antialiased bg-black text-white `}>
        <div className="flex flex-col h-screen">
          <LayoutContentProvider>
            {children}
          </LayoutContentProvider>
        </div>
      </body>
    </html>
  );
}
