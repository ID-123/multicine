import { env } from '@/config/env'
import { http } from '@/api'
import type { City, Country, Department } from '@/types/location'

const countries: Country[] = [{ id: 'co', name: 'Colombia' }]
const departments: Department[] = [{ id: 'atl', name: 'Atlántico', countryId: 'co' }, { id: 'ant', name: 'Antioquia', countryId: 'co' }]
const cities: City[] = [
  { id: 'baq', name: 'Barranquilla', departmentId: 'atl', active: true },
  { id: 'med', name: 'Medellín', departmentId: 'ant', active: true },
]

export async function getCountries(): Promise<Country[]> {
  return env.useMockApi ? countries : http('/countries')
}
export async function getDepartments(countryId: string): Promise<Department[]> {
  return env.useMockApi ? departments.filter((item) => item.countryId === countryId) : http(`/departments/${countryId}`)
}
export async function getCities(departmentId: string): Promise<City[]> {
  return env.useMockApi ? cities.filter((item) => item.departmentId === departmentId && item.active) : http(`/cities/${departmentId}`)
}
