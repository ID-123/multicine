import {
  createBrowserRouter,
  redirect,
  type ActionFunctionArgs,
} from "react-router";

import { DashboardPage } from "@/pages/DashboardPage/DashboardPage";
import { HomePage } from "@/pages/HomePage/HomePage";
import { LoginPage } from "@/pages/LoginPage/LoginPage";
import { Layout } from "@/Layout";

export async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(email, password);
  return redirect("/dashboard");
}

export const router = createBrowserRouter([
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
  },
]);
