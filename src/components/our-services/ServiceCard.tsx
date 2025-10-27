import styles from "./ServiceCard.module.css";
import CircledImage from "./CircledImage";

interface ServiceCardProps {
  iconSrc: string;
  title: string;
  description: string;
}

function ServiceCard({ iconSrc, title, description }: ServiceCardProps) {
  return (
    <div className={styles["service-card"]}>
      
      <CircledImage src={iconSrc} alt={title} />
      
      <h3 className={styles["title"]}>{title}</h3>

      <div className={styles["description-box"]}>
        <p className={styles["description"]}>{description}</p>
      </div>
    </div>
  );
}

export default ServiceCard;