import { css } from '@styled-system/css'
import { IconShoppingCart } from '@tabler/icons-react'
import { ForwardedRef, HTMLAttributes, forwardRef } from 'react'

export interface NavBarProps extends HTMLAttributes<HTMLElement> {}

export const NavBar = ({ children, ...props }: NavBarProps) => {
  return (
    <nav {...props} className={container}>
      <div className={wrapper}>{children}</div>
    </nav>
  )
}

const container = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'aqua.light',
  paddingX: '24px',
  paddingY: '12px',
  boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;',
})

const wrapper = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: '1200px',
})

export interface NavBarLogoProps extends HTMLAttributes<HTMLDivElement> {}

export const NavBarLogo = forwardRef(
  (props: NavBarLogoProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div
        className={css({
          display: 'flex',
          gap: '4px',
          alignItems: 'center',
          paddingX: '12px',
        })}
        ref={ref}
        {...props}
      >
        <IconShoppingCart size={36} color="white" />
        <h1
          className={css({
            textStyle: 'heading1',
            color: 'white',
          })}
        >
          NEXTSTEP
        </h1>
      </div>
    )
  },
)
