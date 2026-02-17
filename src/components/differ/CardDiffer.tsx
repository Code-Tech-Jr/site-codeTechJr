import { twMerge } from 'tailwind-merge'
import SubtitleSection from '../ui/subtitleSection/SubtitleSection'
import type { CardDifferProps } from './CardDiffer.type'

function CardDiffer({
  title,
  source,
  className = '',
  ...props
}: CardDifferProps) {
  const baseClasses =
    'hover:scale-[110%] transition-all duration-500   mb-4 flex flex-col items-center text-center w-full h-auto min-h-fit p-4'
  const combinedClass = twMerge(baseClasses, className)

  return (
    <div {...props} className={combinedClass}>
      <div className="flex w-full max-w-[320px] items-center justify-center">
        <img
          className="h-auto max-h-62.5 w-full object-contain"
          src={source}
          alt={title}
        />
      </div>

      <SubtitleSection className="w-full">{title}</SubtitleSection>
    </div>
  )
}

export default CardDiffer
