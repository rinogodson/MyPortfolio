import PageContent from "@/components/PageContent/PageContent";
import { NavigationList } from "@/components/NavigationList/NavigationList";
import { useLayoutContent } from "@/contexts/LayoutContentContext";
import { memo } from "react";

function LayoutDesktop() {
  const content = useLayoutContent();
  return (
    <div className="h-screen w-screen grid grid-cols-[1fr_60vw_1fr] place-items-end overflow-hidden">
      <div></div>
      <PageContent>{content}</PageContent>
      <NavigationList />
    </div>
  );
}

export default memo(LayoutDesktop);
