import {
  createBrowserRouter,
  redirect,
  type ActionFunctionArgs,
} from "react-router";

import { createSession, hasSession, destroySession } from "@/auth/auth";
import { DashboardPage } from "@/pages/DashboardPage/DashboardPage";
import { HomePage } from "@/pages/HomePage/HomePage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { Layout } from "@/Layout";

export async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("email");
  const password = formData.get("password");

  const validEmail = "admin@multicine.com";
  const validPassword = "123456";

  if (email !== validEmail || password !== validPassword) {
    return {
      error: "Credenciales incorrectas",
    };
  }

  createSession();

  return redirect("/dashboard");
}

function dashboardLoader() {
  if (!hasSession()) {
    return redirect("/login");
  }

  return null;
}

export async function logoutAction() {
  destroySession();

  return redirect("/login");
}

export const AppRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    action: loginAction,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    loader: dashboardLoader,
  },
  {
    path: "/logout",
    action: logoutAction,
  }
]);
