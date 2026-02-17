import { useState } from 'react'
import type { InfoBlockProps } from './InfoBlock.type'

function InfoBlock({ img, text, link }: InfoBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleAction = async (e: React.MouseEvent) => {
    if (!link) {
      e.preventDefault()
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <div className="mb-6 w-full">
      <a
        href={link || '#'}
        onClick={handleAction}
        className="group hover:text-primary flex w-fit items-center gap-3 text-white transition-colors"
        target="_blank"
      >
        <img src={img} alt="" className="mt-1 w-6 shrink-0 sm:w-7 lg:w-9" />
        <div className="flex flex-col">
          <p className="font-montserrat text-sm font-semibold break-all uppercase sm:text-base">
            {text}
          </p>
          {copied && (
            <span className="text-primary animate-pulse text-[16px]">
              Copiado!
            </span>
          )}
        </div>
      </a>
    </div>
  )
}

export default InfoBlock
