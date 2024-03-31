import { productDetailOption } from '@/queries'
import { Image, SquareButton } from '@/components'
import { flex, vstack } from '@styled-system/patterns'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { css } from '@styled-system/css'

export const Route = createFileRoute('/products/$productId')({
  component: () => (
    <Suspense>
      <ProductDetail />
    </Suspense>
  ),
})

function ProductDetail() {
  const { productId } = Route.useParams()
  const {
    data: { name, imageUrl, price },
  } = useSuspenseQuery(productDetailOption(Number(productId)))

  return (
    <div
      className={vstack({
        width: '640px',
        gap: '0px',
      })}
    >
      <Image
        size="lg"
        src={imageUrl}
        alt={name}
        className={css({
          marginBottom: '20px',
        })}
      />
      <h2 className={css({ textStyle: 'heading1', marginBottom: '20px' })}>{name}</h2>
      <div
        className={css({
          width: '100%',
          height: '2px',
          backgroundColor: 'brown',
          marginBottom: '30px',
        })}
      />
      <div
        className={flex({
          width: '100%',
          justifyContent: 'space-between',
          paddingX: '35px',
          marginBottom: '60px',
        })}
      >
        <span className={css({ textStyle: 'body1' })}>금액</span>
        <span className={css({ textStyle: 'body1' })}>{price}원</span>
      </div>
      <SquareButton color="secondary">
        <span className={css({ textStyle: 'heading2' })}>장바구니</span>
      </SquareButton>
    </div>
  )
}
