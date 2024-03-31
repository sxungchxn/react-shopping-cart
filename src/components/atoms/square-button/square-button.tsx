import { RecipeVariant, cva, cx } from '@styled-system/css'
import { ButtonHTMLAttributes } from 'react'

export interface SquareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: RecipeVariant<typeof squareButton>['size']
  fullWidth?: RecipeVariant<typeof squareButton>['fullWidth']
  color?: RecipeVariant<typeof squareButton>['color']
}

export const SquareButton = ({ size, fullWidth, color, ...props }: SquareButtonProps) => {
  return <button {...props} className={cx(squareButton({ size, fullWidth, color }))} />
}

const squareButton = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    paddingX: '28px',
  },
  variants: {
    size: {
      sm: { height: '48px' },
      md: { height: '72px' },
      lg: { height: '98px' },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
    color: {
      primary: {
        background: 'aqua.light',
      },
      secondary: {
        background: 'brown',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    fullWidth: true,
    color: 'primary',
  },
})
