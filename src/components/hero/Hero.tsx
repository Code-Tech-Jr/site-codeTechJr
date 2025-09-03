import global from "../../assets/styles/global.module.css"
import Button from "../button/Button"
import styles from "./Hero.module.css"

function Hero() {
    return (
        <div className={styles["container-hero"]}>
            <h1 className={styles["hero-title"]}>A tecnologia que{'\n'} fala a <span className={styles["highlight"]}>sua</span> língua</h1>
            <div className={styles["hero-buttons"]}>
                <Button nomeDoBotao="NOSSOS SERVIÇOS" href="#ourServices" variant="hero"/>
                <Button nomeDoBotao="ENTRE EM CONTATO" href="#talkToUs" variant="hero"/>
            </div>
        </div>
        
    )
}

export default Hero