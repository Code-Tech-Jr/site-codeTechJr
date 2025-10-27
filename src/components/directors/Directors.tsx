import React, { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import DirectorCard from "./DirectorCard"
import styles from "./Directors.module.css"
import presidenteImg from "../../assets/images/Directors/presidente.png"
import vicePresidenteImg from "../../assets/images/Directors/vice_presidente.png" // (Estou supondo os nomes dos arquivos)
import financeiroImg from "../../assets/images/Directors/diretor_financeiro.png"
import marketingImg from "../../assets/images/Directors/diretor_marketing.png"
import projetosImg from "../../assets/images/Directors/diretor_projeto.png"

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
    { name: "FRANJINHA", position: "PRESIDENTE" , src : presidenteImg},
    { name: "LUIS ROS", position: "VICE-PRESIDENTE", src : vicePresidenteImg},
    { name: "KAUÃ", position: "DIRETOR FINANCEIRO",  src : financeiroImg },
    { name: "SOFIA", position: "DIRETORA DE MARKETING" , src : marketingImg},
    { name: "MÁRIO", position: "DIRETOR DE PROJETOS" , src : projetosImg},
  ]

  if (width > 1440) {
    return (
      <section className={styles["director"]}>
        <h2 className={styles["lideres-title"]}>NOSSOS LÍDERES</h2>
        <ul className={styles["container-directors"]}>
          {directors.map((d) => (
            <li key={d.name}>
              <DirectorCard imgSrc={d.src} position={d.position} name={d.name} />
            </li>
          ))}
        </ul>
      </section>
    )
  }

  return (
    <section className={styles["director"]}>
      <h2 className={styles["lideres-title"]}>NOSSOS LÍDERES</h2>

      <div className={styles["carousel-wrapper"]}>
        <button
          className={styles["embla__button"]}
          onClick={scrollPrev}
          style={{ backgroundColor: canScrollPrev ? "#01C38E" : "#555" }}
          aria-label="Ver diretores anteriores"
          disabled={!canScrollPrev}             
        >
          &#8592;
        </button>

        <div className={styles["embla"]} ref={emblaRef} aria-label="Carrossel de diretores">
          <ul className={styles["embla__container"]}>
            {directors.map((d) => (
              <li className={styles["embla__slide"]} key={d.name}>
                <DirectorCard imgSrc={d.src} position={d.position} name={d.name} />
              </li>
            ))}
          </ul>
        </div>

        <button
          className={styles["embla__button"]}
          onClick={scrollNext}
          style={{ backgroundColor: canScrollNext ? "#01C38E" : "#555" }}
          aria-label="Ver próximos diretores" 
          disabled={!canScrollNext}            
        >
          &#8594;
        </button>
      </div>
    </section>
  )
}

export default Directors