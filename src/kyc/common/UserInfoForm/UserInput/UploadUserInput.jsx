import commonStyles from "./BasicUserInput.module.css";
import styles from "./UploadUserInput.module.css";
import PropTypes from "prop-types";
import {useRef, useState} from "react";
import axios from "axios";
import {
    BUSINESS_DETAIL_PRIVATE_FORM_ID
} from "../../../signup/BusinessDetail/BusinessDetailPrivate/BusinessDetailPrivateForm/business-detail-private-form.js";
import {
    BUSINESS_DETAIL_CORPORATE_FORM_ID
} from "../../../signup/BusinessDetail/BusinessDetailCorporate/BusinessDetailCorporateForm/business-detail-corporate-form.js";

export default function UploadUserInput({id, label, essential, pickUserInput}) {
    // console.log("<UploadUserInput/>");
    
    const fileRef = useRef();
    const [fileName, setFileName] = useState('');
    const [bizLicense, setBizLicense] = useState(null);

    const handleFileChange = e => {
        const uploadedFile = e.target.files[0]
        setBizLicense(uploadedFile);
        setFileName(uploadedFile.name);
        pickUserInput(id, true, uploadedFile);

        const formData = new FormData();
        formData.append('file', uploadedFile);

        axios.post('http://localhost:3001/ekyc', formData)
                .then(response => {
                    const startingPath = response.data.images[0].bizLicense.result;
                    console.log(startingPath);
                    const businessNumber = startingPath.registerNumber[0].text;
                    const corporateRegistrationNumber = startingPath.corpRegisterNum[0].text;
                    const companyKrName = startingPath.corpName[0].text;
                    const industry = startingPath.bisItem.map(item => item.text).join(',');
                    const businessType = startingPath.bisType.map(type => type.text).join(',');

                    pickUserInput(BUSINESS_DETAIL_PRIVATE_FORM_ID.businessNumber, true, businessNumber);
                    pickUserInput(BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateRegistrationNumber, true, corporateRegistrationNumber);
                    pickUserInput(BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateKrName, true, companyKrName);
                    pickUserInput(BUSINESS_DETAIL_PRIVATE_FORM_ID.companyKrName, true, companyKrName);
                    pickUserInput(BUSINESS_DETAIL_PRIVATE_FORM_ID.industry, true, industry);
                    pickUserInput(BUSINESS_DETAIL_PRIVATE_FORM_ID.businessType, true, businessType);
                    
                    console.log(startingPath.bisAddress[0].text);
                })
                .catch(error => {
                    console.error(error);
                });
    };

    return (
        <div className={`${commonStyles.gridItem}`}>
            <label>{label} {essential ? <span className={styles.essential}>*</span> : undefined}</label>
            <div className={styles.uploadFileWrapper}>
                <div className={styles.fileNameDisplay}>
                    <span className={styles.fileName}>{fileName}</span>
                    <span className={styles.cancel} onClick={() => {
                        fileRef.current.value = '';
                        setFileName('');
                        setBizLicense(null);
                    }}></span>
                </div>
                <label className={styles.fileUploadButton} htmlFor={id}>업로드</label>
                <input
                        className={styles.fileUploader}
                        type={'file'}
                        id={id}
                        onChange={handleFileChange}
                        ref={fileRef}
                />
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