import { cx, cva, RecipeVariant } from '@styled-system/css'
import { HTMLAttributes } from 'react'

export interface HighlightedTextProps extends HTMLAttributes<HTMLDivElement> {
  size?: HighlightVariants['size']
}

export const HighlightedText = ({ className, size = 'lg', ...props }: HighlightedTextProps) => {
  return <div className={cx(highlight({ size }), className)} {...props} />
}

const highlight = cva({
  base: {
    textStyle: 'heading1',
    textDecoration: 'underline',
    textDecorationColor: 'token(colors.aqua.light)',
    textDecorationThickness: '6px',
    width: 'max-content',
    paddingX: '4px',
  },
  variants: {
    size: {
      lg: {
        textStyle: 'heading1',
      },
      md: {
        textStyle: 'heading2',
      },
    },
  },
  defaultVariants: {
    size: 'lg',
  },
})

export type HighlightVariants = RecipeVariant<typeof highlight>
