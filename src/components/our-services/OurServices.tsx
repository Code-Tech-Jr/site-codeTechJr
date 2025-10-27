import styles from "./OurServices.module.css";
import ServiceCard from "./ServiceCard.tsx";

import iconConsultoria from "../../assets/images/OurServices/consultoria.png";
import iconDevWeb from "../../assets/images/OurServices/desenvolvimentoWeb.png";
import iconSistemas from "../../assets/images/OurServices/sistemas.png";
import iconPrototipacao from "../../assets/images/OurServices/prototipacao.png";

function OurServices() {
  return (
    <section className={styles["container-our-services"]} id="ourServices">
      <h2 className={styles["our-services-title"]}>NOSSOS SERVIÇOS</h2>
      <ul className={styles["services-container"]}>
        
        <li>
          <ServiceCard
            iconSrc={iconConsultoria} 
            title="CONSULTORIA"
            description="Organizamos e estruturamos ideias em modelos claros, fornecendo a base necessária para o desenvolvimento de soluções eficazes"
          />
        </li>

        <li>
          <ServiceCard
            iconSrc={iconDevWeb} 
            title="DESENVOLVIMENTO WEB"
            description="Construímos sites modernos, responsivos e de fácil navegação, que fortalecem a presença digital da sua marca e facilitam o relacionamento com seus clientes."
          />
        </li>

        <li>
          <ServiceCard
            iconSrc={iconSistemas}
            title="SISTEMAS"
            description="Desenvolvemos sistemas sob medida para otimizar processos, melhorar a gestão e aumentar a eficiência operacional da sua empresa."
          />
        </li>

        <li>
          <ServiceCard
            iconSrc={iconPrototipacao}
            title="PROTOTIPAGEM E MODELAGEM"
            description="Organizamos e estruturamos ideias em modelos claros, fornecendo a base necessária para o desenvolvimento de soluções eficazes"
          />
        </li>
      </ul>
    </section>
  );
}

export default OurServices;