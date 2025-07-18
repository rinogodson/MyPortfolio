import About from "@/pages/About";

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
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-screen w-screen flex">
      <div className="p-[1em] flex flex-col h-[100vh] w-[100%] bg-[#1A1A1A] overflow-scroll">
        <About lora={lora} ibmPlexSans={ibmPlexSans} />
      </div>
      <div className="h-screen w-10 ">
        {

        }
      </div>
    </div>
  );
}

export default LayoutMobile;
