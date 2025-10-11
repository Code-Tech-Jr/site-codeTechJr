import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import DirectorCard from "./DirectorCard"
import styles from "./Directors.module.css"
import placeholder from "../../assets/images/directorPlaceHolder.png"

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return width
}

function Directors() {
  const width = useWindowWidth()

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false, 
    align: width < 768 ? "center" : "start",
  })

  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const updateButtons = useCallback(() => {
    if (!emblaApi) return
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    updateButtons()
    emblaApi.on("select", updateButtons)
    emblaApi.on("resize", updateButtons)

    return () => {
      emblaApi.off("select", updateButtons)
      emblaApi.off("resize", updateButtons)
    }
  }, [emblaApi, updateButtons])

  const directors = [
    { name: "FRANJINHA", position: "PRESIDENTE" },
    { name: "LUIS ROS", position: "VICE-PRESIDENTE" },
    { name: "KAUÃ", position: "DIRETOR FINANCEIRO" },
    { name: "SOFIA", position: "DIRETORA DE MARKETING" },
    { name: "MÁRIO", position: "DIRETOR DE PROJETOS" },
  ]

  if (width > 1024) {
    return (
      <div className={styles["director"]}>
        <div className={styles["lideres-title"]}>NOSSOS LÍDERES</div>
        <div className={styles["container-directors"]}>
          {directors.map((d) => (
            <DirectorCard key={d.name} imgSrc={placeholder} position={d.position} name={d.name} />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className={styles["director"]}>
      <div className={styles["lideres-title"]}>NOSSOS LÍDERES</div>

      <div className={styles["carousel-wrapper"]}>
        <button
          className={styles["embla__button"]}
          onClick={scrollPrev}
          style={{ backgroundColor: canScrollPrev ? "#01C38E" : "#555" }}
        >
          &#8592;
        </button>

        <div className={styles["embla"]} ref={emblaRef}>
          <div className={styles["embla__container"]}>
            {directors.map((d) => (
              <div className={styles["embla__slide"]} key={d.name}>
                <DirectorCard imgSrc={placeholder} position={d.position} name={d.name} />
              </div>
            ))}
          </div>
        </div>

        <button
          className={styles["embla__button"]}
          onClick={scrollNext}
          style={{ backgroundColor: canScrollNext ? "#01C38E" : "#555" }}
        >
          &#8594;
        </button>
      </div>
    </div>
  )
}

export default Directors
