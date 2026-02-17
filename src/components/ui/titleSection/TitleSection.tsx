import { twMerge } from 'tailwind-merge'
import type { TitleSectionProps } from './TitleSection.type'

function TitleSection({
  children,
  className = '',
  ...props
}: TitleSectionProps) {
  const baseClasses =
    'font-russo-one text-6xl leading-[0.8] text-white uppercase md:text-7xl xl:text-8xl'
  const combinedClass = twMerge(baseClasses, className)
  return (
    <h1 {...props} className={combinedClass}>
      {children}
    </h1>
  )
}

export default TitleSection
