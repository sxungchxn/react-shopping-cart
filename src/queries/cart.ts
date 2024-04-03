import { Cart, CartGroupedData, Product } from '@/types/api-type'
import { request } from '@/utils/request'
import { queryOptions } from '@tanstack/react-query'

export const QUERY_KEYS = {
  ALL: ['CART'],
  LIST: () => [...QUERY_KEYS.ALL, 'LIST'],
}

export const cartListOption = queryOptions({
  queryKey: QUERY_KEYS.LIST(),
  queryFn: () => request.get('carts').json<Cart[]>(),
  select: cartList => groupingCartList(cartList),
})

/** 주어지는 Cart[]를  CartGroupedData[]로 변환 */
const groupingCartList = (cartList: Cart[]): CartGroupedData[] => {
  const cartProductSet = cartList.reduce(
    (set, cart) => {
      set[cart.product.id] = cart.product
      return set
    },
    {} as Record<number, Cart['product']>,
  )

  const cartProductIdToQuantityMap = cartList
    .map(({ product }) => product.id)
    .reduce((map, productId) => {
      if (map.has(productId)) {
        map.set(productId, (map.get(productId) as number) + 1)
      } else {
        map.set(productId, 1)
      }
      return map
    }, new Map<number, number>())

  return Array.from(cartProductIdToQuantityMap.keys()).map(cartProductId => ({
    ...(cartProductSet[cartProductId] as Product),
    quantity: cartProductIdToQuantityMap.get(cartProductId) as number,
  }))
}
