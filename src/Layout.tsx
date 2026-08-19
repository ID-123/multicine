import { Outlet } from "react-router";
import { Navbar } from "./components/layout/Navbar/Navbar";

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-blue-50">
      <Navbar />
      <Outlet />
    </div>
  );
}
