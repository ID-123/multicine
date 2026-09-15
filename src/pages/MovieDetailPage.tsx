import { Link, useParams } from 'react-router'
import { useAsync } from '@/hooks'
import { getMovie } from '@/services'
import { ErrorState, LoadingState } from '@/components'
export function MovieDetailPage() {
  const { id = '' } = useParams()
  const {
    data: movie,
    loading,
    error,
    reload,
  } = useAsync((signal) => getMovie(id, signal), [id])
  if (loading) return <LoadingState label="Cargando detalle..." />
  if (error || !movie)
    return (
      <ErrorState
        message={error?.message ?? 'Película no encontrada.'}
        onRetry={reload}
      />
    )
  return (
    <article className="detail">
      <div
        className="detail-banner"
        style={{
          backgroundImage: `linear-gradient(90deg, var(--bg) 5%, transparent 70%), url(${movie.banner})`,
        }}
      />
      <div className="detail-content">
        <img
          className="detail-poster"
          src={movie.poster}
          alt={`Póster de ${movie.title}`}
        />
        <div className="detail-info">
          <span className="eyebrow">
            {movie.releaseStatus} · ★ {movie.score}
          </span>
          <h1>{movie.title}</h1>
          <p className="lead">{movie.synopsis}</p>
          <div className="detail-meta">
            <span>{movie.genre}</span>
            <span>{movie.duration} min</span>
            <span>{movie.rating}</span>
            <span>{movie.language}</span>
          </div>
          <h3>Funciones</h3>
          <div className="showtimes">
            {movie.showtimes.map((time) => (
              <Link
                key={time}
                to={`/login?showtime=${time}`}
                className="button button-primary"
              >
                {time}
              </Link>
            ))}
          </div>
          <h3>Director y elenco</h3>
          <p>
            {movie.director} · {movie.cast.join(' · ')}
          </p>
        </div>
      </div>
    </article>
  )
}
