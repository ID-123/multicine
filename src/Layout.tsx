import type { ReactNode } from "react";
import { Navbar } from "./components/layout/Navbar/Navbar";

type LayoutProps = { children: ReactNode };

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>Multicine</footer>
    </>
  );
}
