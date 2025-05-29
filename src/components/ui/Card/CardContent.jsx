import styles from "./Card.module.css";

const CardContent =({children, className=""})=>{
    return (
        <div className={`${styles.cardContent} ${className}`}>
            {children}
        </div>
    )
}

export default CardContent;