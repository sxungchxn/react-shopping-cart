import { ButtonHTMLAttributes, ForwardedRef, cloneElement, forwardRef } from 'react'
import { TablerIconsProps } from '@tabler/icons-react'
import { ColorToken, token } from '@styled-system/tokens'
import { css } from '@styled-system/css'

export interface IconButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  source: (props: TablerIconsProps) => JSX.Element
  color?: ColorToken
  size?: number
}

export const IconButton = forwardRef(
  (
    { color = 'current', source: SourceComponent, size = 24, ...props }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button {...props} ref={ref}>
        {cloneElement(<SourceComponent />, {
          className: css({ color: 'var(--color)' }),
          style: {
            width: `${size}px`,
            height: `${size}px`,
            '--color': token(`colors.${color}`),
          },
        })}
      </button>
    )
  },
)
