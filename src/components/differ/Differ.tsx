import { motion } from 'motion/react'
import Container from '../ui/container/Container'
import Content from '../ui/content/Content'
import TitleSection from '../ui/titleSection/TitleSection'
import CardDiffer from './CardDiffer'
import { DATA_DIFFER } from './Differ.data'
const MotionContent = motion(Content)

function Differ() {
  const animationProps = {
    initial: { opacity: 0, x: 200 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8 },
  }
  return (
    <Container
      as="section"
      className="relative mt-30 mb-30 overflow-x-hidden overflow-y-hidden"
    >
      <motion.div
        {...animationProps}
        className="xl:bg-card mxl:b-2.5 xl:absolute xl:inset-y-0 xl:right-0 xl:-z-1 xl:w-[63vw] xl:rounded-l-2xl xl:shadow-xl xl:shadow-black/20 2xl:w-[70vw]"
      ></motion.div>

      <MotionContent
        {...animationProps}
        className="relative flex-col justify-center text-center xl:flex-row xl:items-center xl:justify-center xl:gap-20"
      >
        <TitleSection className="mb-16 xl:mb-0 xl:flex xl:flex-col xl:items-start xl:text-left">
          Nossos
          <br />
          <span className="animate-glow text-primary sm:flex sm:flex-row xl:block">
            <span>Dife</span>
            <br className="sm:block md:hidden xl:block" />
            <span>ren</span>
            <br className="sm:block md:hidden xl:block" />
            <span>ciais</span>
          </span>
        </TitleSection>
        <div className="bg-card flex w-[90vw] flex-col items-center justify-center gap-8 rounded-2xl p-4 lg:col-span-3 lg:grid lg:grid-cols-3 xl:bg-transparent">
          {DATA_DIFFER.map((area) => (
            <CardDiffer
              key={area.id}
              source={area.img}
              title={area.text}
              className="w-full"
            />
          ))}
        </div>
      </MotionContent>
    </Container>
  )
}

export default Differ
