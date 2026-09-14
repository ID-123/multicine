import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { App } from '@/App'
import { AuthProvider, LocationProvider } from '@/store'
import { ErrorBoundary } from '@/components'
import '@/styles/index.css'

createRoot(document.getElementById('root')!).render(<StrictMode><ErrorBoundary><BrowserRouter><AuthProvider><LocationProvider><App /></LocationProvider></AuthProvider></BrowserRouter></ErrorBoundary></StrictMode>)
