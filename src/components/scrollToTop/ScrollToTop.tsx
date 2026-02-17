import { useEffect, useState } from 'react'

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 15)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="animate-in fade-in zoom-in fixed right-6 bottom-6 z-99 cursor-pointer rounded-2xl bg-white/20 p-3 shadow-2xl backdrop-blur-[15px] backdrop-saturate-180 transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Voltar ao topo"
    >
      <img
        src="/images/arrowUp.svg"
        alt="flecha para cima"
        className="h-6 w-6"
      />
    </button>
  )
}

export default ScrollToTop
