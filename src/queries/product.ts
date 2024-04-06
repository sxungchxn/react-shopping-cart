import { Product } from '@/types/api-type'
import { queryOptions } from '@tanstack/react-query'
import { request } from '@/utils/request'

export const QUERY_KEYS = {
  ALL: ['PRODUCTS'],
  LIST: () => [...QUERY_KEYS.ALL, 'LIST'],
  DETAIL: (id: number) => [...QUERY_KEYS.ALL, 'DETAIL', id],
}

export const productListOption = queryOptions({
  queryKey: QUERY_KEYS.LIST(),
  queryFn: () => request.get('products').json<Product[]>(),
})

export const productDetailOption = (id: number) =>
  queryOptions({
    queryKey: QUERY_KEYS.DETAIL(id),
    queryFn: () => request.get(`products/${id}`).json<Product>(),
  })
