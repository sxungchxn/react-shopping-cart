import { Meta, StoryObj } from '@storybook/react'
import { OrderPanel, OrderPanelRoot } from './order-panel.tsx'
import { css } from '@styled-system/css'

const meta: Meta<typeof OrderPanelRoot> = {
  title: 'templates/OrderPanelRoot',
  component: OrderPanelRoot,
  tags: ['autodocs'],
}

export default meta

const SAMPLE_ORDER = {
  id: 1,
  orderDetails: [
    {
      id: 1,
      name: '[리뉴얼]젓가락(종이)-정성을 담아',
      price: 21800,
      imageUrl:
        'https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg',
      quantity: 5,
    },
    {
      id: 2,
      name: '젓가락(종이)-웬만해선 이 맛을 막을 수 없다',
      price: 21800,
      imageUrl:
        'https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg',
      quantity: 3,
    },
  ],
}

const Template = () => {
  return (
    <OrderPanel.Root>
      <OrderPanel.Header>
        <div className={css({ width: '100%' })}>주문번호 : {SAMPLE_ORDER.id}</div>
      </OrderPanel.Header>
      {SAMPLE_ORDER.orderDetails.map(orderDetail => (
        <OrderPanel.Item key={orderDetail.id} orderDetail={orderDetail} />
      ))}
    </OrderPanel.Root>
  )
}

type Story = StoryObj<typeof Template>

export const Default: Story = {
  render: Template,
  parameters: {
    docs: {
      source: {
        language: 'tsx',
        code: `
const SAMPLE_ORDER = {
  id: 1,
  orderDetails: [
    {
      id: 1,
      name: '[리뉴얼]젓가락(종이)-정성을 담아',
      price: 21800,
      imageUrl:
        'https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg',
      quantity: 5,
    },
    {
      id: 2,
      name: '젓가락(종이)-웬만해선 이 맛을 막을 수 없다',
      price: 21800,
      imageUrl:
        'https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg',
      quantity: 3,
    },
  ],
}


<OrderPanel.Root>
      <OrderPanel.Header>
        <div className={css({ width: '100%' })}>주문번호 : {SAMPLE_ORDER.id}</div>
      </OrderPanel.Header>
      {SAMPLE_ORDER.orderDetails.map(orderDetail => (
        <OrderPanel.Item key={orderDetail.id} orderDetail={orderDetail} />
      ))}
</OrderPanel.Root>`,
      },
    },
  },
}
