import { CartGroupedData, Product } from '@/types/api-type'
import { atom, useAtom, useAtomValue } from 'jotai'

export const cartSelectAtom = atom(new Set())

/** 장바구니 상품 단일 선택 관련 상태 */
export const useCartProductSelection = () => {
  const [cartSelection, setCartSelection] = useAtom(cartSelectAtom)

  const getIsSelectedCartProduct = (productId: Product['id']) => {
    return cartSelection.has(productId)
  }

  const selectCartProduct = (productId: Product['id']) => {
    setCartSelection(cartSelection => new Set([...cartSelection.add(productId)]))
  }

  const unSelectCartProduct = (productId: Product['id']) => {
    setCartSelection(cartSelection => {
      cartSelection.delete(productId)
      return new Set([...cartSelection])
    })
  }

  const toggleCartProductSelection = (productId: Product['id']) => {
    if (getIsSelectedCartProduct(productId)) return unSelectCartProduct(productId)
    selectCartProduct(productId)
  }

  return [cartSelection, toggleCartProductSelection] as const
}

/** 장바구니 상품 목록 관련 상태 */
export const useCartProductListSelection = (cartList: CartGroupedData[]) => {
  const cartProductIdList = cartList.map(({ id }) => id)
  const [cartSelection, setCartSelection] = useAtom(cartSelectAtom)
  const isCartProductListSelected = cartSelection.size === cartProductIdList.length

  const selectAllCartProduct = () => {
    setCartSelection(new Set(cartProductIdList))
  }

  const unSelectAllCartProduct = () => {
    setCartSelection(new Set())
  }

  const toggleCartProductListSelection = () => {
    if (isCartProductListSelected) return unSelectAllCartProduct()
    selectAllCartProduct()
  }

  return [isCartProductListSelected, toggleCartProductListSelection] as const
}

/** 장바구니 결제 예상금액, 주문 개수 관련 상태 */
export const useSelectedCartTotalInfo = (cartList: CartGroupedData[]) => {
  const cartSelection = useAtomValue(cartSelectAtom)

  const totalSelection = cartSelection.size

  const totalPrice = cartList.reduce(
    (total, cartProduct) =>
      (total += cartSelection.has(cartProduct.id) ? cartProduct.price * cartProduct.quantity : 0),
    0,
  )

  return [totalSelection, totalPrice] as const
}
