import { Order } from '@/types/api-type'
import { request } from '@/utils/request'
import { queryOptions } from '@tanstack/react-query'

export const QUERY_KEYS = {
  ALL: ['ORDER'],
  LIST: () => [...QUERY_KEYS.ALL, 'LIST'],
  DETAIL: (id: number) => [...QUERY_KEYS.ALL, 'DETAIL', id],
}

export const orderListOption = queryOptions({
  queryKey: QUERY_KEYS.LIST(),
  queryFn: () => request.get('orders').json<Order[]>(),
})

export const orderDetailOption = (orderId: number) =>
  queryOptions({
    queryKey: QUERY_KEYS.DETAIL(orderId),
    queryFn: () => request.get(`orders/${orderId}`).json<Order>(),
  })
