import commonStyles from "./UserInput.module.css";
import styles from "./UploadUserInput.module.css";
import PropTypes from "prop-types";

export default function UploadUserInput({id, label, essential, pickUserInput}) {


    return (
        <div className={`${commonStyles.gridItem}`}>
            <label>{label} {essential ? <span className={styles.essential}>*</span> : undefined}</label>
            <div className={styles.uploadFileWrapper}>
                <div className={styles.fileNameDisplay}>
                    <span className={styles.fileName}>사업자등록번호1234.jpg</span>
                    <span className={styles.cancel}></span>
                </div>
                <label className={styles.fileUploadButton} htmlFor={id}>업로드</label>
                <input className={styles.fileUploader} type={'file'} id={id}/>
            </div>
        </div>
    )
}

UploadUserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    essential: PropTypes.bool.isRequired,
    pickUserInput: PropTypes.func
}