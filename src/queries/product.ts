import { Product } from '@/types/api-type'
import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query'
import { request } from '@/utils/request'

export const QUERY_KEYS = {
  ALL: ['PRODUCTS'],
  LIST: () => [...QUERY_KEYS.ALL, 'LIST'],
  DETAIL: (id: number) => [...QUERY_KEYS.ALL, 'DETAIL', id],
}

export const productListOption = (offsetSize = 8) =>
  infiniteQueryOptions({
    queryKey: QUERY_KEYS.LIST(),
    queryFn: ({ pageParam: { limit, offset } }) =>
      request
        .get('products', {
          searchParams: {
            limit,
            offset,
          },
        })
        .json<{ products: Product[]; totalSize: number }>(),
    initialPageParam: {
      limit: offsetSize,
      offset: 0,
    },
    getNextPageParam: (lastPage, _, { limit: lastLimit, offset: lastOffset }) => {
      if (lastPage.totalSize > lastOffset)
        return { limit: lastLimit, offset: lastOffset + offsetSize }
      return null
    },
  })

export const productDetailOption = (id: number) =>
  queryOptions({
    queryKey: QUERY_KEYS.DETAIL(id),
    queryFn: () => request.get(`products/${id}`).json<Product>(),
  })
