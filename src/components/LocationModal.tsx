import { useEffect, useState } from 'react'
import { getCities, getCountries, getDepartments } from '@/services'
import type {
  City,
  Country,
  Department,
  LocationSelection,
} from '@/types/location'
import { useLocationStore } from '@/store'

export function LocationModal({
  force = false,
  onClose,
}: {
  force?: boolean
  onClose?: () => void
}) {
  const { setLocation } = useLocationStore()
  const [countries, setCountries] = useState<Country[]>([]),
    [departments, setDepartments] = useState<Department[]>([]),
    [cities, setCities] = useState<City[]>([])
  const [country, setCountry] = useState(''),
    [department, setDepartment] = useState(''),
    [city, setCity] = useState('')
  const [loading, setLoading] = useState(false),
    [error, setError] = useState('')

  useEffect(() => {
    getCountries()
      .then(setCountries)
      .catch(() => setError('No pudimos cargar los países.'))
  }, [])
  useEffect(() => {
    if (!country) {
      return
    }
    getDepartments(country)
      .then(setDepartments)
      .catch(() => setError('No pudimos cargar los departamentos.'))
  }, [country])
  useEffect(() => {
    if (!department) {
      return
    }
    getCities(department)
      .then(setCities)
      .catch(() => setError('No pudimos cargar las ciudades.'))
  }, [department])

  const submit = async () => {
    const selected = {
      country: countries.find((x) => x.id === country),
      department: departments.find((x) => x.id === department),
      city: cities.find((x) => x.id === city),
    }
    if (!selected.country || !selected.department || !selected.city) {
      setError('Selecciona país, departamento y ciudad.')
      return
    }
    setLoading(true)
    setError('')
    setLocation(selected as LocationSelection)
    setLoading(false)
    onClose?.()
  }

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-title"
    >
      <div className="modal">
        <div className="modal-head">
          <div>
            <span className="eyebrow">Tu cartelera</span>
            <h2 id="location-title">¿Dónde vas a ver cine?</h2>
          </div>
          {!force && (
            <button
              className="icon-button"
              onClick={onClose}
              aria-label="Cerrar"
            >
              ×
            </button>
          )}
        </div>
        <p className="muted">
          Elige tu ubicación para mostrar funciones disponibles.
        </p>
        <label>
          País
          <select
            value={country}
            onChange={(e) => {
              setCountry(e.target.value)
              setDepartment('')
              setDepartments([])
              setCity('')
              setCities([])
            }}
          >
            <option value="">Selecciona...</option>
            {countries.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Departamento
          <select
            value={department}
            disabled={!country}
            onChange={(e) => {
              setDepartment(e.target.value)
              setCity('')
              setCities([])
            }}
          >
            <option value="">Selecciona...</option>
            {departments.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Ciudad
          <select
            value={city}
            disabled={!department}
            onChange={(e) => setCity(e.target.value)}
          >
            <option value="">Selecciona...</option>
            {cities.map((x) => (
              <option key={x.id} value={x.id}>
                {x.name}
              </option>
            ))}
          </select>
        </label>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
        <button
          className="button button-primary full"
          disabled={loading}
          onClick={submit}
        >
          {loading ? 'Guardando...' : 'Confirmar ubicación'}
        </button>
      </div>
    </div>
  )
}
