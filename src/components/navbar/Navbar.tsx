import { useIsAtTop } from '../../hooks/useIsAtTop'

const navigationLinks = [
  { text: 'Início', href: '#inicio' },
  { text: 'Sobre', href: '#sobre' },
  { text: 'Serviços', href: '#servicos' },
  { text: 'Contato', href: '#contato' },
]

function Navbar() {
  const isAtTop = useIsAtTop()
  return (
    <nav
      className={`fixed top-16 left-1/2 z-100 flex w-[90%] max-w-xl -translate-x-1/2 items-center justify-center rounded-2xl px-3.5 py-3 transition-all duration-300 2xl:max-w-175 ${
        isAtTop
          ? 'bg-transparent backdrop-blur-none'
          : 'bg-white/20 backdrop-blur-[15px] backdrop-saturate-180'
      }`}
    >
      <div className="">
        {navigationLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`font-montserrat mx-1.5 text-base font-semibold text-white uppercase transition-all hover:-translate-y-0.5 hover:drop-shadow-[0_0_2px_#01C38E] active:scale-95 sm:mx-2 sm:text-lg md:mx-4 md:text-xl lg:mx-6 2xl:mx-8 ${link.text === 'Início' ? 'hidden md:inline-block' : 'inline-block'} `}
          >
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  )
}

export default Navbar
