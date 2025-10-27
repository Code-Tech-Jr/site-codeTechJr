import styles from "./AboutUs.module.css";
import Card from "./Card.tsx";
import aboutUsPlaceholderImg from "../../assets/images/aboutUsPlaceHolder.jpeg";

function AboutUs() {
  return (
    <section className={styles["container-about-us"]} id="aboutUs">
      <div className={styles["about-us-container"]}>
        <Card
          imgSrc={aboutUsPlaceholderImg}
          altText="Foto da equipe da Code Tech Jr"           
          title={<>SOBRE<br/>NÓS</>}
          text="A Code Tech Jr é a empresa júnior de Computação da UNESP Bauru. Nosso objetivo é oferecer soluções tecnológicas de qualidade por meio do desenvolvimento de sites profissionais, protótipos, modelos e sistemas personalizados, sempre alinhados às necessidades de cada cliente, além de oferecer uma consultoria singular."
        />
      </div>
    </section>
  );
}

export default AboutUs;