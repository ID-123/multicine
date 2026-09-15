import { useState } from 'react'
import { LocationModal, MovieCard, ErrorState, EmptyState } from '@/components'
import { useAsync } from '@/hooks'
import { getMovies } from '@/services'
import { useLocationStore } from '@/store'

export function HomePage() {
  const { location } = useLocationStore()
  const [locationOpen, setLocationOpen] = useState(!location)
  const { data: movies, loading, error, reload } = useAsync(getMovies, [])
  const [query, setQuery] = useState('')
  const filtered =
    movies?.filter((movie) =>
      `${movie.title} ${movie.genre}`
        .toLowerCase()
        .includes(query.toLowerCase()),
    ) ?? []
  return (
    <>
      <section className="hero">
        <div>
          <span className="eyebrow">Cartelera semanal</span>
          <h1>
            Tu próxima
            <br />
            <em>película</em> empieza aquí.
          </h1>
          <p>Explora funciones, formatos y horarios según tu ciudad.</p>
          <button
            className="button button-primary"
            onClick={() => setLocationOpen(true)}
          >
            ⌖ {location?.city.name ?? 'Elegir ubicación'}
          </button>
        </div>
        <div className="hero-orb" />
      </section>
      <section className="content-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Esta semana</span>
            <h2>En cartelera</h2>
          </div>
          <label className="search">
            <span>⌕</span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar película o género"
            />
          </label>
        </div>
        <div className="date-strip">
          {[
            'Hoy',
            'Mañana',
            'Mié 16',
            'Jue 17',
            'Vie 18',
            'Sáb 19',
            'Dom 20',
          ].map((date, i) => (
            <button key={date} className={i === 0 ? 'active' : ''}>
              {date}
            </button>
          ))}
        </div>
        {loading && (
          <div className="movie-grid">
            {[1, 2, 3].map((x) => (
              <div className="skeleton-card" key={x} />
            ))}
          </div>
        )}
        {error && <ErrorState message={error.message} onRetry={reload} />}
        {!loading && !error && filtered.length === 0 && (
          <EmptyState
            title="No encontramos películas"
            description="Prueba con otro título o género."
          />
        )}
        {!loading && !error && filtered.length > 0 && (
          <div className="movie-grid">
            {filtered.map((movie) => (
              <MovieCard movie={movie} key={movie.id} />
            ))}
          </div>
        )}
      </section>
      {locationOpen && (
        <LocationModal
          force={!location}
          onClose={() => setLocationOpen(false)}
        />
      )}
    </>
  )
}
