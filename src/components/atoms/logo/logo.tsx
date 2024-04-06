import { ForwardedRef, HTMLAttributes, forwardRef } from 'react'
import { css } from '@styled-system/css'
import { IconShoppingCart } from '@tabler/icons-react'

export interface LogoProps extends HTMLAttributes<HTMLDivElement> {}

export const Logo = forwardRef((props: LogoProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <div
      className={css({
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
        paddingX: '12px',
      })}
      ref={ref}
      {...props}
    >
      <IconShoppingCart size={36} color="white" />
      <h1
        className={css({
          textStyle: 'heading1',
          color: 'white',
        })}
      >
        NEXTSTEP
      </h1>
    </div>
  )
})
