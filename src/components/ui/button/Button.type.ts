import type { ReactNode } from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'header' | 'hero' | 'form'
  children: ReactNode
}
