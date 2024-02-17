import styles from "./BasicHeader.module.css";
import PropTypes from "prop-types";

export default function BasicHeader({title, diagram: Diagram}) {
    return (
        <header className={styles.container}>
            <h1 className={styles.title}>{title}</h1>
            {Diagram && <Diagram/>}
        </header>
    )
}

BasicHeader.propTypes = {
    title: PropTypes.string.isRequired,
    diagram: PropTypes.elementType,
}
