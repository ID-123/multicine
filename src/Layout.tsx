import { Outlet } from "react-router";
import { Navbar } from "./components/layout/Navbar/Navbar";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <Outlet />
    </div>
  );
}
