import { CartGroupedData } from '@/types/api-type'
import { CheckBox, IconButton, Image } from '@/components/atoms'
import { css } from '@styled-system/css'
import { flex, vstack } from '@styled-system/patterns'
import { IconTrash } from '@tabler/icons-react'
import { Counter } from '@/components/atoms/counter/counter'

export interface CartSelectListProps {
  cartList: CartGroupedData[]
}

export const CartSelectList = ({ cartList }: CartSelectListProps) => {
  return (
    <div>
      <div
        className={css({
          borderBottom: '3px solid token(colors.gray.500)',
          paddingBottom: '16px',
        })}
      >
        든든배송 상품({cartList.length}개)
      </div>
      <ul>
        {cartList.map(cart => (
          <CartSelectListItem key={cart.id} cart={cart} />
        ))}
      </ul>
    </div>
  )
}

interface CartSelectListItemProps {
  cart: CartGroupedData
}

const CartSelectListItem = ({ cart }: CartSelectListItemProps) => {
  const { id, imageUrl, name, quantity, price } = cart
  return (
    <li
      key={id}
      className={flex({
        gap: '20px',
        paddingY: '24px',
        borderBottom: '1px solid token(colors.gray.500)',
      })}
    >
      <CheckBox />
      <Image src={imageUrl} size="sm" />
      <div>{name}</div>
      <div className={vstack({ marginLeft: 'auto', alignItems: 'flex-end' })}>
        <IconButton source={IconTrash} size={24} color="gray.500" />
        <Counter value={quantity} />
        <span>{(price * quantity).toLocaleString()}원</span>
      </div>
    </li>
  )
}
