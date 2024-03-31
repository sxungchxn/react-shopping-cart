import '@/styles/index.css'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { RouterProvider } from '@/providers/router-provider'
import { QueryProvider } from '@/providers/query-provider'
import { startMocking } from '@/mocks/starter'

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  void startMocking().then(() =>
    root.render(
      <StrictMode>
        <QueryProvider>
          <RouterProvider />
          <ReactQueryDevtools position="bottom" />
        </QueryProvider>
      </StrictMode>,
    ),
  )
}
