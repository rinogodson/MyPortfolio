import PageContent from "@/components/PageContent/PageContent";
import { NavigationList } from "@/components/NavigationList/NavigationList";
import { memo } from "react";

function LayoutDesktop({ children }: { children?: React.ReactNode }) {
  return (
    <div className="h-screen w-screen grid grid-cols-[1fr_60vw_1fr] place-items-end overflow-hidden">
      <div></div>
      <PageContent>{children}</PageContent>
      <NavigationList />
    </div>
  );
}

export default memo(LayoutDesktop);
