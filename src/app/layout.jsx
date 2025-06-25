import { Abril_Fatface, Inter, Roboto } from "next/font/google";
import "./globals.css";
import CursorVariantProvider from "./Contexts/CursorVariantContext";
import Cursor from "@/app/Components/Cursor";
import { cn } from "@/lib/utils";
import PageRevealer from "./Components/PageRevealer";

const font = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Prajal Maharjan - Software Developer",
  description: "Prajal Maharjan's Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          font.className,
          "relative mx-auto h-full w-full bg-white text-black dark:bg-black dark:text-white",
        )}
      >
        <PageRevealer />
        <CursorVariantProvider>
          <Cursor />
          <div className="flex flex-col items-center justify-between">
            {children}
          </div>
        </CursorVariantProvider>
      </body>
    </html>
  );
}
