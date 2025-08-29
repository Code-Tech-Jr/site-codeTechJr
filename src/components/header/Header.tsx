import global from "../../assets/styles/global.module.css"

import styles from "./Header.module.css"
import Button from "../button/Button"

function Header() {
    return (
        <div className={styles["header-container"]}>
            <div className={styles.logo}>
                <img src="src/assets/images/logo1.png" alt="logo" />
            </div>
            <div className={styles["mid-buttons"]}>
                <Button href="#" nomeDoBotao="ÍNCIO" variant="nav"></Button>
                <Button href="#" nomeDoBotao="SOBRE" variant="nav"></Button>
                <Button href="#" nomeDoBotao="SERVIÇOS" variant="nav"></Button>
                <Button href="#" nomeDoBotao="CONTATO" variant="nav"></Button>

            </div>
            <div className={styles["right-button"]}>
                <Button href="#" nomeDoBotao="FALE CONOSCO" variant="header"></Button>
            </div>
        </div>
    );
}

export default Header;