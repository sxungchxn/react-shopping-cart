import { flex, grid } from '@styled-system/patterns'
import { Link, createFileRoute } from '@tanstack/react-router'
import { ProductItem } from '@/components'
import { Suspense } from 'react'
import { useCreateCart } from '@/mutations/create-cart'
import { useInfiniteScrollableProductList } from '@/hooks/use-infinite-scrollable-product-list'

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
  const [observerRef, productList] = useInfiniteScrollableProductList()
  const { mutate: createCartRequest } = useCreateCart()

  return (
    <div className={flex({ flexDir: 'column', width: '100%', alignItems: 'center' })}>
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
          <ProductItem
            key={product.id}
            product={product}
            onClickCartButton={() => createCartRequest(product)}
            renderContent={props => (
              <Link
                to="/products/$productId"
                params={{
                  productId: props.product.id.toString(),
                }}
              >
                <ProductItem.Content {...props} />
              </Link>
            )}
          />
        ))}
        <div ref={observerRef} />
      </ul>
    </div>
  )
}
