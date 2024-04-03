import { Logo } from '@/components/atoms/logo/logo'
import { cartListOption } from '@/queries/cart'
import { css } from '@styled-system/css'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'
import { HTMLAttributes, Suspense } from 'react'

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
          <Suspense fallback={<span className={linkText}>장바구니</span>}>
            <CartLink />
          </Suspense>
          <Link to="/orders">
            <span className={linkText}>주문목록</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}

const CartLink = () => {
  const { data: cartList } = useSuspenseQuery(cartListOption)
  return (
    <Link to="/cart">
      <span className={linkText}>{`장바구니 (${cartList.length})`}</span>
    </Link>
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

const linkText = css({ textStyle: 'body1', color: 'white' })
