import { PropsWithChildren, ReactNode } from 'react'

export interface ReplaceProps extends PropsWithChildren {
  on: boolean
  fallback: ReactNode
}

export const Replace = ({ on, fallback, children }: ReplaceProps) => {
  if (on) return fallback
  return children
}
