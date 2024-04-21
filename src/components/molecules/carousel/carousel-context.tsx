import { Property } from '@styled-system/types/csstype'
import {
  Dispatch,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  createContext,
  useContext,
} from 'react'

export interface SlideHandle {
  getSlideLength: () => number
}

export interface CarouselContextValue {
  slideIndex: number
  setSlideIndex: Dispatch<SetStateAction<number>>
  slideRef: RefObject<SlideHandle>
  viewportWidth?: Property.Width
  itemWidth?: Property.Width
  itemGap?: Property.Gap
}

export const CarouselContext = createContext<CarouselContextValue | null>(null)

export interface CarouselContextProviderProps extends PropsWithChildren {
  value: CarouselContextValue
}

export const CarouselContextProvider = ({ value, children }: CarouselContextProviderProps) => {
  return <CarouselContext.Provider value={value}>{children}</CarouselContext.Provider>
}

export const useCarouselContext = () => {
  const ctx = useContext(CarouselContext)
  if (!ctx) throw new Error('useCarouselContext should be within CarouselContextProvider.')
  return ctx
}
