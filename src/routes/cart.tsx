import { cartListOption } from '@/queries/cart'
import { CheckBox, SquareButton } from '@/components'
import { flex } from '@styled-system/patterns'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { css } from '@styled-system/css'
import { CartSelectList } from '@/components/templates/cart-select-list/cart-select-list'
import { TotalPricePanel } from '@/components/templates/total-price-panel/total-price-panel'

export const Route = createFileRoute('/cart')({
  component: Cart,
})

function Cart() {
  return (
    <div className={css({ width: '100%' })}>
      <h1
        className={css({
          width: '100%',
          textAlign: 'center',
          paddingBottom: '20px',
          borderBottom: '3px solid token(colors.black)',
          textStyle: 'heading1',
        })}
      >
        장바구니
      </h1>
      <Suspense fallback={<div>loading...</div>}>
        <CartList />
      </Suspense>
    </div>
  )
}

const CartList = () => {
  const { data: cartList } = useSuspenseQuery(cartListOption)
  return (
    <div
      className={flex({
        paddingY: '40px',
        paddingX: '20px',
        flexDir: {
          lg: 'row',
          base: 'column-reverse',
        },
        gap: {
          xl: '80px',
          base: '40px',
        },
      })}
    >
      <div className={css({ flexGrow: 1 })}>
        <div
          className={flex({
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '36px',
          })}
        >
          <div className={flex({ gap: '16px', alignItems: 'center' })}>
            <CheckBox />
            <label>선택해제</label>
          </div>
          <SquareButton color="whiteGray" fullWidth={false} size="sm">
            상품삭제
          </SquareButton>
        </div>
        <CartSelectList cartList={cartList} />
      </div>
      <TotalPricePanel />
    </div>
  )
}
