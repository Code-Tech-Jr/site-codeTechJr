import ContactForm from '../contactForm/ContatcForm'
import InfoBlock from '../infoBlock/InfoBlock'
import { DATA_INFO } from '../infoBlock/InfoBlock.data'
import Container from '../ui/container/Container'
import Content from '../ui/content/Content'
import TitleSection from '../ui/titleSection/TitleSection'
function TalkToUs() {
  return (
    <Container as="section" id="contato" className="mb-20">
      <Content className="relative flex-col gap-10 md:flex-row md:gap-30">
        <img
          className="animate-glow absolute top-1/2 left-1/2 w-70 -translate-x-1/2 -translate-y-1/2 opacity-15"
          src="src/assets/icons/favicon.png"
          alt=""
        />
        <div className="w-full md:w-1/2">
          <TitleSection className="mb-7">
            Fale <span className="text-primary animate-glow"> Conosco</span>
          </TitleSection>

          <p className="font-montserrat mb-8 text-left text-sm leading-relaxed font-normal text-white sm:text-base lg:text-xl">
            Quer trabalhar em conjunto? Preencha o formulário e entraremos em
            contato em breve! Será um prazer falar com você.
          </p>

          <div className="mb-10 w-full">
            {DATA_INFO.map((area) => (
              <InfoBlock
                key={area.id}
                img={area.img}
                link={area.link}
                text={area.text}
              />
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <ContactForm />
        </div>
      </Content>
    </Container>
  )
}

export default TalkToUs
