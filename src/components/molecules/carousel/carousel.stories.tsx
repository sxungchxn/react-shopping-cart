import { Meta, StoryObj } from '@storybook/react'
import { Carousel } from './carousel'
import { flex } from '@styled-system/patterns'
import { css } from '@styled-system/css'

const meta = {
  title: 'molecules/Carousel',
  component: Carousel,
  tags: ['autodocs'],
} satisfies Meta<typeof Carousel>

export default meta

type Story = StoryObj<typeof meta>

const Template = () => {
  return (
    <Carousel itemGap="20px">
      <div className={flex({ gap: '10px' })}>
        <Carousel.LeftNav>{`<`}</Carousel.LeftNav>
        <Carousel.Viewport
          className={css({ height: '320px', backgroundColor: 'token(colors.gray.100)' })}
        >
          {[1, 2, 3, 4, 5].map(num => (
            <Carousel.Item
              key={num}
              className={css({ background: 'token(colors.aqua.light)', height: '240px' })}
            >
              {num}
            </Carousel.Item>
          ))}
        </Carousel.Viewport>
        <Carousel.RightNav>{`>`}</Carousel.RightNav>
      </div>
    </Carousel>
  )
}

export const Default = {
  render: Template,
} satisfies Story
