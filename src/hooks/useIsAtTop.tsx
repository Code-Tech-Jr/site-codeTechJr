import { useEffect, useState } from 'react'

export function useIsAtTop(): boolean {
  const [isAtTop, setIsAtTop] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0)
    }

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return isAtTop
}
