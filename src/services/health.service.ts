import { env } from '@/config/env'
import { http } from '@/api'

type HealthResponse = { status: string }

export async function getHealth(): Promise<HealthResponse> {
  if (env.useMockApi) return { status: 'ok' }
  return http<HealthResponse>('/health')
}
