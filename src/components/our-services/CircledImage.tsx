import React from 'react';
import styles from './CircledImage.module.css';

interface CircledImageProps {
    src: string;
    size: number;
    borderWidth: number;
}

const CircledImage: React.FC<CircledImageProps> = ({
    src,
    size = 150,
    borderWidth = 5,
}) => {
    const wrapperStyle = {
        width: `${size}px`,
        height: `${size}px`,
    };

    const imageStyle = {
        width: `${size/2}px`,
        height: `${size/2}px`,
    };

    const borderStyle = {
        '--border-width': `${borderWidth}px`,
    } as React.CSSProperties;

    return (
        <div className={styles.imageWrapper} style={{ ...wrapperStyle, ...borderStyle }}>
            <img src={src} className={styles.image} style={imageStyle} />
        </div>
    );
};

export default CircledImage;