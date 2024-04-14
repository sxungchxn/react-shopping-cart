import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import { css } from '@styled-system/css'
import { useSuspenseQuery } from '@tanstack/react-query'
import { orderListOption } from '@/queries/order'
import { Suspense } from 'react'
import { vstack } from '@styled-system/patterns'
import { OrderPanel, SquareButton } from '@/components'
import { useCreateCart } from '@/mutations/create-cart'
import { CartRequest } from '@/types/api-type'

export const Route = createFileRoute('/orders')({
  component: OrderListPage,
})

function OrderListPage() {
  return (
    <div className={container}>
      <h2 className={title}>주문 목록</h2>
      <Suspense fallback={<div>loading...</div>}>
        <OrderList />
      </Suspense>
    </div>
  )
}

const OrderList = () => {
  const { data: orderList } = useSuspenseQuery(orderListOption)
  const navigate = useNavigate()
  const { mutate: createCart } = useCreateCart()

  const handleClickCartButton = (cartReqeust: CartRequest) => () => {
    createCart(cartReqeust, {
      onSuccess: () => {
        if (!confirm('장바구니로 이동하시겠습니까?')) return
        void navigate({
          to: '/cart',
        })
      },
    })
  }

  return (
    <div className={vstack({ gap: '40px', width: '100%' })}>
      {orderList.map(({ id: orderId, orderDetails }) => (
        <OrderPanel.Root key={orderId}>
          <OrderPanel.Header>
            <span className={css({ textStyle: 'body2' })}>{`주문번호 : ${orderId}`}</span>
            <Link
              to="/orders/$orderId"
              params={{
                orderId: orderId.toString(),
              }}
            >
              <span className={css({ textStyle: 'body2' })}>{`상세보기 >`}</span>
            </Link>
          </OrderPanel.Header>
          {orderDetails.map(orderDetail => (
            <OrderPanel.Item key={orderDetail.id} orderDetail={orderDetail}>
              <SquareButton
                fullWidth={false}
                size="sm"
                onClick={handleClickCartButton(orderDetail)}
              >
                장바구니
              </SquareButton>
            </OrderPanel.Item>
          ))}
        </OrderPanel.Root>
      ))}
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
