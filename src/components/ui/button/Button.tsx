import { twMerge } from 'tailwind-merge'
import type { ButtonProps } from './Button.type'

const buttonVariants = {
  header:
    'hover:shadow-glow active:scale-90 uppercase p-2.5 border-primary text-xl border-solid border-[2px] text-primary hover:bg-primary hover:text-white font-montserrat',
  hero: 'hover:shadow-primary/40 border-primary font-montserrat from-primary to-bg hover:text-primary w-60 border-[3px] border-solid bg-linear-to-r from-50% to-50% bg-size-[200%_100%] bg-position-[0_0] p-5 text-center text-2xl font-semibold text-white uppercase shadow-lg shadow-black/30 hover:bg-position-[100%_0] active:scale-90 xl:text-3xl',
  form: 'hover:shadow-primary/40 border-primary font-montserrat from-primary to-bg hover:text-primary w-full border-[3px] border-solid bg-linear-to-r from-50% to-50% bg-size-[200%_100%] bg-position-[0_0] p-3 text-center text-normal font-semibold text-white uppercase shadow-lg shadow-black/30 hover:bg-position-[100%_0] active:scale-90',
}

function Button({ variant, className = '', children, ...props }: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center  cursor-pointer transition-all ease-in-out select-none active:opacity-80 duration-500'

  const variantClasses = variant ? buttonVariants[variant] : ''

  const combinedClass = twMerge(baseClasses, variantClasses, className)

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  )
}

export default Button
