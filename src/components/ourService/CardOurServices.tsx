import { motion } from 'motion/react'
import SubtitleSection from '../ui/subtitleSection/SubtitleSection'
import type { CardOurServiceProps } from './CardOurServiceProps.type'

function CardOurServices({ source, title, text }: CardOurServiceProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  }
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
      }}
      className="bg-card hover:bg-shadow rounded-2xl transition-all duration-300 2xl:rounded-xl 2xl:hover:shadow-2xl"
    >
      <div className="flex h-full flex-col items-center gap-6 p-6 md:flex-row lg:flex-col lg:justify-between">
        <div className="flex aspect-square w-[40%] max-w-55 min-w-35 shrink-0 items-center justify-center rounded-full border-[clamp(4px,1vw,8px)] border-solid border-white md:w-[25%] lg:w-[60%]">
          <img
            src={source}
            alt={title}
            className="h-full w-full object-contain p-[15%]"
          />
        </div>

        <div className="flex h-full flex-1 flex-col gap-7 md:items-start lg:items-center">
          <SubtitleSection className="md:text-left lg:flex lg:items-center lg:text-center">
            {title}
          </SubtitleSection>

          <p className="font-montserrat text-justify text-sm leading-relaxed font-normal text-white sm:text-base lg:text-2xl">
            {text}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default CardOurServices
