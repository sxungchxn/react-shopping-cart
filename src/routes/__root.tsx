import { css } from '@styled-system/css'
import { NavBar } from '@/components'
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar>
        <Link to="/">
          <NavBar.Logo />
        </Link>
        <div
          className={css({
            display: 'flex',
            gap: '16px',
          })}
        >
          <Link to="/cart">
            <span className={css({ textStyle: 'body1', color: 'white' })}>장바구니</span>
          </Link>
          <Link to="/order">
            <span className={css({ textStyle: 'body1', color: 'white' })}>주문목록</span>
          </Link>
        </div>
      </NavBar>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
    </>
  ),
})
