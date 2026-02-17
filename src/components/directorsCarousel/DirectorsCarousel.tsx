import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { DATA_DIRECTORS } from './DirectorsCarousel.data'

function DirectorsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const nextDirector = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % DATA_DIRECTORS.length)
  }

  const prevDirector = () => {
    setDirection(-1)
    setCurrentIndex(
      (prev) => (prev - 1 + DATA_DIRECTORS.length) % DATA_DIRECTORS.length
    )
  }

  const currentDirector = DATA_DIRECTORS[currentIndex]
  return (
    <div className="flex flex-col items-center justify-center gap-8 p-4">
      <div className="perspective-2000">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            initial={{ rotateY: direction * 90, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            exit={{ rotateY: direction * -90, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            style={{ transformStyle: 'preserve-3d' }}
            className="relative h-full w-full"
          >
            <div
              className="relative aspect-square w-[85vw] max-w-125 overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl ring-1 ring-white/20"
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img
                src={currentDirector.img}
                alt={currentDirector.name}
                className="block h-full w-full object-cover object-top"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent" />

              <div className="font-montserrat absolute bottom-0 w-full p-6 text-white uppercase">
                <div className="flex flex-col items-end gap-0.5">
                  <span className="text-right text-[10px] font-black tracking-[0.2em] text-white">
                    {currentDirector.name}
                  </span>
                  <h3 className="animate-glow text-primary text-lg font-bold tracking-normal">
                    {currentDirector.description}
                  </h3>
                  <div className="bg-primary mt-2 h-0.5 w-12 self-end opacity-80" />
                </div>
              </div>
            </div>

            <div
              className="absolute inset-0 flex items-center justify-center rounded-[2.5rem] border border-white/10 bg-slate-900"
              style={{
                transform: 'rotateY(180deg)',
                backfaceVisibility: 'hidden',
              }}
            >
              <img
                src="public/images/favicon.png"
                className="w-16 opacity-10"
                alt=""
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={prevDirector}
          className="hover:bg-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white shadow-lg transition-all hover:scale-90 hover:text-black"
        >
          <ChevronLeft size={24} />
        </button>

        <span className="font-montserrat text-xs font-bold tracking-widest text-white/50">
          {currentIndex + 1} / {DATA_DIRECTORS.length}
        </span>

        <button
          onClick={nextDirector}
          className="hover:bg-primary flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-slate-900 text-white shadow-lg transition-all hover:scale-90 hover:text-black"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export default DirectorsCarousel
