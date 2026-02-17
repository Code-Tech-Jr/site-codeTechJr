import { motion } from 'motion/react'
import Container from '../ui/container/Container'
import Content from '../ui/content/Content'
import TitleSection from '../ui/titleSection/TitleSection'
import CardOurServices from './CardOurServices'
import { DATA_OUR_SERVICES } from './OurSevices.data'
function OurServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }
  return (
    <Container as="section" className="mt-35" id="servicos">
      <Content className="mb-6 flex-col gap-10 lg:gap-20">
        <TitleSection className="text-center">
          nossos <br />{' '}
          <span className="text-primary animate-glow"> Serviços </span>
        </TitleSection>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-7 lg:grid-cols-2 2xl:grid-cols-4 2xl:gap-1"
        >
          {DATA_OUR_SERVICES.map((area) => (
            <CardOurServices
              key={area.id}
              source={area.img}
              title={area.title}
              text={area.text}
            />
          ))}
        </motion.div>
      </Content>
    </Container>
  )
}

export default OurServices
