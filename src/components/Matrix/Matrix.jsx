import styles from "./Matrix.module.css";
import PropTypes from "prop-types";

export default function Matrix({children}) {
    return (
        <main className={styles.matrix}>{children}</main>
    )
}

Matrix.propTypes = {
    children: PropTypes.node.isRequired,
}