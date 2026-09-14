export const env = {
  apiUrl: import.meta.env.VITE_API_URL ?? 'http://localhost:3000/api/v1',
  useMockApi: import.meta.env.VITE_USE_MOCK_API !== 'false',
}
