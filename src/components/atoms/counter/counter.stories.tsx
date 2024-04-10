import { Meta, StoryObj } from '@storybook/react'
import { Counter } from './counter'
import { useState } from 'react'

const meta: Meta<typeof Counter> = {
  title: 'atom/Counter',
  component: Counter,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const Template = () => {
  const [value, setValue] = useState(0)
  return <Counter value={value} onChangeValue={setValue} />
}

export const Default = {
  render: () => <Template />,
} satisfies Story
