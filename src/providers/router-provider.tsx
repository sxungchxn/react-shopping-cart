import { RouterProvider as TanstackRouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from '@/routeTree.gen'
import { ComponentProps } from 'react'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const RouterProvider = (
  props: Omit<ComponentProps<typeof TanstackRouterProvider>, 'router'>,
) => {
  return <TanstackRouterProvider {...props} router={router} />
}
