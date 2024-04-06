import { productDetailOption } from '@/queries/product'
import { Image, SquareButton } from '@/components'
import { flex } from '@styled-system/patterns'
import { useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { Suspense } from 'react'
import { css } from '@styled-system/css'
import { useCreateCart } from '@/mutations/cart'

export const Route = createFileRoute('/products/$productId')({
  component: () => (
    <Suspense>
      <ProductDetail />
    </Suspense>
  ),
})

function ProductDetail() {
  const { productId } = Route.useParams()
  const { data: product } = useSuspenseQuery(productDetailOption(Number(productId)))
  const { name, imageUrl, price } = product

  const { mutate: createCartRequest } = useCreateCart()

  const handleClickCartButton = () => {
    createCartRequest(product)
  }

  return (
    <div className={container}>
      <Image size="lg" src={imageUrl} alt={name} />
      <div className={css({ width: '100%' })}>
        <div className={productName}>
          <h2
            className={css({
              textStyle: 'heading1',
              marginBottom: '20px',
              paddingX: '36px',
              paddingBottom: '24px',
              borderBottom: '2px solid token(colors.brown)',
            })}
          >
            {name}
          </h2>
        </div>
        <div className={productPrice}>
          <span className={css({ textStyle: 'title1' })}>금액</span>
          <span className={css({ textStyle: 'title1' })}>{price.toLocaleString()}원</span>
        </div>
        <SquareButton color="secondary" onClick={handleClickCartButton}>
          <span className={css({ textStyle: 'heading2' })}>장바구니</span>
        </SquareButton>
      </div>
    </div>
  )
}

const container = css({
  display: 'flex',
  width: '100%',
  paddingX: '32px',
  alignItems: { base: 'center', xl: 'flex-start' },
  flexDir: { base: 'column', xl: 'row' },
  gap: { base: '32px', xl: '100px' },
})

const productName = css({ display: 'flex', flexDirection: 'column', width: '100%' })

const productPrice = flex({
  width: '100%',
  justifyContent: 'space-between',
  paddingX: '35px',
  marginBottom: '60px',
})
