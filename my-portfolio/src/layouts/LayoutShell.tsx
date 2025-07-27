"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LayoutDesktop from "@/layouts/LayoutDesktop";
import LayoutMobile from "@/layouts/LayoutMobile";

function useIsDesktop(breakpoint = 900) {
  const [isDesktop, setIsDesktop] = useState<"desktop" | "mobile" | "loading">(
    "loading",
  );

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

export default function LayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDesktop = useIsDesktop();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDesktop === "desktop" ? (
          <LayoutDesktop>{children}</LayoutDesktop>
        ) : isDesktop === "mobile" ? (
          <LayoutMobile>{children}</LayoutMobile>
        ) : null}
      </motion.div>
    </AnimatePresence>
  );
}
