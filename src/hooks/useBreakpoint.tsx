import { useEffect, useState } from 'react'

const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)',
}

type BreakpointKey = keyof typeof breakpoints

export const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<
    BreakpointKey | 'xs'
  >('xs')

  useEffect(() => {
    const updateBreakpoint = () => {
      let active: BreakpointKey | 'xs' = 'xs'

      for (const [key, query] of Object.entries(breakpoints)) {
        if (window.matchMedia(query).matches) {
          active = key as BreakpointKey
        }
      }
      setCurrentBreakpoint(active)
    }

    updateBreakpoint()

    window.addEventListener('resize', updateBreakpoint)

    return () => window.removeEventListener('resize', updateBreakpoint)
  }, [])

  return {
    breakpoint: currentBreakpoint,
    isMobile: currentBreakpoint === 'xs' || currentBreakpoint === 'sm',
    isTablet: currentBreakpoint === 'md',
    isDesktop: ['lg', 'xl', '2xl'].includes(currentBreakpoint),
  }
}
