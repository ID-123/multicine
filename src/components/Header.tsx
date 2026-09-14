import { Link } from 'react-router'
import { ThemeToggle } from './ThemeToggle'
import { useAuth, useLocationStore } from '@/store'

export function Header() {
  const { session, logout } = useAuth()
  const { location } = useLocationStore()
  return <header className="header">
    <Link to="/" className="brand"><span className="brand-mark">M</span> MULTICINE</Link>
    <nav className="nav-links" aria-label="Navegación principal">
      <Link to="/">Cartelera</Link><Link to="/upcoming">Próximamente</Link>{session && <Link to="/account">Mi cuenta</Link>}
    </nav>
    <div className="header-actions"><span className="location-pill">⌖ {location?.city.name ?? 'Elegir ciudad'}</span><ThemeToggle />{session ? <button className="button button-small" onClick={logout}>Salir</button> : <Link className="button button-small" to="/login">Ingresar</Link>}</div>
  </header>
}
