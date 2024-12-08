import styles from "../styles/card.module.scss";
import Image from 'next/image';
import React from "react";
type CardProps = {
    name: string;
    description: string;
    photo:string;
};
const Card = ({ name, description, photo}: CardProps) => {
    return (
        <div className={styles.profileCard}>
        <div className={styles.header}>{name}</div>
        <div className={styles.description}>{description}</div>
        <Image src={photo} alt={`${name}'s photo`} width={500} height={500} className={styles.photo} />
        </div>
    );
};

export default Card;