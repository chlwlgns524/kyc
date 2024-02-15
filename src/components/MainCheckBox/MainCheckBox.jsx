import styles from "./MainCheckBox.module.css";

export default function MainCheckBox({...props}) {
    return (
        <input className={styles.checkbox} type="checkbox" {...props}/>
    )
}
