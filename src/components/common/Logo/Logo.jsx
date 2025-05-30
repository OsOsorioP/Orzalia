import logo from "../../../assets/Logo.png"
import styles from "./Logo.module.css"

const Logo =({className=""})=>{
    return <picture className={`${styles.containerLogo} ${className}`}>
        <img src={logo} alt=""  className={styles.imgLogo}/>
    </picture>
}

export default Logo;