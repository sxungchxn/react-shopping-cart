import { css } from '@styled-system/css'
import { NavBar } from '@/components'
import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <div className={css({ display: 'flex', flexDirection: 'column', height: '100%' })}>
      <NavBar />
      <main
        className={css({
          display: 'flex',
          justifyContent: 'center',
          flexGrow: 1,
          width: '100%',
          paddingY: '60px',
        })}
      >
        <Outlet />
      </main>
      <TanStackRouterDevtools position="bottom-right" />
    </div>
  ),
})
