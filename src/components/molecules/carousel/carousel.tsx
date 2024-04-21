import {
  ButtonHTMLAttributes,
  Children,
  HTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
  isValidElement,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from 'react'
import {
  CarouselContextProvider,
  CarouselContextValue,
  SlideHandle,
  useCarouselContext,
} from './carousel-context'
import { cx } from '@styled-system/css'
import { flex } from '@styled-system/patterns'

/*------------------------------------------------------------------------------
Carousel Component
-------------------------------------------------------------------------------*/

export interface CarouselRootProps extends PropsWithChildren {
  /** item 요소 너비 */
  itemWidth?: CarouselContextValue['itemWidth']
  /** item 요소 간 간격 */
  itemGap?: CarouselContextValue['itemGap']
  /** viewport 요소 너비 */
  viewportWidth?: CarouselContextValue['viewportWidth']
  /** carousel 시작 요소 index */
  defaultSlideIndex?: number
}

export const CarouselRoot = ({
  children,
  itemGap = '10px',
  itemWidth = '240px',
  viewportWidth = '300px',
  defaultSlideIndex = 0,
}: CarouselRootProps) => {
  const slideRef = useRef<SlideHandle>(null)
  const [slideIndex, setSlideIndex] = useState(defaultSlideIndex)

  const contextValue = useMemo(
    () => ({
      slideIndex,
      setSlideIndex,
      slideRef,
      itemWidth,
      itemGap,
      viewportWidth,
    }),
    [slideIndex, setSlideIndex, slideRef, itemWidth, itemGap, viewportWidth],
  )

  return <CarouselContextProvider value={contextValue}>{children}</CarouselContextProvider>
}

/*------------------------------------------------------------------------------
CarouselViewport Component
-------------------------------------------------------------------------------*/

export interface CarouselViewportProps extends HTMLAttributes<HTMLDivElement> {
  width?: string
}

export const CarouselViewport = ({ children, className, ...props }: CarouselViewportProps) => {
  const { slideRef, slideIndex, itemWidth, itemGap, viewportWidth } = useCarouselContext()
  const slideItemList = Children.toArray(children).filter(isValidElement)
  const slideLength = slideItemList.length

  /* inline css value */
  const paddingLeft = `calc((${viewportWidth} - ${itemWidth}) / 2)`
  const itemContainerWidth = `calc(${slideLength} * ${viewportWidth})`
  const itemContainerTransform = `translateX(calc(-1 * ${slideIndex} * (1.5 * ${itemWidth} - 0.5 * ${viewportWidth} + ${itemGap} + ${paddingLeft}))`

  useImperativeHandle(slideRef, () => ({
    getSlideLength: () => slideLength,
  }))

  return (
    <div
      className={cx(
        className,
        flex({
          alignItems: 'center',
          overflow: 'hidden',
          width: viewportWidth,
          paddingLeft,
        }),
      )}
      style={{
        paddingLeft,
      }}
    >
      <div
        className={flex({
          transition: '0.3s ease-in-out',
          gap: itemGap,
        })}
        style={{
          width: itemContainerWidth,
          transform: itemContainerTransform,
        }}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

/*------------------------------------------------------------------------------
CarouselItem Component
-------------------------------------------------------------------------------*/

export interface CarouselItemProps extends HTMLAttributes<HTMLDivElement> {}

export const CarouselItem = ({ className, ...props }: CarouselItemProps) => {
  const { itemWidth } = useCarouselContext()
  return <div className={className} style={{ width: itemWidth }} {...props} />
}

/*------------------------------------------------------------------------------
CarouselLeftNav Component
-------------------------------------------------------------------------------*/

export interface CarouselLeftNavProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CarouselLeftNav = ({ onClick, ...props }: CarouselLeftNavProps) => {
  const { slideIndex, setSlideIndex } = useCarouselContext()

  const handleClickLeftNavButton: MouseEventHandler<HTMLButtonElement> = e => {
    if (slideIndex <= 0) return
    setSlideIndex(index => index - 1)
    onClick?.(e)
  }

  return <button {...props} onClick={handleClickLeftNavButton} />
}

/*------------------------------------------------------------------------------
CarouselRightNav Component
-------------------------------------------------------------------------------*/

export interface CarouselRightNavProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const CarouselRightNav = ({ onClick, ...props }: CarouselRightNavProps) => {
  const { slideIndex, slideRef, setSlideIndex } = useCarouselContext()
  const slideLength = slideRef.current?.getSlideLength()
  const rightNavDisabled = slideLength !== undefined && slideIndex >= slideLength - 1

  const handleClickRightNavButton: MouseEventHandler<HTMLButtonElement> = e => {
    if (slideLength === undefined) return
    if (slideIndex >= slideLength - 1) return
    setSlideIndex(index => index + 1)
    onClick?.(e)
  }

  return <button disabled={rightNavDisabled} {...props} onClick={handleClickRightNavButton} />
}

export const Carousel = Object.assign(CarouselRoot, {
  Viewport: CarouselViewport,
  Item: CarouselItem,
  LeftNav: CarouselLeftNav,
  RightNav: CarouselRightNav,
})
