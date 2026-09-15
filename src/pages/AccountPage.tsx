import { useAuth } from '@/store'
export function AccountPage() {
  const { session } = useAuth()
  return (
    <section className="content-section account">
      <span className="eyebrow">Mi cuenta</span>
      <h1>Hola, {session?.user.name}.</h1>
      <div className="account-grid">
        <div>
          <span className="muted">Correo</span>
          <strong>{session?.user.email}</strong>
        </div>
        <div>
          <span className="muted">Membresía</span>
          <strong>Explorador · MVP</strong>
        </div>
        <div>
          <span className="muted">Beneficios</span>
          <strong>Próximamente</strong>
        </div>
      </div>
    </section>
  )
}
