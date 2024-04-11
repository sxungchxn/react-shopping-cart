import { HighlightedText, SquareButton } from '@/components/atoms'
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'

export const TotalPricePanel = () => {
  return (
    <div
      className={css({
        border: '1px solid token(colors.gray.500)',
        width: {
          lg: '400px',
          base: '100%',
        },
        height: 'max-content',
      })}
    >
      <div
        className={css({
          borderBottom: '1px solid token(colors.gray.500)',
          width: '100%',
          padding: '24px',
        })}
      >
        결제예상금액
      </div>
      <div
        className={flex({
          flexDir: 'column',
          gap: ' 40px',
          borderTop: '1px solid token(colors.gray.500)',
          padding: '24px',
        })}
      >
        <div className={flex({ justifyContent: 'space-between' })}>
          <HighlightedText size="md">결제예상금액</HighlightedText>
          <HighlightedText size="md">21700원</HighlightedText>
        </div>
        <SquareButton>주문하기(2개)</SquareButton>
      </div>
    </div>
  )
}
