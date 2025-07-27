"use client";

import { useRef, useEffect, useState } from "react";
import LayoutDesktop from "./LayoutDesktop";
import LayoutMobile from "./LayoutMobile";

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDesktop, setIsDesktop] = useState<"desktop" | "mobile" | null>(null);
  const desktopLayoutRef = useRef<React.ReactNode>(null);
  const mobileLayoutRef = useRef<React.ReactNode>(null);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= 900 ? "desktop" : "mobile");
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  if (!isDesktop) return null;

  if (isDesktop === "desktop") {
    if (!desktopLayoutRef.current) {
      desktopLayoutRef.current = <LayoutDesktop />;
    }
    return (
      <>
        {desktopLayoutRef.current}
        <div className="page-container">{children}</div>
      </>
    );
  } else {
    if (!mobileLayoutRef.current) {
      mobileLayoutRef.current = <LayoutMobile />;
    }
    return (
      <>
        {mobileLayoutRef.current}
        <div className="page-container">{children}</div>
      </>
    );
  }
}
