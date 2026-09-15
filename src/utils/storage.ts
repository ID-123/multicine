const LOCATION_KEY = 'multicine:location'
const SESSION_KEY = 'multicine:session'

export function getStored<T>(key: string): T | null {
  try {
    return JSON.parse(localStorage.getItem(key) ?? 'null') as T | null
  } catch {
    return null
  }
}
export function setStored<T>(key: string, value: T): void {
  localStorage.setItem(key, JSON.stringify(value))
}
export function removeStored(key: string): void {
  localStorage.removeItem(key)
}
export const storageKeys = { LOCATION_KEY, SESSION_KEY }
