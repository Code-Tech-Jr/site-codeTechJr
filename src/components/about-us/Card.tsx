import styles from "./Card.module.css"
import type { CardProps } from './Card.types.ts';

function Card({ imgSrc, title, text }: CardProps) {
    return(
        <div className={styles["card"]}>
            {/* <div className={styles["image-wrapper"]}> */}
                <img src={imgSrc} className={styles["image"]} />
            {/* </div> */}
            <div className={styles["text-wrapper"]}>
                <h2 className={styles["title"]}>{title}</h2>
                <p className={styles["description"]}>{text}</p>
            </div>
        </div>
    )
}

export default Card