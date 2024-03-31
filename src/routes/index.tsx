import { flex, grid } from '@styled-system/patterns'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Link, createFileRoute } from '@tanstack/react-router'
import { productListOption } from '@/queries'
import { ProductItem } from '@/components'
import { Suspense } from 'react'

export const Route = createFileRoute('/')({
  component: Product,
})

function Product() {
  return (
    <div
      className={flex({
        justifyContent: 'center',
        width: '100%',
      })}
    >
      <Suspense>
        <ProductList />
      </Suspense>
    </div>
  )
}

const ProductList = () => {
  const { data: productList } = useSuspenseQuery(productListOption)

  return (
    <ul
      className={grid({
        rowGap: '20px',
        columnGap: '20px',
        columns: {
          xl: 4,
          md: 3,
          sm: 2,
          base: 1,
        },
      })}
    >
      {productList?.map(product => (
        <Link
          to="/products/$productId"
          params={{
            productId: product.id.toString(),
          }}
        >
          <ProductItem key={product.id} product={product} />
        </Link>
      ))}
    </ul>
  )
}
