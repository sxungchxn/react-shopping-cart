import { cartListOption } from '@/queries/cart'
import { Image } from '@/components'
import { flex } from '@styled-system/patterns'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { css } from '@styled-system/css'

export const Route = createFileRoute('/cart')({
  component: Cart,
})

function Cart() {
  return (
    <div>
      <Suspense fallback={<div>cart loading...</div>}>
        <CartList />
      </Suspense>
    </div>
  )
}

const CartList = () => {
  const { data: cartList } = useSuspenseQuery(cartListOption)
  return (
    <div>
      <h1 className={css({ textStyle: 'body1', marginBottom: '12px' })}>
        장바구니 페이지는 step2에서 열심히 하겠슴다!
      </h1>
      {cartList.map(cart => (
        <div
          key={cart.id}
          className={flex({ alignItems: 'center', gap: '20px', marginBottom: '40px' })}
        >
          <Image src={cart.imageUrl} size="sm" />
          <div>{cart.name}</div>
          <div>{cart.quantity}개</div>
        </div>
      ))}
    </div>
  )
}
