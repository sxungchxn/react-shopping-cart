import { createFileRoute } from '@tanstack/react-router'
import { css } from '@styled-system/css'
import { HighlightedText, OrderPanel } from '@/components'
import { Suspense } from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { orderDetailOption } from '@/queries/order'
import { flex } from '@styled-system/patterns'

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

  const totalOrderPrice = orderDetails.reduce((sum, orderDetail) => (sum += orderDetail.price), 0)

  return (
    <div
      className={flex({ width: '100%', flexDir: 'column', gap: '40px', alignItems: 'flex-end' })}
    >
      <OrderPanel.Root>
        <OrderPanel.Header>
          <span className={css({ textStyle: 'body2' })}>{`주문번호 : ${orderId}`}</span>
        </OrderPanel.Header>
        {orderDetails.map(orderDetail => (
          <OrderPanel.Item key={orderDetail.id} orderDetail={orderDetail} />
        ))}
      </OrderPanel.Root>
      <div className={flex({ width: '500px', justifyContent: 'flex-end', flexDir: 'column' })}>
        <div className={priceInfoTitle}>결제 금액 정보</div>
        <div className={flex({ width: '100%', justifyContent: 'space-between' })}>
          <HighlightedText size="md">총 결제금액</HighlightedText>
          <HighlightedText size="md">{totalOrderPrice.toLocaleString()}원</HighlightedText>
        </div>
      </div>
    </div>
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

const priceInfoTitle = css({
  textStyle: 'heading2',
  paddingBottom: '20px',
  borderBottom: '2px solid token(colors.gray.100)',
  marginBottom: '40px',
})
