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

const Bookmarks = () => {
  return (
    <LayoutShell>
      <h1 className={"text-4xl font-bold mb-4 " + lora.className}>Bookmarks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl p-4">
        dj
      </div>
    </LayoutShell>
  );
};

export default Bookmarks;
