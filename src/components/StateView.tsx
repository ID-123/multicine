export function LoadingState({ label = 'Cargando...' }: { label?: string }) {
  return (
    <div className="state-card" role="status">
      <span className="spinner" />
      {label}
    </div>
  )
}
export function EmptyState({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="state-card">
      <strong>{title}</strong>
      {description && <span>{description}</span>}
    </div>
  )
}
export function ErrorState({
  message = 'No pudimos cargar la información.',
  onRetry,
}: {
  message?: string
  onRetry?: () => void
}) {
  return (
    <div className="state-card state-error" role="alert">
      <strong>Algo salió mal</strong>
      <span>{message}</span>
      {onRetry && (
        <button className="button button-secondary" onClick={onRetry}>
          Reintentar
        </button>
      )}
    </div>
  )
}
