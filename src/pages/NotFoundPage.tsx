import { Link } from 'react-router'
export function NotFoundPage() {
  return (
    <section className="empty-page">
      <span className="eyebrow">404</span>
      <h1>Esta sala no existe.</h1>
      <p>La ruta que buscas no está disponible.</p>
      <Link to="/" className="button button-primary">
        Volver a cartelera
      </Link>
    </section>
  )
}
