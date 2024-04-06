import { cx, RecipeVariant, cva } from '@styled-system/css'
import { ImgHTMLAttributes } from 'react'

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  size?: RecipeVariant<typeof image>['size']
}

export const Image = ({ size = 'md', className, ...props }: ImageProps) => {
  return <img className={cx(image({ size }), className)} {...props} />
}

const image = cva({
  base: {
    aspectRatio: '1/1',
  },
  variants: {
    size: {
      sm: {
        width: '144px',
        height: '144px',
      },
      md: {
        width: '288px',
        height: '288px',
      },
      lg: {
        width: '570px',
        height: '570px',
      },
    },
  },
})
