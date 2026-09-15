import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem('multicine:theme') === 'dark',
  )
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('multicine:theme', dark ? 'dark' : 'light')
  }, [dark])
  return (
    <button
      className="icon-button"
      onClick={() => setDark((value) => !value)}
      aria-label={dark ? 'Activar modo claro' : 'Activar modo oscuro'}
    >
      {dark ? '☼' : '◐'}
    </button>
  )
}
