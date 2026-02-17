import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import type { ContentProps } from './Content.type'

const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className = '', ...props }, ref) => {
    const baseClasses = 'flex w-11/12 items-center'
    const combinedClass = twMerge(baseClasses, className)

    return (
      <div {...props} ref={ref} className={combinedClass}>
        {children}
      </div>
    )
  }
)

export default Content
