import About from "@/pages/About";
import { ExternalLinkIcon } from "lucide-react";

import { motion } from "motion/react";
import { nav } from "motion/react-m";

import { Lora, IBM_Plex_Sans } from "next/font/google";
import { useEffect, useRef, useState } from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});
const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-sans",
});

function LayoutMobile() {
  const listItemStyle = "cursor-pointer w-full h-full my-2";
  const [menuOpen, setMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState<{
    selected: Number;
    items: { label: string; type: string; link: string }[];
  }>({
    selected: 0,
    items: [
      { label: "about", type: "page", link: "/" },
      { label: "projects", type: "page", link: "/about" },
      { label: "bookmarks", type: "page", link: "/projects" },
      { label: "resume", type: "page", link: "/contact" },
      { label: "hackclub", type: "page", link: "/contact" },
      { label: "github", type: "link", link: "https://github.com/rinogodson" },
      {
        label: "linkedin",
        type: "link",
        link: "https://www.linkedin.com/in/rinogodson/",
      },
      {
        label: "instagram",
        type: "link",
        link: "https://www.instagram.com/rinogodson/",
      },
      { label: "x (twitter)", type: "link", link: "https://x.com/rinogodson" },
    ],
  });

  // item focusing things, no logic here, just for styling
  const itemRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  useEffect(() => {
    if (
      !menuOpen &&
      itemRefs.current[navItems.items[navItems.selected].label] &&
      itemRefs.current[navItems.items[navItems.selected].label]
    ) {
      itemRefs.current[navItems.items[navItems.selected].label]?.scrollIntoView(
        {
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        },
      );
    }
  }, [navItems.selected, menuOpen]);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div
        className="p-[1em] flex flex-col h-[100vh] w-[100%] bg-[#1A1A1A] overflow-scroll"
        onClick={() => {
          if (menuOpen) setMenuOpen(false);
        }}
      >
        <About lora={lora} ibmPlexSans={ibmPlexSans} />
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{
          height: menuOpen ? "60vh" : "4em",
          transition: { duration: 0.5, type: "spring", bounce: 0.1 },
        }}
        style={{
          justifyContent: !menuOpen ? "flex-start" : "center",
        }}
        className={`${!menuOpen ? "overflow-x-auto no-scrollbar" : "overflow-scroll"} w-screen flex items-center bg-black absolute bottom-0`}
        onClick={(e) => {
          if (!menuOpen) setMenuOpen(true);
          e.stopPropagation();
        }}
      >
        <motion.ul
          key="nav-items"
          layout
          transition={{ type: "spring", bounce: 0.1 }}
          style={{
            flexDirection: menuOpen ? "column" : "row",
            justifyContent: "start",
            alignItems: "center",
            textAlign: "left",
          }}
          className={`flex pl-6 ${
            menuOpen ? "flex-col gap-4" : "flex-row gap-6"
          } `}
        >
          {navItems.items.map(
            (item, index) =>
              ( menuOpen || item.type == "page" ) && (
                <motion.li
                  layout
                  transition={{ type: "spring", bounce: 0.1 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  ref={(el) => {
                    return (itemRefs.current[item.label] = el);
                  }}
                  key={index}
                  className={`${listItemStyle} ${menuOpen ? "text-white" : "text-[rgba(255,255,255,0.4)] text-[1.5em]"} text-center ${
                    navItems.selected === index
                      ? `text-white bold ${menuOpen && "underline"} text-[1.2em]`
                      : "text-[1.2em]"
                  }`}
                  onClick={() => {
                    if (menuOpen) {
                      setNavItems((prev) => ({ ...prev, selected: index }));
                    }
                    setMenuOpen(!menuOpen);
                  }}
                >
                  {item.label}
                  {item.type === "link" && menuOpen && (
                    <ExternalLinkIcon className="inline ml-1" />
                  )}
                </motion.li>
              ),
          )}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default LayoutMobile;
