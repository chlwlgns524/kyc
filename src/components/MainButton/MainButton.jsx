import PropTypes from "prop-types";
import styles from "./MainButton.module.css";

export default function MainButton({label, ...props}) {
    return (
        <button className={styles.button} {...props}>{label}</button>
    )
}

MainButton.propTypes = {
    label: PropTypes.string.isRequired,
}