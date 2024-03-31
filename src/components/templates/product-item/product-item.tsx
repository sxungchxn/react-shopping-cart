import { Product } from '@/types/api-type'

import { IconButton, Image } from '@/components/atoms'
import { hstack, vstack } from '@styled-system/patterns'
import { css, cx } from '@styled-system/css'
import { LiHTMLAttributes } from 'react'
import { IconShoppingCart } from '@tabler/icons-react'

export interface ProductItemProps extends LiHTMLAttributes<HTMLLIElement> {
  product: Product
}

export const ProductItem = ({ product, className, ...props }: ProductItemProps) => {
  const { price, imageUrl: productImgUrl, name: productName } = product
  return (
    <li {...props} className={cx(vstack({ gap: 0, width: 'max-content' }), className)}>
      <Image size="md" src={productImgUrl} alt={productName} />
      <div
        className={cx(
          hstack({
            paddingX: '12px',
            paddingTop: '18px',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }),
          className,
        )}
      >
        <div
          className={vstack({
            alignItems: 'flex-start',
          })}
        >
          <span
            className={css({
              textStyle: 'body2',
            })}
          >
            {productName}
          </span>
          <span
            className={css({
              textStyle: 'body1',
            })}
          >
            {price}원
          </span>
        </div>
        <IconButton source={IconShoppingCart} color="black" size={30} />
      </div>
    </li>
  )
}
