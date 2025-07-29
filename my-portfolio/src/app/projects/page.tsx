"use client";
import LayoutShell from "@/layouts/LayoutShell";

import { Lora, IBM_Plex_Sans } from "next/font/google";
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

const ProjectList: {
  img: string;
  title: string;
  description: string;
  link?: string;
  repo: string;
  cover?: boolean;
  bg?: string;
}[] = [
  {
    img: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/15d87ad3ca51a4c9af4c4d818f62a633762f7fe8_ode-favicon.png",
    cover: false,
    title: "Ode - YT Music Inside Cards",
    description:
      "Create amazing music cards that play beautiful tunes directly from YouTube links! Try it now!",
    link: "https://ode-alpha.vercel.app",
    repo: "https://github.com/rinogodson/ode",
  },
  {
    img: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/377cf0dd91854bd22bb648cdf976270b523616b3_image.png",
    cover: false,
    bg: "#161616",
    title: "README Wizard",
    description:
      "A tool to generate beautiful README files for your GitHub projects. It helps you create a professional-looking README files.",
    link: "https://readme-wizard-three.vercel.app/",
    repo: "https://github.com/rinogodson/readme-wizard",
  },
  {
    img: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/0a77321c13a2709418d4367df55159c04bcb0bba_image.png",
    cover: false,
    bg: "#140901",
    title: "Snow-fi",
    description:
      "Holiday themed lofi music player. Listen to beautiful lofi music while enjoying the winter vibes. It features a beautiful snowing background and a cozy atmosphere.",
    link: "https://snow-fi-two.vercel.app/",
    repo: "https://github.com/rinogodson/snow-fi",
  },
  {
    img: "https://github.com/rinogodson/Rosterio/blob/master/public/rost-512x512.png?raw=true",
    title: "Rosterio",
    description:
      "An app that helps you create Presentees or Absentees list for sharing with your team. It allows you to manage your team's attendance easily.",
    repo: "https://github.com/rinogodson/Rosterio",
  },
  {
    img: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/c19f45482fc3ec8e06769785ba34f205c9556622_image.png",
    title: "BucketCash",
    description:
      "Put your money in buckets. A simple, secure, and private way to manage your finances. Track your income and expenses effortlessly.",
    link: "https://bucketcash.netlify.app",
    repo: "https://github.com/rinogodson/BucketCash",
  },
  {
    img: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/fde6faefae8db8112bd04ebe452b2ba8a35166d4_image.png",
    cover: false,
    bg: "#0F0E05",
    title: "DreamShell",
    description: "Dream Journal for cool kids. CLI Based!",
    repo: "https://github.com/rinogodson/DreamShell",
  },
  {
    img: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/e8cac56ebb8521909daf3541b9bf95b0f7dc1288_image.png",
    cover: false,
    bg: "#2B1434",
    title: "Squid Game Vote",
    description:
      "A voting app inspired by the Squid Game series. Vote for your favorite contestants and see the results in real-time.",
    link: "https://squidgamevote.netlify.app/",
    repo: "https://github.com/rinogodson/squidgamevote",
  },
  {
    img: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/a4b2000f77c215caa39800ea92bde4c5217e5fb1_image.png",
    title: "React Bits - Experience",
    description:
      "A place where you can experience the power of https://reactbits.dev. A collection of React components and hooks.",
    link: "https://react-bits-experience.vercel.app",
    repo: "https://github.com/rinogodson/react-bits-experience",
  },
  {
    img: "https://camo.githubusercontent.com/c7cd1dde873defe0cd0b35b95e374939d7b2a80b0cdf795365fb6a13f6c08ac3/68747470733a2f2f636c6f75642d64736a6438796a766a2d6861636b2d636c75622d626f742e76657263656c2e6170702f306c6f676f2e706e67",
    cover: false,
    title: "Pixelmoji - Make pixel art with emojis",
    description:
      "This is my personal portfolio website built with Next.js and Tailwind CSS.",
    link: "https://pixelmoji-six.vercel.app/",
    repo: "https://github.com/rinogodson/pixelmoji",
  },
  {
    img: "https://hc-cdn.hel1.your-objectstorage.com/s/v3/4b24568932034b2a629cffca1415abbd21417ddd_image.png",
    title: "Fake Update",
    description:
      "A fake update page that simulates a system update. It's a fun way to prank your friends or just to have a laugh.",
    link: "https://fake-update-pi.vercel.app",
    repo: "https://github.com/rinogodson/fake-update",
  },
];

export default function Projects() {
  return (
    <LayoutShell>
      <h1 className={"text-4xl font-bold mb-4 " + lora.className}>Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl p-4">
        {ProjectList.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
            image={project.img}
            repo={project.repo}
            cover={project.cover}
            bg={project.bg}
          />
        ))}
      </div>
    </LayoutShell>
  );
}

const ProjectCard = ({
  title,
  description,
  link,
  image = "https://placehold.co/600x400",
  repo,
  cover = true,
  bg,
}: {
  title: string;
  description: string;
  link?: string;
  image?: string;
  repo?: string;
  cover?: boolean;
  bg?: string;
}) => {
  return (
    <div className="bg-[#0e0e0e] h-fit border-1 border-[#2b2b2b] p-4 rounded-[2rem] shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        width={600}
        height={400}
        loading="lazy"
        style={{ backgroundColor: bg || "none" }}
        className={
          "overflow-hidden w-full h-48 rounded-[1rem] mb-4 " +
          (cover ? "object-cover " : "object-contain ")
        }
      />
      <h2 className={"text-xl font-semibold mb-2 " + ibmPlexSans.className}>
        {title}
      </h2>
      <div className="flex h-full flex-col justify-between">
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex gap-3">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#AFAFAF] hover:scale-105  border-1 border-[#AFAFAF] active:scale-95 active:bg-[#1a1a1a] hover:bg-[#1A1A1A] px-4 py-1 rounded-3xl transition-all duration-300"
            >
              Demo
            </a>
          )}
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#AFAFAF] hover:scale-105  border-1 border-[#AFAFAF] active:scale-95 active:bg-[#1a1a1a] hover:bg-[#1A1A1A] px-4 py-1 rounded-3xl transition-all duration-300"
          >
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};
