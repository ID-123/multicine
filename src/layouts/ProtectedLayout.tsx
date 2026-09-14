import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '@/store'
export function ProtectedLayout() { const { session } = useAuth(); const location = useLocation(); return session ? <Outlet /> : <Navigate to="/login" replace state={{ from: location.pathname }} /> }
