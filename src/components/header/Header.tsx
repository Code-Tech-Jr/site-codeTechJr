import logo from '../../../public/images/logo.png'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import Navbar from '../navbar/Navbar'
import Button from '../ui/button/Button'
import Container from '../ui/container/Container'
import Content from '../ui/content/Content'

function Header() {
  const { isDesktop } = useBreakpoint()

  const scrollToContact = () => {
    const section = document.querySelector('#contato')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Container
      id="inicio"
      as="header"
      className="absolute top-0 left-0 z-50 w-full"
    >
      <Content className="items-center justify-between">
        <Navbar />
        {isDesktop && (
          <img src={logo} alt="logo CodeTechJr" className="animate-glow w-52" />
        )}

        {isDesktop && (
          <Button
            onClick={scrollToContact}
            variant="header"
            className="font-semibold"
          >
            Fale Conosco
          </Button>
        )}
      </Content>
    </Container>
  )
}

export default Header
