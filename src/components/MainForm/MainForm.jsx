import styles from "./MainForm.module.css"
import PropTypes from "prop-types";

export default function MainForm({title, description, children}) {
    return (
        <main className={styles.formContainer}>
            <div className={styles.titleWrapper}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.description}>{description}</p>
            </div>
            {children}
        </main>
    )
}

MainForm.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node.isRequired
}