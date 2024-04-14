import { Meta, StoryObj } from '@storybook/react'
import { CheckBox } from './check-box'
import { useState } from 'react'

const meta: Meta<typeof CheckBox> = {
  title: 'atom/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

const Template = () => {
  const [checked, setChecked] = useState(false)
  return <CheckBox checked={checked} onClick={() => setChecked(c => !c)} />
}

export const Default = {
  render: () => <Template />,
} satisfies Story
