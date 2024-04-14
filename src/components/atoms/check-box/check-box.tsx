import { cva, cx } from '@styled-system/css'
import { IconCheck } from '@tabler/icons-react'
import { ButtonHTMLAttributes } from 'react'

export interface CheckBoxProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean
}

export const CheckBox = ({ checked = false, className, ...rest }: CheckBoxProps) => {
  return (
    <button className={cx(button({ checked }), className)} {...rest}>
      <IconCheck className={indicator({ checked })} />
    </button>
  )
}

const button = cva({
  base: {
    width: '28px',
    height: '28px',
    border: `1px solid token(colors.aqua.dark)`,
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  variants: {
    checked: {
      true: {
        backgroundColor: 'token(colors.aqua.dark)',
      },
      false: {
        backgroundColor: 'token(colors.white)',
      },
    },
  },
})

const indicator = cva({
  base: {
    width: '28px',
    height: '28px',
    color: 'white',
  },
  variants: {
    checked: {
      false: {
        display: 'none',
      },
    },
  },
})
