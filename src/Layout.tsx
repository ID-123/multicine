import type { ReactNode } from "react";

type LayoutProps = { children: ReactNode };

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <header>
        <h1>Multicine</h1>
      </header>
      <main>{children}</main>
      <footer>Multicine</footer>
    </>
  );
}
