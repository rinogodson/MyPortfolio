import About from "@/pages/About";
import { ExternalLinkIcon } from "lucide-react";

import { motion } from "motion/react";

import { Lora, IBM_Plex_Sans } from "next/font/google";
import { useState } from "react";

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
          height: menuOpen ? "60vh" : "2.5em",
          transition: { duration: 0.5, type: "spring", bounce: 0.1 },
        }}
        className="w-screen flex justify-start items-center bg-black absolute bottom-0 overflow-hidden"
        onClick={() => {
          if (!menuOpen) setMenuOpen(true);
        }}
      >
        <motion.ul
          key="nav-items"
          layout
          transition={{ type: "spring", bounce: 0.1 }}
          onClick={() => {
            if (!menuOpen) setMenuOpen(true);
          }}
          style={{
            flexDirection: menuOpen ? "column" : "row",
          }}
          className={`flex justify-start pl-6 ${
            menuOpen ? "flex-col gap-4" : "flex-row gap-6"
          } items-center`}
        >
          {navItems.items.map((item, index) => (
            <motion.li
              layout
              key={index}
              className={`${listItemStyle} ${menuOpen ? "text-white" : "text-[rgba(255,255,255,0.4)]"} text-center ${
                navItems.selected === index
                  ? `text-white bold ${menuOpen && "underline"}`
                  : ""
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
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default LayoutMobile;
