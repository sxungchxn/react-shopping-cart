import { Meta, StoryObj } from '@storybook/react'
import { HighlightedText } from './highlighted-text'

const meta: Meta<typeof HighlightedText> = {
  title: 'atom/HighlightedText',
  component: HighlightedText,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof HighlightedText>

export const Default: Story = {
  args: {
    children: '결제 금액',
  },
}
