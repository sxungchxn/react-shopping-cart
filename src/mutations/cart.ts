import { QUERY_KEYS } from '@/queries/query-keys'
import { CartRequest } from '@/types/api-type'
import { request } from '@/utils/request'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useCreateCart = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (cartRequest: CartRequest) =>
      request.post('carts', {
        json: cartRequest,
      }),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: QUERY_KEYS.CART.LIST(),
      })
    },
  })
}
