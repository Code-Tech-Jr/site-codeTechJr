import { useBreakpoint } from '../../hooks/useBreakpoint'
import InfoBlock from '../infoBlock/InfoBlock'
import { DATA_INFO } from '../infoBlock/InfoBlock.data'
import Container from '../ui/container/Container'
import Content from '../ui/content/Content'

function Footer() {
  const { isDesktop } = useBreakpoint()
  return (
    <Container as="footer" className="bg-footer">
      <Content className="lg:justify- flex flex-col items-center justify-center pt-10 lg:mb-10 lg:flex-row lg:justify-between">
        <div className="">
          <div className="font-montserrat mb-5 text-center text-white lg:text-left">
            © Code Tech Junior – 2026 | Todos os direitos reservados
            <a
              href=""
              className="hover:text-primary hidden cursor-pointer transition-colors"
            >
              {' '}
              | Política de Privacidade
            </a>
          </div>

          <div className="flex w-full flex-row flex-wrap items-center justify-center gap-[1.5em] sm:gap-[2em] lg:items-start lg:justify-start lg:gap-5">
            {isDesktop && (
              <div className="mb-4 flex w-full items-center gap-3 text-xl font-bold text-white">
                <img
                  src="public/images/favicon.png"
                  className="w-20"
                  alt="Favicon"
                />
                <span className="text-3xl tracking-widest">CODE TECH JR</span>
              </div>
            )}
            <img
              src="public/images/logo.png"
              className="h-50 w-auto object-contain lg:hidden lg:w-full"
              alt="Logo Code Tech Jr"
            />
            <img
              src="public/images/logoUnesp.svg"
              className="hidden h-10 w-auto object-contain sm:h-15"
              alt="Logo Unesp"
            />
            <img
              src="public/images/logoFc.svg"
              className="hidden h-10 w-auto object-contain sm:h-15"
              alt="Logo Faculdade de Ciências"
            />
            <img
              src="public/images/logoDco.svg"
              className="hidden h-10 w-auto object-contain sm:h-15"
              alt="Logo do Departamento de Computação"
            />
          </div>
        </div>

        <div className="mt-10 lg:w-1/3">
          <p className="font-montserrat mb-8 text-center text-2xl font-semibold text-white uppercase md:text-2xl lg:text-left">
            Contato
          </p>
          <div className="flex flex-col items-center">
            {DATA_INFO &&
              DATA_INFO.map((area) => (
                <InfoBlock
                  key={area.id}
                  img={area.img}
                  link={area.link}
                  text={area.text}
                />
              ))}
          </div>
        </div>
      </Content>
    </Container>
  )
}

export default Footer
