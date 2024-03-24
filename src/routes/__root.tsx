import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Flex } from '@sxungchxn/react-payments'

export const Route = createRootRoute({
  component: () => (
    <>
      <Flex gap="4px">
        <Link to="/">Home</Link> <Link to="/about">About</Link>
      </Flex>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
