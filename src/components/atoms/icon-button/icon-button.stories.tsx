import { Meta, StoryObj } from '@storybook/react'
import { IconButton } from './icon-button'
import { IconBrandReact } from '@tabler/icons-react'

const meta: Meta<typeof IconButton> = {
  title: 'atom/IconButton',
  component: IconButton,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    source: IconBrandReact,
    color: 'aqua.light',
  },
}
