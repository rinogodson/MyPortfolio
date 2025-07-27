// components/ResponsiveLayout.tsx
"use client";

import { useEffect, useState } from "react";
import LayoutDesktop from "@/layouts/LayoutDesktop";
import LayoutMobile from "@/layouts/LayoutMobile";

function useIsDesktop(breakpoint = 900) {
  const [isDesktop, setIsDesktop] = useState<"desktop" | "mobile" | "loading">("loading");

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

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const isDesktop = useIsDesktop();

  if (isDesktop === "loading") return null;

  return isDesktop === "desktop" ? (
    <LayoutDesktop>{children}</LayoutDesktop>
  ) : (
    <LayoutMobile>{children}</LayoutMobile>
  );
}
