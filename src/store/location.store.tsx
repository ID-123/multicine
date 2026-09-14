import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import type { LocationSelection } from '@/types/location'
import { getStored, removeStored, setStored, storageKeys } from '@/utils/storage'

type LocationContextValue = { location: LocationSelection | null; setLocation: (location: LocationSelection) => void; clearLocation: () => void }
const LocationContext = createContext<LocationContextValue | null>(null)

export function LocationProvider({ children }: { children: ReactNode }) {
  const [location, setLocationState] = useState<LocationSelection | null>(() => getStored<LocationSelection>(storageKeys.LOCATION_KEY))
  const value = useMemo(() => ({
    location,
    setLocation(next: LocationSelection) { setStored(storageKeys.LOCATION_KEY, next); setLocationState(next) },
    clearLocation() { removeStored(storageKeys.LOCATION_KEY); setLocationState(null) },
  }), [location])
  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>
}

export function useLocationStore() {
  const value = useContext(LocationContext)
  if (!value) throw new Error('useLocationStore debe utilizarse dentro de LocationProvider.')
  return value
}
