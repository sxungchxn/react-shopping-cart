export async function startMocking() {
  if (import.meta.env.MODE !== 'development') return
  const { worker } = await import('./browser.ts')
  return worker.start()
}
