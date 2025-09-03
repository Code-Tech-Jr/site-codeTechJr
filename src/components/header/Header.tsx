import global from "../../assets/styles/global.module.css"
import styles from "./Header.module.css"
import Button from "../button/Button"
import {useIsAtTop} from "../../hooks/use-is-at-top"

function Header() {

    const isAtTop = useIsAtTop();
    return (
        <div className={styles["header-container"]} id="header">
            <div className={styles.logo}>
                <img src="src/assets/images/logo1.png" alt="logo" />
            </div>
            <div className={`${isAtTop ? styles["at-top"] : styles["mid-buttons"]}`}>                
                <Button href="#header" nomeDoBotao="INÍCIO" variant="nav"></Button>
                <Button href="#aboutUs" nomeDoBotao="SOBRE" variant="nav"></Button>
                <Button href="#ourServices" nomeDoBotao="SERVIÇOS" variant="nav"></Button>
                <Button href="#talkToUs" nomeDoBotao="CONTATO" variant="nav"></Button>

            </div>
            <div className={styles["right-button"]}>
                <Button href="#talkToUs" nomeDoBotao="FALE CONOSCO" variant="header"></Button>
            </div>
        </div>
    );
}

export default Header;