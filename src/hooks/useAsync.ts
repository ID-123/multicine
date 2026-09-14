import { useCallback, useEffect, useState, type DependencyList } from 'react'

export function useAsync<T>(loader: (signal: AbortSignal) => Promise<T>, deps: DependencyList = []) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const reload = useCallback(() => {
    const controller = new AbortController()
    setLoading(true)
    setError(null)
    loader(controller.signal).then(setData).catch((reason: unknown) => {
      if (!controller.signal.aborted) setError(reason instanceof Error ? reason : new Error('Error inesperado.'))
    }).finally(() => { if (!controller.signal.aborted) setLoading(false) })
    return () => controller.abort()
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => reload(), [reload])
  return { data, loading, error, reload }
}
