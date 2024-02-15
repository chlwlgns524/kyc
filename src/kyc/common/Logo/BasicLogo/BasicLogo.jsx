import logo from "/src/assets/images/logo-black.svg";
import styles from "./BasicLogo.module.css";

export default function BasicLogo() {
    return (
        <div className={styles.container}>
            <img src={logo} alt="main logo"/>
        </div>
    )
}