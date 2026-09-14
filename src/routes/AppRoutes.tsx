import { Routes, Route } from 'react-router'
import { PublicLayout, ProtectedLayout } from '@/layouts'
import { AccountPage, HomePage, LoginPage, MovieDetailPage, NotFoundPage, UpcomingPage } from '@/pages'
export function AppRoutes() { return <Routes><Route element={<PublicLayout />}><Route path="/" element={<HomePage />} /><Route path="/movies/:id" element={<MovieDetailPage />} /><Route path="/upcoming" element={<UpcomingPage />} /><Route path="/login" element={<LoginPage />} /><Route element={<ProtectedLayout />}><Route path="/account" element={<AccountPage />} /></Route><Route path="*" element={<NotFoundPage />} /></Route></Routes> }
