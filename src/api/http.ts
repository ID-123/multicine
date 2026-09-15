import { env } from '@/config/env'

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

export async function http<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await fetch(`${env.apiUrl}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
    signal: options.signal,
  })

  if (!response.ok) {
    throw new ApiError(
      response.status,
      (await response.text()) || 'No fue posible completar la solicitud.',
    )
  }

  return response.status === 204
    ? (undefined as T)
    : (response.json() as Promise<T>)
}
