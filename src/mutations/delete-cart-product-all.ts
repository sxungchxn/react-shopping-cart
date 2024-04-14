import { QUERY_KEYS } from '@/queries/query-keys'
import { Cart, Product } from '@/types/api-type'
import { request } from '@/utils/request'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteCartProductAll = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (productIdList: Product['id'][]) =>
      request.delete(`carts/product/all`, {
        json: productIdList,
      }),
    onMutate: async targetProductIdList => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.CART.LIST() })
      const prevCartProductList = queryClient.getQueryData(QUERY_KEYS.CART.LIST()) as Cart[]
      queryClient.setQueryData<Cart[]>(
        QUERY_KEYS.CART.LIST(),
        prevCartProductList.filter(({ product }) => !targetProductIdList.includes(product.id)),
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
