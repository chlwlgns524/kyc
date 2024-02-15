import styles from "./BasicHeader.module.css";
import PropTypes from "prop-types";

export default function BasicHeader({title}) {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
        </header>
    )
}

BasicHeader.propTypes = {
    title: PropTypes.string.isRequired,
}
