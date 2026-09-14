import type { Session } from '@/types/auth'

const demoSession: Session = {
  user: { id: 'demo', name: 'Visitante demo', email: 'demo@multicine.local', role: 'user' },
  accessToken: 'demo-token',
}

export async function login(email: string, password: string): Promise<Session> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  if (!email || password.length < 4) throw new Error('Revisa tus credenciales.')
  return { ...demoSession, user: { ...demoSession.user, email } }
}
