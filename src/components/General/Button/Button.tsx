import {IButton} from "@/interfaces/IButton";
import styles from "./Button.module.scss";

const Button = ({onClick, className, color, children} : IButton) => {
    return (
        <button className={`${styles.button} ${color==="light" ? styles.lightButton : styles.darkButton} ${className}`} onClick={onClick}>{children}</button>
    )
}
export default Button;