import { QUERY_KEYS } from '@/queries/query-keys'
import { Cart, CartRequest } from '@/types/api-type'
import { request } from '@/utils/request'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export interface UseCreateCartParams {
  onMutate?: () => void
}

export const useCreateCart = (params: UseCreateCartParams) => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (cartRequest: CartRequest) =>
      request.post('carts', {
        json: cartRequest,
      }),

    onMutate: async newCartProduct => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEYS.CART.LIST() })
      const prevCartProductList = queryClient.getQueryData(QUERY_KEYS.CART.LIST()) as Cart[]
      queryClient.setQueryData<Cart[]>(QUERY_KEYS.CART.LIST(), prevCartList => [
        ...(prevCartList ?? []),
        {
          id: prevCartList?.at(-1)?.id ?? 1,
          product: newCartProduct,
        },
      ])
      params?.onMutate?.()
      return prevCartProductList
    },

    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.CART.LIST(),
      })
    },
  })
}
