import { ButtonHTMLAttributes, ForwardedRef, cloneElement, forwardRef } from 'react'
import { TablerIconsProps } from '@tabler/icons-react'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  source: (props: TablerIconsProps) => JSX.Element
  color?: string
}

export const IconButton = forwardRef(
  (
    { color = 'inherit', source: SourceComponent, ...props }: IconButtonProps,
    ref: ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <button {...props} ref={ref}>
        {cloneElement(<SourceComponent />, {
          color,
        })}
      </button>
    )
  },
)
