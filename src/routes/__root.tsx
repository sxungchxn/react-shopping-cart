import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { Link, NavBar } from '@/components'
import { Flex, Text } from '@sxungchxn/react-payments'

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar>
        <Link to="/">
          <NavBar.Logo />
        </Link>
        <Flex gap="16px">
          <Link to="/cart">
            <Text variant="body1" color="white">
              장바구니
            </Text>
          </Link>
          <Link to="/order">
            <Text variant="body1" color="white">
              주문목록
            </Text>
          </Link>
        </Flex>
      </NavBar>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
})
