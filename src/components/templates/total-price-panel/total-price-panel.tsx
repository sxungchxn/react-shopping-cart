import { useSelectedCartTotalInfo } from '@/atoms/cart-select-atom'
import { HighlightedText, SquareButton } from '@/components/atoms'
import { cartListOption } from '@/queries/cart'
import { css } from '@styled-system/css'
import { flex } from '@styled-system/patterns'
import { useSuspenseQuery } from '@tanstack/react-query'

export const TotalPricePanel = () => {
  const { data: cartList } = useSuspenseQuery(cartListOption)
  const [totalSelection, totalSelectionPrice] = useSelectedCartTotalInfo(cartList)

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
          <HighlightedText size="md">{totalSelectionPrice.toLocaleString()}원</HighlightedText>
        </div>
        <SquareButton>{`주문하기(${totalSelection}개)`}</SquareButton>
      </div>
    </div>
  )
}
