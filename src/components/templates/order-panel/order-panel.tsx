import { OrderDetail } from '@/types/api-type'
import { Image } from '@/components/atoms'
import { css } from '@styled-system/css'
import { vstack, hstack } from '@styled-system/patterns'
import { PropsWithChildren } from 'react'

export const OrderPanelRoot = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={vstack({
        width: '100%',
        gap: '0px',
      })}
    >
      {children}
    </div>
  )
}

export const OrderPanelHeader = ({ children }: PropsWithChildren) => {
  return (
    <div
      className={css({
        width: '100%',
        padding: '24px',
        background: 'gray.100',
        border: '1px solid token(colors.gray.300)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      })}
    >
      {children}
    </div>
  )
}

export interface OrderPanelItemProps extends PropsWithChildren {
  orderDetail: OrderDetail
}

export const OrderPanelItem = ({ orderDetail, children }: OrderPanelItemProps) => {
  const { quantity, name, price, imageUrl } = orderDetail
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        padding: '16px',
        border: '1px solid token(colors.gray.300)',
        background: 'colors.white',
      })}
    >
      <div className={hstack({ alignItems: 'flex-start' })}>
        <Image src={imageUrl} size="sm" />
        <div
          className={css({
            display: 'flex',
            gap: '20px',
            flexDir: 'column',
            justifyContent: 'flex-start',
          })}
        >
          <span className={css({ textStyle: 'body1' })}>{name}</span>
          <span className={css({ textStyle: 'caption1', color: 'gray.500' })}>
            {price.toLocaleString()} / 수량 {quantity}개
          </span>
        </div>
      </div>
      {children}
    </div>
  )
}

export const OrderPanel = {
  Root: OrderPanelRoot,
  Header: OrderPanelHeader,
  Item: OrderPanelItem,
}
