import { QUERY_KEYS } from '@/queries/query-keys'
import { Cart, Product } from '@/types/api-type'
import { request } from '@/utils/request'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteCartProductSingle = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (productId: Product['id']) => request.delete(`carts/product/${productId}`),
    onMutate: async targetProductId => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.CART.LIST() })
      const prevCartProductList = queryClient.getQueryData(QUERY_KEYS.CART.LIST()) as Cart[]
      const targetedCart = prevCartProductList.find(cart => cart.product.id === targetProductId)
      if (!targetedCart) return
      queryClient.setQueryData<Cart[]>(
        QUERY_KEYS.CART.LIST(),
        prevCartProductList.filter(({ id }) => id !== targetedCart.id),
      )
      return { prevCartProductList }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(QUERY_KEYS.CART.LIST(), context?.prevCartProductList)
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.CART.LIST(),
      })
    },
  })
}
