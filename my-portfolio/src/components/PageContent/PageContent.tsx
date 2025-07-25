"use client";
function PageContent({children}: {children?: React.ReactNode}) {
  return (
    <div className="p-[2em] flex flex-col h-[calc(100vh_-_2em)] w-[100%] bg-[#1A1A1A] rounded-t-[3em] overflow-scroll no-scrollbar">
      {children}
    </div>
  );
}

export default PageContent;
