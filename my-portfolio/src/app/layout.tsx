import "./globals.css";
import { headers } from "next/headers";
import dynamic from "next/dynamic";

const LayoutDesktop = dynamic(() => import("@/layouts/LayoutDesktop"), {
  ssr: false,
});
const LayoutMobile = dynamic(() => import("@/layouts/LayoutMobile"), {
  ssr: false,
});

function useIsDesktop(userAgent: string): "desktop" | "mobile" | null {
  return !/Mobi|Android|iPhone|iPad|iPod/i.test(userAgent)
    ? "desktop"
    : "mobile";
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userAgent = headers().get("user-agent") || "";
  const isDesktop = useIsDesktop(userAgent);
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Developer Portfolio of Rino Godson" />
        <title>Rino Godson | Developer Portfolio</title>{" "}
        <meta name="author" content="Rino Godson" />
        <meta title="Rino Godson | Developer Portfolio" />
      </head>
      <body className={`overflow-hidden antialiased bg-black text-white `}>
        <div className="flex flex-col h-screen">
          <div className="flex-1 overflow-hidden">
            {isDesktop === "desktop" ? (
              <LayoutDesktop>{children}</LayoutDesktop>
            ) : isDesktop === "mobile" ? (
              <LayoutMobile>{children}</LayoutMobile>
            ) : null}
          </div>
        </div>
      </body>
    </html>
  );
}
