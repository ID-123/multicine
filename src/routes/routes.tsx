import { DashboardPage } from "@/pages/DashboardPage/DashboardPage";
import { HomePage } from "@/pages/HomePage/HomePage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { Navigate, Route, Routes } from "react-router";
import { Layout } from "@/Layout";

type AppRouterProps = { isAuthenticated: boolean };

export function AppRouter({ isAuthenticated }: AppRouterProps) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
      </Route>

      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/dashboard"
        element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}
