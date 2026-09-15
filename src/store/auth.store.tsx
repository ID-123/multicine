import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import type { Session } from '@/types/auth'
import { login } from '@/services'
import {
  getStored,
  removeStored,
  setStored,
  storageKeys,
} from '@/utils/storage'

type AuthContextValue = {
  session: Session | null
  loginUser: (email: string, password: string) => Promise<void>
  logout: () => void
}
const AuthContext = createContext<AuthContextValue | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(() =>
    getStored<Session>(storageKeys.SESSION_KEY),
  )
  const value = useMemo(
    () => ({
      session,
      async loginUser(email: string, password: string) {
        const next = await login(email, password)
        setStored(storageKeys.SESSION_KEY, next)
        setSession(next)
      },
      logout() {
        removeStored(storageKeys.SESSION_KEY)
        setSession(null)
      },
    }),
    [session],
  )
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth debe utilizarse dentro de AuthProvider.')
  return value
}
