"use client";
import { ExternalLinkIcon } from "lucide-react";
import React from "react";

export const NavigationList = () => {
  const listItemStyle = "cursor-pointer w-full h-full my-2";
  const [navItems, setNavItems] = React.useState<{
    selected: Number;
    items: { label: string; type: string; link: string }[];
  }>({
    selected: 0,
    items: [
      { label: "about", type: "page", link: "/" },
      { label: "projects", type: "page", link: "/projects" },
      { label: "bookmarks", type: "page", link: "/bookmarks" },
      { label: "resume", type: "page", link: "/resume" },
      { label: "hackclub", type: "page", link: "/hc" },
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
    <div className="place-self-start mt-[calc(2em_+_15%)] ml-8 w-full">
      <nav className="flex flex-col items-start ">
        {navItems.items.map((item, index) => {
          if (item.type !== "page") return;
          return (
            <a
              key={index}
              href={item.link}
              className={`${listItemStyle} ${
                index === navItems.selected ? "underline text-white" : ""
              } text-[#AFAFAF] hover:underline text-[1.2em] hover:translate-x-[-0.2em] transition-all duration-300`}
              onClick={() => setNavItems({ ...navItems, selected: index })}
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
  );
};
