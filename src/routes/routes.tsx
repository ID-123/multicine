import { createBrowserRouter } from 'react-router'
import { PublicLayout, ProtectedLayout } from '@/layouts'
import {
  AccountPage,
  HomePage,
  LoginPage,
  MovieDetailPage,
  NotFoundPage,
  UpcomingPage,
} from '@/pages'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/movies/:id', element: <MovieDetailPage /> },
      { path: '/upcoming', element: <UpcomingPage /> },
      { path: '/login', element: <LoginPage /> },
      {
        element: <ProtectedLayout />,
        children: [{ path: '/account', element: <AccountPage /> }],
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])