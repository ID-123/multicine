import { env } from '@/config/env'
import { http } from '@/api'
import type { Movie } from '@/types/movie'

const mockMovies: Movie[] = [
  {
    id: '1',
    title: 'Neon Horizon',
    genre: 'Ciencia ficción',
    rating: '12+',
    duration: 128,
    director: 'Mara Voss',
    language: 'Español',
    dubbed: true,
    formats: ['2D', 'IMAX'],
    showtimes: ['14:20', '17:10', '20:30'],
    score: 4.8,
    releaseStatus: 'Estreno',
    poster:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=700&q=80',
    banner:
      'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1600&q=80',
    synopsis:
      'Una piloto descubre una señal que podría cambiar el destino de las colonias humanas.',
    cast: ['Ari Vega', 'Noah Reed', 'Lena Cruz'],
  },
  {
    id: '2',
    title: 'Crimson Night',
    genre: 'Thriller',
    rating: '15+',
    duration: 112,
    director: 'Damián Cruz',
    language: 'Inglés',
    dubbed: false,
    formats: ['2D', '4DX'],
    showtimes: ['15:40', '18:50', '21:40'],
    score: 4.5,
    releaseStatus: 'En cartelera',
    poster:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80',
    banner:
      'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=80',
    synopsis:
      'Una detective sigue una cadena de mensajes que aparece únicamente después del anochecer.',
    cast: ['Eva Stone', 'Mateo Hall', 'Ruth Kim'],
  },
  {
    id: '3',
    title: 'Orbit Kids',
    genre: 'Aventura',
    rating: 'TP',
    duration: 96,
    director: 'Sofia Park',
    language: 'Español',
    dubbed: true,
    formats: ['2D'],
    showtimes: ['11:20', '13:50', '16:10'],
    score: 4.2,
    releaseStatus: 'En cartelera',
    poster:
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=700&q=80',
    banner:
      'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?auto=format&fit=crop&w=1600&q=80',
    synopsis:
      'Tres amigos construyen un pequeño satélite para encontrar a su mascota perdida.',
    cast: ['Iris Lee', 'Tomás Díaz', 'Milo Chen'],
  },
]

export async function getMovies(signal?: AbortSignal): Promise<Movie[]> {
  if (env.useMockApi)
    return new Promise((resolve) => setTimeout(() => resolve(mockMovies), 450))
  return http<Movie[]>('/movies', { signal })
}

export async function getMovie(
  id: string,
  signal?: AbortSignal,
): Promise<Movie> {
  if (env.useMockApi) {
    const movie = mockMovies.find((item) => item.id === id)
    if (!movie) throw new Error('Película no encontrada.')
    return movie
  }
  return http<Movie>(`/movies/${id}`, { signal })
}
