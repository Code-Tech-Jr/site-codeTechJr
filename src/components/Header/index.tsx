import "../../assets/styles/global.css"
import "./style.css"
import Button from "../Button/index"

function Header() {
    return (
        <div className="header-container">
            <div className="logo">
                <img src="src/assets/images/logo1.png" alt="logo" />
            </div>
            <div className="mid-buttons">
                <Button href="#" nomeDoBotao="ÍNCIO" variant="nav"></Button>
                <Button href="#" nomeDoBotao="SOBRE" variant="nav"></Button>
                <Button href="#" nomeDoBotao="SERVIÇOS" variant="nav"></Button>
                <Button href="#" nomeDoBotao="CONTATO" variant="nav"></Button>

            </div>
            <div className="right-button">
                <Button href="#" nomeDoBotao="FALE CONOSCO" variant="header"></Button>
            </div>
        </div>
    );
}

export default Header;