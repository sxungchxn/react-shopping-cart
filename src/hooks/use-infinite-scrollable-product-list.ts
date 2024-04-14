import { productListOption } from '@/queries/product'
import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { useIntersectionObserver } from './use-intersection-observer'
import { useMemo } from 'react'

export const useInfiniteScrollableProductList = (offsetSize = 6) => {
  const { data, isFetching, hasNextPage, fetchNextPage } = useSuspenseInfiniteQuery(
    productListOption(offsetSize),
  )

  const ref = useIntersectionObserver({
    onIntersect: () => {
      if (hasNextPage && !isFetching) {
        void fetchNextPage()
      }
    },
  })

  const productList = useMemo(
    () => (data ? data.pages.flatMap(({ products }) => products) : []),
    [data],
  )

  return [ref, productList] as const
}
