import styles from "./ServiceCard.module.css"
import CircledImage from "./CircledImage"

interface ServiceCardProps{
    iconSrc: string;
    title: string;
    description: string;
}

function ServiceCard({ iconSrc, title, description }: ServiceCardProps){
    return (
        <div className={styles["service-card"]}>
            <CircledImage src={iconSrc} size={200} borderWidth={9}/>
            <h2 className={styles["title"]}>{title}</h2> 
            <div className={styles["description-box"]}>            
                <p className={styles["description"]}>{description}</p>
            </div>
         </div>
    )
}

export default ServiceCard