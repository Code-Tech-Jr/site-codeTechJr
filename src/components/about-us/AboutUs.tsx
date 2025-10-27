import styles from "./AboutUs.module.css"
import Card from "./Card.tsx"
import { useState, useEffect } from "react";

function AboutUs() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return(
        <div className={styles["container-about-us"]} id="aboutUs">  
            <div className={styles["about-us-container"]}>
                <Card 
                    imgSrc="src/assets/images/aboutUsPlaceHolder.jpeg" 
                    title={
                        screenWidth > 1024 
                        ?  <>SOBRE<br/>NÓS</>
                        :  "SOBRE NÓS" 
                    }
                    text="A Code Tech Jr é a empresa júnior de Computação da UNESP Bauru. Nosso objetivo é oferecer soluções tecnológicas de qualidade por meio do desenvolvimento de sites profissionais, protótipos, modelos e sistemas personalizados, sempre alinhados às necessidades de cada cliente, além de oferecer uma consultoria singular.">
                </Card>
            </div>
        </div>
    )
}

export default AboutUs