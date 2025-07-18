import { NavigationList } from "@/components/NavigationList/NavigationList";
import PageContent from "@/components/PageContent/PageContent";
import About from "@/pages/About";
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

export const LayoutDesktop = () => {
  return (
    <div className="h-screen w-screen grid grid-cols-[1fr_60vw_1fr] place-items-end overflow-hidden">
      <div></div>
      <PageContent>
        <About lora={lora} ibmPlexSans={ibmPlexSans} />
      </PageContent>
      <NavigationList />
    </div>
  );
};
