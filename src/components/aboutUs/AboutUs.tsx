import { motion } from 'framer-motion'
import aboutUsImg from '../../assets/img/aboutUsPlaceHolder.jpeg'
import Container from '../ui/container/Container'
import Content from '../ui/content/Content'
import TitleSection from '../ui/titleSection/TitleSection'

const MotionContent = motion(Content)

function AboutUs() {
  const animationProps = {
    initial: { opacity: 0, x: 200 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8 },
  }
  return (
    <Container as="section" className="relative overflow-x-hidden" id="sobre">
      <motion.div
        {...animationProps}
        className="bg-card absolute inset-y-0 right-0 -z-1 mb-2.5 w-[95vw] rounded-l-2xl shadow-xl shadow-black/20"
      />
      <MotionContent
        {...animationProps}
        className="flex flex-col gap-8 rounded-2xl p-4 md:p-6 lg:flex-row lg:items-start lg:p-10"
      >
        <div className="w-full lg:w-1/2">
          <img
            src={aboutUsImg}
            alt="Foto da empresa Code Tech Jr"
            className="block w-full rounded-3xl object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col items-start gap-8">
          <TitleSection className="">
            Sobre <br />
            <span className="text-primary">Nós</span>
          </TitleSection>

          <p className="font-montserrat text-justify text-base font-medium text-white sm:text-lg lg:text-xl xl:text-3xl">
            A Code Tech Jr é a empresa júnior de Computação composta por
            estudantes da UNESP Bauru. Nosso objetivo é oferecer soluções
            tecnológicas de qualidade por meio do desenvolvimento de sites
            profissionais, protótipos, modelos e sistemas personalizados, sempre
            alinhados às necessidades de cada cliente, além de oferecer uma
            consultoria singular.
          </p>
        </div>
      </MotionContent>
    </Container>
  )
}

export default AboutUs
