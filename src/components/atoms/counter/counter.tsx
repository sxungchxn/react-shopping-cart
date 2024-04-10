import { cx } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { IconCaretDownFilled, IconCaretUpFilled } from '@tabler/icons-react'
import { HTMLAttributes } from 'react'

export interface CounterProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  onChangeValue: (value: number) => void
  /** counter 최소 값 (기본 0) */
  min?: number
  /** counter 최대 값 (기본 20) */
  max?: number
  /** 증가시 실행할 부수함수 */
  onIncrement?: (value: number) => void
  /** 감소시 실행할 부수함수 */
  onDecrement?: (value: number) => void
}

export const Counter = ({
  value,
  onChangeValue,
  min = 0,
  max = 20,
  className,
  onIncrement,
  onDecrement,
  ...rest
}: CounterProps) => {
  const handleIncrement = () => {
    if (value >= max) return
    const increasedValue = value++
    onChangeValue(increasedValue)
    onIncrement?.(increasedValue)
  }

  const handleDecrement = () => {
    if (value <= min) return
    const decreasedValue = value--
    onChangeValue(decreasedValue)
    onDecrement?.(decreasedValue)
  }

  return (
    <div className={cx(container, className)} {...rest}>
      <div className={counterBoard}>{value}</div>
      <div className={buttonWrapper}>
        <button className={button} onClick={handleIncrement} disabled={value >= max}>
          <IconCaretUpFilled size={8} />
        </button>
        <button className={button} onClick={handleDecrement} disabled={value <= min}>
          <IconCaretDownFilled size={8} />
        </button>
      </div>
    </div>
  )
}

const container = flex({})

const counterBoard = flex({
  justifyContent: 'center',
  alignItems: 'center',
  width: '72px',
  height: '60px',
  border: '1px solid token(colors.gray.100)',
})

const buttonWrapper = flex({
  flexDir: 'column',
})

const button = flex({
  justifyContent: 'center',
  alignItems: 'center',
  width: '42px',
  height: '30px',
  border: '1px solid token(colors.gray.100)',
})
