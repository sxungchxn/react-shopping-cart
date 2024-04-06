import { Meta, StoryObj } from '@storybook/react'
import { ProductItem } from './product-item'

const meta: Meta<typeof ProductItem> = {
  title: 'templates/ProductItem',
  component: ProductItem,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof ProductItem>

export const Default: Story = {
  args: {
    product: {
      id: 1,
      name: '냉면용기(대)',
      price: 83700,
      imageUrl: 'https://cdn-mart.baemin.com/goods/2/1556008840639m0.jpg',
    },
  },
}
