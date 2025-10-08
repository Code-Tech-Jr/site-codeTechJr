import styles from "./OurServices.module.css"
import ServiceCard from "./ServiceCard.tsx"

function OurServices(){
    return (
        <div className={styles["container-our-services"]} id="ourServices">

            <div className={styles["our-services-title"]}>NOSSOS SERVIÇOS</div>
            
            <div className={styles["services-container"]} id="ourServices">
                <ServiceCard iconSrc = "src/assets/images/OurServices/consultoria.png"
                    title = "CONSULTORIA" 
                    description = "Organizamos e estruturamos ideias em modelos claros, fornecendo a base necessária para o desenvolvimento de soluções eficazes">
                </ServiceCard>

                <ServiceCard iconSrc = "src/assets/images/OurServices/desenvolvimentoWeb.png"
                    title = "DESENVOLVIMENTO WEB" 
                    description = "Construímos sites modernos, responsivos e de fácil navegação, que fortalecem a presença digital da sua marca e facilitam o relacionamento com seus clientes.">
                </ServiceCard>

                <ServiceCard iconSrc = "src/assets/images/OurServices/sistemas.png"
                    title = "SISTEMAS" 
                    description = "Desenvolvemos sistemas sob medida para otimizar processos, melhorar a gestão e aumentar a eficiência operacional da sua empresa.">
                </ServiceCard>

                <ServiceCard iconSrc = "src/assets/images/OurServices/prototipacao.png"
                    title = "PROTOTIPAGEM E MODELAGEM" 
                    description = "Organizamos e estruturamos ideias em modelos claros, fornecendo a base necessária para o desenvolvimento de soluções eficazes">
                </ServiceCard>
            </div>
        </div>
    )
}

export default OurServices