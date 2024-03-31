import { ButtonHTMLAttributes, ForwardedRef, cloneElement, forwardRef } from 'react'
import { TablerIconsProps } from '@tabler/icons-react'
import { css } from '@styled-system/css'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  source: (props: TablerIconsProps) => JSX.Element
  color?: string
  size?: number
}

export const IconButton = forwardRef(
  (
    { color = 'inherit', source: SourceComponent, size = 24, ...props }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button {...props} ref={ref}>
        {cloneElement(<SourceComponent />, {
          color,
          className: css({
            width: `${size}px`,
            height: `${size}px`,
          }),
        })}
      </button>
    )
  },
)
