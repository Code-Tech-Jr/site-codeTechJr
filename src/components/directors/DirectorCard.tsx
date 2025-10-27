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
    const altDescription = `Foto de ${name}, ${position}`;

    return(
        <SpotlightCard className={styles["director-card-container"]} spotlightColor="rgba(255, 255, 255, 0.25)">
            <img src={imgSrc} className={styles["director-card-image"]} alt={altDescription} />
            <p className={styles["director-card-position"]}>{position}</p>            
            <h3 className={styles["director-card-name"]}>{name}</h3>

        </SpotlightCard>
    )
}

export default DirectorCard