import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '@/App'
import { AuthProvider, LocationProvider } from '@/store'
import { ErrorBoundary } from '@/components'
import '@/styles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider>
        <LocationProvider>
          <App />
        </LocationProvider>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
)
