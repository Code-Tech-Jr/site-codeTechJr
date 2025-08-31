import global from "../../assets/styles/global.module.css"
import SpotlightCard from './SpotlightCard';
import styles from "./DirectorCard.module.css"

interface DirectorCardProps
{
    imgSrc: string;
    position: string;
    name: string;
}

function DirectorCard({ imgSrc, position, name }: DirectorCardProps)
{
    return(
        <SpotlightCard className={styles["director-card-container"]} spotlightColor="rgba(255, 255, 255, 0.25)">
            <img src={imgSrc} className={styles["director-card-image"]}></img>
            <div className={styles["director-card-position"]}>{position}</div>
            <div className={styles["director-card-name"]}>{name}</div>
        </SpotlightCard>
    )
}

export default DirectorCard