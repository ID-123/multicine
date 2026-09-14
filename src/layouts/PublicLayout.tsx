import { Outlet } from 'react-router'
import { Header } from '@/components'
export function PublicLayout() { return <div className="app-shell"><Header /><main><Outlet /></main><footer>Multicine · MVP de portafolio · React + TypeScript</footer></div> }
