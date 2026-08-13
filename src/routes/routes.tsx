import DashboardPage from "@/pages/DashboardPage/DashboardPage";
import { HomePage } from "@/pages/HomePage/HomePage";
import LoginPage from "@/pages/LoginPage/LoginPage";
import { Route, Routes } from "react-router";
import { Layout } from "@/Layout";

export function AppRouter() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />

      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}
