import type { ReactNode } from 'react'

export interface ContentProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode
}
