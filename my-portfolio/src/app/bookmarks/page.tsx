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
      <div className="flex flex-col gap-1 w-full max-w-6xl">
        <MarkItem />
        <MarkItem />
        <MarkItem />
        <MarkItem />
        <MarkItem />
      </div>
    </LayoutShell>
  );
};

export default Bookmarks;

const MarkItem = () => {
  return (
    <div className="flex items-center justify-between p-4 border-gray-200">
      <div className="flex flex-col bg-[#0a0a0a] w-full py-4 px-6 rounded-[1em]">
        <h2 className={"text-2xl font-semibold " + ibmPlexSans}>Bookmark Title</h2>
        <p className={"text-gray-600 text-xl " + ibmPlexSans.className}>Description of the bookmark.</p>
      </div>
    </div>
  );
}
