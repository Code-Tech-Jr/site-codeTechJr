import { AnimatePresence, motion } from 'framer-motion'
import imageMapResize from 'image-map-resizer'
import { useEffect, useRef, useState } from 'react'
import { DATA_DIRECTORS } from '../directorsCarousel/DirectorsCarousel.data'

function DirectorsGroup() {
  const mapRef = useRef<HTMLMapElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  useEffect(() => {
    if (mapRef.current) {
      imageMapResize(mapRef.current)
    }
  }, [])

  const activeDirector = hoveredId
    ? DATA_DIRECTORS.find((d) => d.id === hoveredId)
    : null

  return (
    <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl transition-all duration-750 ease-in-out hover:scale-105">
      <img
        src="public/images/directosGroup.jpeg"
        useMap="#image-map"
        alt="Diretoria Code Tech Jr"
        className="block h-auto w-full transition-opacity duration-500"
        style={{ opacity: hoveredId ? 0.7 : 1 }}
      />

      <map name="image-map" ref={mapRef}>
        {DATA_DIRECTORS.map((director) => (
          <area
            key={director.id}
            shape="poly"
            alt={director.name}
            coords={director.coords}
            className="cursor-pointer"
            onMouseEnter={() => setHoveredId(director.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        ))}
      </map>

      <AnimatePresence>
        {activeDirector && (
          <motion.div
            key={activeDirector.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="pointer-events-none absolute bottom-10 z-50 w-max rounded-2xl border border-white/20 bg-black/80 px-8 py-4 text-center shadow-2xl backdrop-blur-lg"
            style={{
              left: activeDirector.anchorX,
              translateX: '-50%',
            }}
          >
            <span className="mb-1 block text-[14px] font-black tracking-[0.3em] whitespace-nowrap text-white uppercase">
              {activeDirector.name}
            </span>

            <h3 className="font-montserrat animate-glow text-primary text-2xl leading-tight font-bold tracking-tighter whitespace-nowrap uppercase">
              {activeDirector.description}
            </h3>

            <div className="absolute -top-2 left-1/2 -translate-x-1/2 border-r-8 border-b-8 border-l-8 border-r-transparent border-b-black/80 border-l-transparent" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default DirectorsGroup
