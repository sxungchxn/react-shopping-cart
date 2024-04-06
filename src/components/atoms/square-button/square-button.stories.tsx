import { Meta, StoryObj } from '@storybook/react'
import { SquareButton } from './square-button'

const meta: Meta<typeof SquareButton> = {
  title: 'atom/SquareButton',
  component: SquareButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof SquareButton>

export const Default: Story = {
  args: {
    children: '장바구니',
  },
}

export const WidthFixed: Story = {
  args: {
    children: '장바구니',
    size: 'sm',
    fullWidth: false,
  },
}
