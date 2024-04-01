import { Order } from '@/types/api-type'
import { request } from '@/utils/request'
import { queryOptions } from '@tanstack/react-query'

export const QUERY_KEYS = {
  ALL: 'ORDER',
  LIST: () => [...QUERY_KEYS.ALL, 'LIST'],
}

export const orderListOption = queryOptions({
  queryKey: QUERY_KEYS.LIST(),
  queryFn: () => request.get('orders').json<Order[]>(),
})
