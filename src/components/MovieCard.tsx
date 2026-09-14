import { Link } from 'react-router'
import type { Movie } from '@/types/movie'

export function MovieCard({ movie }: { movie: Movie }) {
  return <article className="movie-card">
    <img src={movie.poster} alt={`Póster de ${movie.title}`} loading="lazy" />
    <div className="movie-card-body">
      <div className="eyebrow"><span>{movie.releaseStatus}</span><span>★ {movie.score}</span></div>
      <h2>{movie.title}</h2><p>{movie.genre} · {movie.duration} min · {movie.rating}</p>
      <div className="chips">{movie.formats.map((format) => <span key={format}>{format}</span>)}</div>
      <div className="showtimes" aria-label={`Horarios de ${movie.title}`}>{movie.showtimes.map((time) => <button key={time}>{time}</button>)}</div>
      <Link className="text-link" to={`/movies/${movie.id}`}>Ver detalle →</Link>
    </div>
  </article>
}
