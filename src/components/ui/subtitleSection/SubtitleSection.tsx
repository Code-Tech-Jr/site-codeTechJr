import { twMerge } from 'tailwind-merge'
import type { SubtitleSectionProps } from './Subtitle.type'

function SubtitleSection({
  children,
  className = '',
  ...props
}: SubtitleSectionProps) {
  const baseClasses =
    'font-russo-one text-center text-2xl text-white sm:text-4xl     lg:text-3xl xl:h-15 xl:text-4xl'
  const combinedClass = twMerge(baseClasses, className)
  return (
    <h1 {...props} className={combinedClass}>
      {children}
    </h1>
  )
}

export default SubtitleSection
