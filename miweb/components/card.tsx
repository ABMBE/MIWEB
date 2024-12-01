import styles from "../styles/card.module.scss";
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
        <img src={photo} alt={`${name}'s photo`} className={styles.photo} />
        </div>
    );
};

export default Card;