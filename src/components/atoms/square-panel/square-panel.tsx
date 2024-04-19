import { cx } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { SystemProperties } from '@styled-system/types'
import { HTMLAttributes } from 'react'

export interface SquarePanelProps extends HTMLAttributes<HTMLDivElement> {
  padding?: SystemProperties['padding']
  width?: SystemProperties['width']
  height?: SystemProperties['height']
  flexDir?: SystemProperties['flexDir']
  backgroundColor?: SystemProperties['backgroundColor']
}

export const SquarePanel = ({
  padding = '30px',
  width,
  height = 'max-content',
  flexDir = 'column',
  className,
  backgroundColor = 'white',
  ...rest
}: SquarePanelProps) => {
  return (
    <div
      className={cx(
        flex({
          border: '1px solid token(colors.gray.500)',
          backgroundColor,
          width,
          height,
          padding,
          flexDir,
        }),
        className,
      )}
      {...rest}
    />
  )
}
