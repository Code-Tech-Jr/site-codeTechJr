import { useBreakpoint } from '../../hooks/useBreakpoint'
import Button from '../ui/button/Button'
import Container from '../ui/container/Container'
import Content from '../ui/content/Content'

function Hero() {
  const { isDesktop } = useBreakpoint()

  const scrollToContact = () => {
    const section = document.querySelector('#contato')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToService = () => {
    const section = document.querySelector('#servicos')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <Container as="section" className="relative z-10 h-screen overflow-hidden">
      <img
        src="/images/bgHero.png"
        alt=""
        className="animate-pulse-slow absolute inset-0 z-[-1] h-screen w-full mask-[radial-gradient(circle,black_0%,transparent_70%)] object-cover"
      />
      <div className="from-bg absolute inset-x-0 bottom-0 z-[-1] h-1/2 bg-linear-to-t to-transparent" />

      <Content className="flex-col py-20">
        {!isDesktop && (
          <img
            src="/images/logo.png"
            alt="logo CodeTechJr"
            className="w-[50vw] max-w-112.5 min-w-50 drop-shadow-[0_0_15px_#01C38E66] filter"
          />
        )}
        <h1 className="font-russo-one text-center text-4xl leading-tight text-white uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] md:text-6xl xl:text-8xl">
          A tecnologia que <br /> fala a
          <span className="text-primary animate-glow"> sua </span>língua
        </h1>
        <div className="mt-9 flex flex-col gap-7 sm:flex-row md:mt-20 md:gap-14">
          <Button onClick={scrollToService} variant="hero" className="">
            Nossos
            <br /> Serviços
          </Button>
          <Button onClick={scrollToContact} variant="hero">
            Entre em <br /> contato
          </Button>
        </div>
      </Content>
    </Container>
  )
}

export default Hero
