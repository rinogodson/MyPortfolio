"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LayoutDesktop from "@/layouts/LayoutDesktop";
import LayoutMobile from "@/layouts/LayoutMobile";
import { useSetLayoutContent } from "@/contexts/LayoutContentContext";

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
  const pathname = usePathname();
  const isDesktop = useIsDesktop();
  const setLayoutContent = useSetLayoutContent();

  useEffect(() => {
    // Animate and update only content
    setLayoutContent(
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.4, ease: [0.32, 1.05, 0.5, 1] },
          }}
          exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
          className="h-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    );
  }, [pathname, children, setLayoutContent]);

  if (isDesktop === "loading") return (
    <div className="md:bg-[#1A1A1A] lg:bg-[#1A1A1A] bg-[#1A1A1A] sm:bg-[#1A1A1A] h-screen w-screen">
    </div>
  );

  return isDesktop === "desktop" ? <LayoutDesktop /> : <LayoutMobile />;
}
