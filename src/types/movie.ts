export type Movie = {
  id: string
  title: string
  genre: string
  rating: string
  duration: number
  director: string
  language: string
  dubbed: boolean
  formats: string[]
  showtimes: string[]
  score: number
  releaseStatus: 'Estreno' | 'En cartelera'
  poster: string
  banner: string
  synopsis: string
  cast: string[]
}
