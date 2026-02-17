import { twMerge } from 'tailwind-merge'
import type { ContainerProps } from './Container.type'

function Container({
  children,
  as: Component = 'div',
  className = '',
  id = '',
  ...props
}: ContainerProps) {
  const baseClasses = 'flex w-full items-center justify-center'

  const combinedClass = twMerge(baseClasses, className)

  return (
    <Component id={id} {...props} className={combinedClass}>
      {children}
    </Component>
  )
}

export default Container
