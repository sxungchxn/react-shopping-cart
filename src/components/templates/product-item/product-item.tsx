import { Product } from '@/types/api-type'

import { IconButton, Image } from '@/components/atoms'
import { hstack, vstack } from '@styled-system/patterns'
import { css, cx } from '@styled-system/css'
import { LiHTMLAttributes, MouseEventHandler, ReactNode } from 'react'
import { IconShoppingCart } from '@tabler/icons-react'

export interface ProductItemProps extends LiHTMLAttributes<HTMLLIElement> {
  product: Product
  onClickCartButton?: (product: Product) => void
  renderContent?: (props: ProductItemContentProps) => ReactNode
}

export const _ProductItem = ({
  product,
  className,
  onClickCartButton,
  renderContent = props => <ProductItemContent {...props} />,
  ...props
}: ProductItemProps) => {
  const handleClickCartButton: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    onClickCartButton?.(product)
  }

  return (
    <li {...props} className={cx(vstack({ gap: 0, width: 'max-content' }), className)}>
      {renderContent({
        product,
        onClickShoppingCartButton: handleClickCartButton,
      })}
    </li>
  )
}

export interface ProductItemContentProps {
  product: Product
  onClickShoppingCartButton?: MouseEventHandler<HTMLButtonElement>
}

export const ProductItemContent = ({
  product,
  onClickShoppingCartButton,
}: ProductItemContentProps) => {
  const { price, imageUrl: productImgUrl, name: productName } = product
  return (
    <>
      <Image size="md" src={productImgUrl} alt={productName} />
      <div
        className={hstack({
          paddingX: '12px',
          paddingTop: '18px',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        })}
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
            {price.toLocaleString()}원
          </span>
        </div>
        <IconButton
          source={IconShoppingCart}
          color="black"
          size={30}
          onClick={onClickShoppingCartButton}
        />
      </div>
    </>
  )
}

export const ProductItem = Object.assign(_ProductItem, {
  Content: ProductItemContent,
})
