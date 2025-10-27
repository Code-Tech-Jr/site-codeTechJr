import React from 'react';
import styles from './CircledImage.module.css';

interface CircledImageProps {
    src: string;
}

const CircledImage: React.FC<CircledImageProps> = ({ src }) => {
    return (
        <div className={styles.imageWrapper}>
            <img src={src} className={styles.image} alt="" />
        </div>
    );
};

export default CircledImage;