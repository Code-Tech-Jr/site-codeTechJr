import global from "../../assets/styles/global.module.css"
import DirectorCard from "./DirectorCard"
import styles from  "./Directors.module.css"

function Directors() {
    return (
        <div className={styles["director"]}>
        <div className={styles["lideres-title"]}>NOSSOS LÍDERES</div>
        <div className={styles["container-directors"]}>
            <DirectorCard imgSrc="src/assets/images/directorPlaceHolder.png" position="PRESIDENTE" name="FRANJINHA"></DirectorCard>
            <DirectorCard imgSrc="src/assets/images/directorPlaceHolder.png" position="VICE-PRESIDENTE" name="LUIS ROS"></DirectorCard>
            <DirectorCard imgSrc="src/assets/images/directorPlaceHolder.png" position="DIRETOR FINANCEIRO" name="KAUÃ"></DirectorCard>
            <DirectorCard imgSrc="src/assets/images/directorPlaceHolder.png" position="DIRETORA DE MARKETING" name="SOFIA"></DirectorCard>
            <DirectorCard imgSrc="src/assets/images/directorPlaceHolder.png" position="DIRETOR DE PROJETOS" name="MÁRIO"></DirectorCard>
        </div>
        </div>
    )
}

export default Directors