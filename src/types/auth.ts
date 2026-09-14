export type UserRole = 'user' | 'admin'
export type User = { id: string; name: string; email: string; role: UserRole }
export type Session = { user: User; accessToken: string }
