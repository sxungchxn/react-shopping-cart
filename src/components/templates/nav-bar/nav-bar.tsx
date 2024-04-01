import { Logo } from '@/components/atoms/logo/logo'
import { css } from '@styled-system/css'
import { Link } from '@tanstack/react-router'
import { HTMLAttributes } from 'react'

export interface NavBarProps extends HTMLAttributes<HTMLElement> {}

export const NavBar = (props: NavBarProps) => {
  return (
    <nav {...props} className={container}>
      <div className={wrapper}>
        <Link to="/">
          <Logo />
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
          <Link to="/orders">
            <span className={css({ textStyle: 'body1', color: 'white' })}>주문목록</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

const container = css({
  position: 'fixed',
  width: '100%',
  top: 0,
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
