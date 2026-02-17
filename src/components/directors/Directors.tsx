import { useBreakpoint } from '../../hooks/useBreakpoint'
import DirectorsCarousel from '../directorsCarousel/DirectorsCarousel'
import DirectorsGroup from '../directorsGroup/DirectorsGroup'
import Container from '../ui/container/Container'
import Content from '../ui/content/Content'
import TitleSection from '../ui/titleSection/TitleSection'

function Directors() {
  const { isDesktop } = useBreakpoint()
  return (
    <Container as="section" className="mb-15 h-full lg:mb-20">
      <Content className="flex-col justify-center">
        <TitleSection className="mb-8 text-center lg:mb-16">
          Nossos <span className="text-primary animate-glow">Líderes</span>
        </TitleSection>
        {!isDesktop ? <DirectorsCarousel /> : <DirectorsGroup />}
      </Content>
    </Container>
  )
}

export default Directors
