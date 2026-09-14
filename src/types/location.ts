export type Country = { id: string; name: string }
export type Department = { id: string; name: string; countryId: string }
export type City = { id: string; name: string; departmentId: string; active: boolean }
export type LocationSelection = { country: Country; department: Department; city: City }
