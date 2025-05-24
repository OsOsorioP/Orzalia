import styles from "./BoxText.module.css"

export const BoxText =({children})=>{
    return <div className={styles.boxText}>{children}</div>
}

export default BoxText;