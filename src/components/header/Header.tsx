import { useState, useEffect } from "react";
import global from "../../assets/styles/global.module.css";
import styles from "./Header.module.css";
import Button from "../button/Button";
import { useIsAtTop } from "../../hooks/use-is-at-top";

function Header() {
  const isAtTop = useIsAtTop();
  const [menuOpen, setMenuOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth > 1350) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 768;
  const isTablet = screenWidth <= 1350 && screenWidth > 768;
  const isDesktop = screenWidth > 1350; // Mais fácil de ler

  return (
    <div className={styles["header-container"]} id="header">
      
      {isDesktop && (
        <div className={styles.logo}>
          <img src="src/assets/images/logo1.png" alt="logo" />
        </div>
      )}

      {(isTablet || isMobile) && (
        <div
          className={`${isAtTop ? styles["at-top-icon"] : styles["icon"]}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img src="src/assets/icons/menuIcon.svg" alt="icon" />
        </div>
      )}

      {(isDesktop || menuOpen) && (
        <div className={`${isAtTop ? styles["at-top"] : styles["mid-buttons"]}`}>
          <Button
            href="#header"
            nomeDoBotao="INÍCIO"
            variant="nav"
            onClick={() => (isTablet || isMobile) && setMenuOpen(false)}
          />
          <Button
            href="#aboutUs"
            nomeDoBotao="SOBRE"
            variant="nav"
            onClick={() =>(isTablet || isMobile) && setMenuOpen(false)}
          />
          <Button
            href="#ourServices"
            nomeDoBotao="SERVIÇOS"
            variant="nav"
            onClick={() => (isTablet || isMobile) && setMenuOpen(false)}
          />
          <Button
            href="#talkToUs"
            nomeDoBotao="CONTATO"
            variant="nav"
            onClick={() => (isTablet || isMobile) && setMenuOpen(false)}
          />
        </div>
      )}

      {isDesktop && (
        <div className={styles["right-button"]}>
          <Button href="#talkToUs" nomeDoBotao="FALE CONOSCO" variant="header" />
        </div>
      )}
    </div>
  );
}

export default Header;
