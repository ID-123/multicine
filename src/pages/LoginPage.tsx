import { useState, type FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '@/store'
export function LoginPage() {
  const { loginUser } = useAuth(); const navigate = useNavigate(); const location = useLocation(); const from = (location.state as { from?: string } | null)?.from ?? '/account'
  const [email, setEmail] = useState('demo@multicine.local'), [password, setPassword] = useState('demo1234'), [error, setError] = useState(''), [loading, setLoading] = useState(false)
  async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setLoading(true); setError(''); try { await loginUser(email, password); navigate(from, { replace: true }) } catch (reason) { setError(reason instanceof Error ? reason.message : 'No fue posible iniciar sesión.') } finally { setLoading(false) } }
  return <section className="auth-page"><div className="auth-card"><span className="eyebrow">Acceso</span><h1>Bienvenido de vuelta.</h1><p className="muted">Usa cualquier correo y una contraseña de 4+ caracteres en este MVP.</p><form onSubmit={submit}><label>Correo<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required /></label><label>Contraseña<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={4} /></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-primary full" disabled={loading}>{loading ? 'Ingresando...' : 'Iniciar sesión'}</button></form></div></section>
}
