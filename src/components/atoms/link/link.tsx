import { Link as RouterLink } from '@tanstack/react-router'
import { ComponentProps, ForwardedRef, forwardRef } from 'react'

type LinkProps = ComponentProps<typeof RouterLink>

export const Link = forwardRef(
  ({ activeProps, inactiveProps, ...props }: LinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
    return (
      <RouterLink
        {...props}
        ref={ref}
        inactiveProps={{
          ...inactiveProps,
          style: {
            textDecoration: 'none',
          },
        }}
        activeProps={{
          ...activeProps,
          style: {
            textDecoration: 'none',
          },
        }}
      />
    )
  },
)
