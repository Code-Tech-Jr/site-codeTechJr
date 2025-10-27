import global from "../../assets/styles/global.module.css";
import Button from "../button/Button";
import styles from "./Hero.module.css";

import heroLogo from "../../assets/images/Hero/logo-empresa-jr.svg";

function Hero() {
  return (
    <section 
      className={styles["container-hero"]} 
      aria-label="Seção Principal"
    >
      <img
        src={heroLogo}
        alt="Logo da Code Tech Jr" 
        className={styles["hero-logo"]}
      />
      
      <h1 className={styles["hero-title"]}>
        A tecnologia que{"\n"} fala a <span className={styles["highlight"]}>sua</span> língua
      </h1>

      <div className={styles["hero-buttons"]}>
        <Button
          nomeDoBotao="NOSSOS SERVIÇOS"
          href="#ourServices"
          variant="hero"
        />
        <Button
          nomeDoBotao="ENTRE EM CONTATO"
          href="#talkToUs"
          variant="hero"
        />
      </div>
    </section>
  );
}

export default Hero;