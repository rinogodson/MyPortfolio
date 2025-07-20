import About from "@/pages/About";
import { ExternalLinkIcon } from "lucide-react";

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
      <div className="p-[1em] flex flex-col h-[100vh] w-[100%] bg-[#1A1A1A] overflow-scroll" onClick={() => {if(menuOpen)setMenuOpen(false);}}>
        <About lora={lora} ibmPlexSans={ibmPlexSans} />
      </div>
      <div 
        style={{
          height: menuOpen ? "60vh" : "2.5em",
          transition: "all 0.3s ease",
        }}
        className="w-screen flex justify-center items-center bg-black absolute bottom-0 overflow-scroll" onClick={() => setMenuOpen(true)}>
        {menuOpen ? (
          <div className="place-self-start mt-10 ml-8 w-full">
            <nav className="flex flex-col items-start ">
              {navItems.items.map((item, index) => {
                if (item.type !== "page") return;
                return (
                  <a
                    key={index}
                    // href={item.link}
                    className={`${listItemStyle} ${index === navItems.selected ? "underline text-white" : ""
                      } text-[#AFAFAF] hover:underline text-[1.2em] hover:translate-x-[-0.2em] transition-all duration-300`}
                    onClick={() =>
                      setNavItems({ ...navItems, selected: index })
                    }
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="w-full h-[1px] my-5" />
              {navItems.items.map((item, index) => {
                if (item.type !== "link") return;
                return (
                  <div
                    key={index + item.label}
                    className="flex text-[1.2em] items-center justify-center hover:translate-x-[-0.2em] transition-all duration-300 text-[#AFAFAF] hover:text-white"
                  >
                    <a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={listItemStyle + " mr-2"}
                    >
                      {item.label}
                    </a>
                    <ExternalLinkIcon />
                  </div>
                );
              })}
            </nav>
          </div>
        ) : (
          // add stuff here
          <a className="text-white text-[1.2em]">
            {navItems.items[navItems.selected].label}
          </a>
        )}
      </div>
    </div>
  );
}

export default LayoutMobile;
