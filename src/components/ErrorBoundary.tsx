import { Component, type ErrorInfo, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }
  static getDerivedStateFromError(): State {
    return { hasError: true }
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Error de renderizado en Multicine', error, info)
  }
  render() {
    if (!this.state.hasError) return this.props.children
    return (
      <main className="empty-page">
        <span className="eyebrow">Error</span>
        <h1>Algo salió mal.</h1>
        <p>La aplicación encontró un problema inesperado.</p>
        <button
          className="button button-primary"
          onClick={() => window.location.reload()}
        >
          Recargar aplicación
        </button>
      </main>
    )
  }
}
