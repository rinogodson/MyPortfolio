"use client";
import Head from "next/head";
import "./globals.css";
import { LayoutDesktop } from "@/layouts/LayoutDesktop";
import LayoutMobile from "@/layouts/LayoutMobile";
import { useEffect, useState } from "react";

function useIsDesktop(breakpoint = 900) {
  const [isDesktop, setIsDesktop] = useState("loading");

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= breakpoint ? "desktop" : "mobile");
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [breakpoint]);

  return isDesktop;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDesktop = useIsDesktop();
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
          <div className="flex-1 overflow-hidden">
            {isDesktop === "desktop" ? (
              <LayoutDesktop>{children}</LayoutDesktop>
            ) : isDesktop === "mobile" ? (
              <LayoutMobile>{children}</LayoutMobile>
            ) : null}
          </div>
        </div>
      </body>
    </html>
  );
}
