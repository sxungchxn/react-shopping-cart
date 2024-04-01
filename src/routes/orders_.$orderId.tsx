import { createFileRoute } from '@tanstack/react-router'
import { css } from '@styled-system/css'
import { OrderPanel } from '@/components'
import { Suspense } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { orderDetailOption } from '@/queries/order'

export const Route = createFileRoute('/orders/$orderId')({
  component: () => <OrderDetailPage />,
})

function OrderDetailPage() {
  return (
    <div className={container}>
      <h2 className={title}>주문내역상세</h2>
      <Suspense>
        <OrderDetail />
      </Suspense>
    </div>
  )
}

const OrderDetail = () => {
  const { orderId: orderIdParam } = Route.useParams()
  const {
    data: { id: orderId, orderDetails },
  } = useSuspenseQuery(orderDetailOption(Number(orderIdParam)))
  return (
    <OrderPanel.Root>
      <OrderPanel.Header>
        <span className={css({ textStyle: 'body2' })}>{`주문번호 : ${orderId}`}</span>
      </OrderPanel.Header>
      {orderDetails.map(orderDetail => (
        <OrderPanel.Item key={orderDetail.id} orderDetail={orderDetail} />
      ))}
    </OrderPanel.Root>
  )
}

const container = css({
  display: 'flex',
  flexDir: 'column',
  width: '100%',
  alignItems: 'center',
  paddingX: '40px',
})

const title = css({
  width: '100%',
  textStyle: 'heading1',
  color: 'token(colors.black)',
  textAlign: 'center',
  borderBottom: '2px solid token(colors.black)',
  paddingBottom: '24px',
  marginBottom: '40px',
})
