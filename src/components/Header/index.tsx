import "../../assets/styles/global.css"
import "./style.css"

function Header() {
    return (
        <div className="container header-container">
            <div className="logo">
                <img src="src/assets/images/logo1.png" alt="logo" />
            </div>
            <div className="mid-buttons">
                <a className="nav buttons">ÍNICIO</a>
                <a className="nav buttons">SOBRE</a>
                <a className="nav buttons">SERVIÇOS</a>
                <a className="nav buttons">CONTATO</a>
            </div>
            <div className="right-button buttons">
                FALE CONOSCO
            </div>
        </div>
    );
}

export default Header;