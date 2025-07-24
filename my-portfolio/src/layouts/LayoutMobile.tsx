import About from "@/pages/About";
import { ExternalLinkIcon } from "lucide-react";

import { motion } from "motion/react";

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

const animationParameters: any = { duration: 0.4, ease: [0.32, 1.05, 0.5, 1] };

function LayoutMobile() {
  const listItemStyle = "flex cursor-pointer my-2";
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
          behavior: "instant",
          inline: "end",
          block: "nearest",
        },
      );
    }
  }, [navItems.selected, menuOpen]);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden">
      <div
        id="shadowobject"
        style={{
          position: "absolute",
          width: "100%",
          height: "10%",
          bottom: 0,
          filter: "blur(50px)",
          background: "rgba(0, 0, 0, 1)",
          pointerEvents: "none",
        }}
      ></div>
      <div
        className="p-[1em] pb-[13em] flex flex-col h-[100vh] w-[100%] bg-[#1A1A1A] overflow-scroll overflow-x-hidden no-scrollbar"
        onClick={() => {
          if (menuOpen) setMenuOpen(false);
        }}
      >
        <About lora={lora} ibmPlexSans={ibmPlexSans} />
      </div>
      <motion.div
        initial={false}
        animate={{
          height: menuOpen ? "38rem" : "4em",
          width: menuOpen ? "60%" : "90%",
          paddingInline: menuOpen ? "5em" : "2em",
          borderRadius: menuOpen ? "3em" : "5em",
          bottom: menuOpen ? "1em" : "1em",
          right: menuOpen ? "1em" : "calc(5vw)",
        }}
        transition={animationParameters}
        style={{
          justifyContent: !menuOpen ? "flex-start" : "center",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
        className={`${menuOpen ? "overflow-hidden" : "overflow-hidden"} no-scrollbar flex items-center bg-[rgba(0,0,0,0.6)] backdrop-blur-2xl absolute`}
        onClick={(e) => {
          if (!menuOpen) setMenuOpen(true);
          e.stopPropagation();
        }}
      >
        <motion.ul
          initial={false}
          key="nav-items"
          layout
          transition={animationParameters}
          style={{
            flexDirection: menuOpen ? "column" : "row",
            justifyContent: "start",
            alignItems: "center",
            textAlign: "left",
          }}
          className={`flex ${menuOpen ? "flex-col gap-4" : "flex-row gap-6"} `}
        >
          {navItems.items.map(
            (item, index) =>
              item.type == "page" && (
                <motion.li
                  initial={false}
                  layout
                  transition={animationParameters}
                  animate={{ opacity: 1, x: 0 }}
                  ref={(el) => {
                    return (itemRefs.current[item.label] = el);
                  }}
                  key={index}
                  className={`${listItemStyle} ${menuOpen ? "text-white h-[2rem] p-0 m-0 items-start content-start w-full" : "text-[rgba(255,255,255,0.2)] text-[1.5em]"} text-center ${navItems.selected === index
                      ? `text-white bold ${menuOpen && "underline"} text-[1.5em]`
                      : "text-[1.5em]"
                    }`}
                  onClick={() => {
                    if (menuOpen) {
                      setNavItems((prev) => ({ ...prev, selected: index }));
                    }
                    setMenuOpen(!menuOpen);
                  }}
                >
                  {item.label}
                </motion.li>
              ),
          )}

          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -100, x: 40 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={animationParameters}
              className="flex flex-col content-end items-end w-full overflow-hidden"
            >
              {navItems.items.map(
                (item, index) =>
                  item.type == "link" && (
                    <motion.li
                      layout
                      transition={animationParameters}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      key={index}
                      className={`${listItemStyle} text-[rgba(255,255,255,0.4)] text-[1.5em] items-start content-end`}
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        {item.label} <ExternalLinkIcon size={16} />
                      </a>
                    </motion.li>
                  ),
              )}
            </motion.div>
          )}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default LayoutMobile;
