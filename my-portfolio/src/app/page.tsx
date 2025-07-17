"use client";
import { LayoutDesktop } from "@/layouts/LayoutDesktop";
import LayoutMobile from "@/layouts/LayoutMobile";
import { useEffect, useState } from "react";

function useIsDesktop(breakpoint = 900) {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setIsDesktop(window.innerWidth >= breakpoint);
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  }, [breakpoint]);

  return isDesktop;
}

export default function Home() {
  const isDesktop = useIsDesktop();
  return isDesktop ? <LayoutDesktop /> : <LayoutMobile />;
}
