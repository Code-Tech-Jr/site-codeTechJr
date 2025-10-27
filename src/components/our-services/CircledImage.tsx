import React from 'react';
import styles from './CircledImage.module.css';

interface CircledImageProps {
  src: string;
  alt: string;
}

const CircledImage: React.FC<CircledImageProps> = ({ src, alt }) => {
  return (
    <div className={styles.imageWrapper}>
      <img src={src} className={styles.image} alt={alt} />
    </div>
  );
};

export default CircledImage;