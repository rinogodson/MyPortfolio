"use client";

import React, { createContext, useContext, useState } from "react";

const LayoutContentContext = createContext<React.ReactNode>(null as any);

export function LayoutContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = useState<React.ReactNode>(null);

  return (
    <LayoutContentContext.Provider value={{ content, setContent }}>
      {children}
    </LayoutContentContext.Provider>
  );
}

export const useLayoutContent = () => {
  return useContext(LayoutContentContext).content;
};

export const useSetLayoutContent = () => {
  return useContext(LayoutContentContext).setContent;
};
