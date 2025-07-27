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

export default function Projects() {
  return (
    <LayoutShell>
        <h1 className={"text-4xl font-bold mb-4 " + lora.className}>
          Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl p-4">
          <ProjectCard
            title="Portfolio Website"
            description="A personal portfolio website showcasing my skills and projects."
            link=""
          />
          <ProjectCard
            title="Portfolio Website"
            description="A personal portfolio website showcasing my skills and projects."
            link=""
          />
          <ProjectCard
            title="Portfolio Website"
            description="A personal portfolio website showcasing my skills and projects."
            link=""
          />
        </div>
    </LayoutShell>
  );
}

const ProjectCard = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="bg-[#0e0e0e] border-1 border-[#2b2b2b] p-4 rounded-[2rem] shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        src="https://placehold.co/600x400"
        alt={title}
        width={600}
        height={400}
        loading="lazy"
        className="overflow-hidden w-full h-48 object-cover rounded-[1rem] mb-4"/>
      <h2 className={"text-xl font-semibold mb-2 " + ibmPlexSans.className}>
        {title}
      </h2>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex gap-3">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#AFAFAF] hover:scale-105  border-1 border-[#AFAFAF] active:scale-95 active:bg-[#1a1a1a] hover:bg-[#1A1A1A] px-4 py-1 rounded-3xl transition-all duration-300"
        >
          Demo
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#AFAFAF] hover:scale-105  border-1 border-[#AFAFAF] active:scale-95 active:bg-[#1a1a1a] hover:bg-[#1A1A1A] px-4 py-1 rounded-3xl transition-all duration-300"
        >
          Repo
        </a>
      </div>
    </div>
  );
};
