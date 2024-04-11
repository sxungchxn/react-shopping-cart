import { RecipeVariant, cva, cx } from '@styled-system/css'
import { ButtonHTMLAttributes } from 'react'

export interface SquareButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: RecipeVariant<typeof squareButton>['size']
  fullWidth?: RecipeVariant<typeof squareButton>['fullWidth']
  color?: RecipeVariant<typeof squareButton>['color']
}

export const SquareButton = ({
  size,
  fullWidth,
  color,
  className,
  ...props
}: SquareButtonProps) => {
  return <button {...props} className={cx(squareButton({ size, fullWidth, color }), className)} />
}

const squareButton = cva({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    paddingX: '28px',
    '&:disabled': {
      backgroundColor: 'token(colors.gray.500)',
      cursor: 'not-allowed',
    },
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
      whiteGray: {
        background: 'token(colors.white)',
        border: '1px solid token(colors.gray.500)',
        color: 'token(colors.black)',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    fullWidth: true,
    color: 'primary',
  },
})
