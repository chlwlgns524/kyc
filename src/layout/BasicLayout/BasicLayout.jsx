import styles from './BasicLayout.module.css';
import PropTypes from "prop-types";
import BasicLogo from "../../kyc/common/Logo/BasicLogo/BasicLogo.jsx";

export default function BasicLayout({Logo = BasicLogo, Header, Body}) {
    return (
        <div className={styles.layout}>
            {<Logo/>}
            <main className={styles.contentWrapper}>
                {<Header/>}
                {<Body/>}
            </main>
        </div>
    )
}

BasicLayout.propTypes = {
    Logo: PropTypes.func,
    Header: PropTypes.func.isRequired,
    Body: PropTypes.func.isRequired,
}