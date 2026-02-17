import type { ElementType, ReactNode } from 'react'

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: ElementType
}
