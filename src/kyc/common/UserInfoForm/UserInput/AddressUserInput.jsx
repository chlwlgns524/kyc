import commonStyles from "./BasicUserInput.module.css";
import styles from "./AddressUserInput.module.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import InputModal from "../../../../components/Modal/InputModal.jsx";
import DaumPostcodeEmbed from "react-daum-postcode";
import SquareCheckBox from "../../../../components/MainCheckBox/SquareCheckBox.jsx";
import {
    BUSINESS_DETAIL_CORPORATE_FORM_ID
} from "../../../signup/BusinessDetail/BusinessDetailCorporate/BusinessDetailCorporateForm/business-detail-corporate-form.js";

export default function AddressUserInput({id, label, validator, essential, user, pickUserInput}) {
    const [synchronizedChecked, setSynchronizedChecked] = useState(false);
    const [message, setMessage] = useState('');
    const [address, setAddress] = useState({
        country: 'kr',
        zonecode: '',
        addressKr: '',
        additionalAddress: '',
        addressEn: '',
    });
    const [valid, setValid] = useState(false);
    const validateAddress = updatedAddress => {
        setAddress(updatedAddress);
        const validation = validator(updatedAddress.additionalAddress);
        setValid(validation.result);
        setMessage(validation.message);
        pickUserInput(id, validation.result, updatedAddress);
    }
    const handleUserInput = e => {
        const userInput = e.target.value;
        const updatedAddress = {
            ...address,
            additionalAddress: userInput
        }
        validateAddress(updatedAddress);
    }
    const handleSynchronize = () => {
        setSynchronizedChecked(prevState => {
            const newSynchronizedChecked = !prevState;
            const address = user.find(info => info.id === BUSINESS_DETAIL_CORPORATE_FORM_ID.address);
            const synchronized = {
                ...address.value
            };
            const empty = {
                country: 'kr',
                zonecode: '',
                addressKr: '',
                additionalAddress: '',
                addressEn: '',
            };

            setAddress(newSynchronizedChecked ? synchronized : empty);
            return newSynchronizedChecked;
        });
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalOpen = () => setIsModalOpen(true);
    const modalClose = () => setIsModalOpen(false);

    const onComplete = data => {
        modalClose();
        const updatedAddress = {
            ...address,
            zonecode: data.zonecode,
            addressKr: data.address,
            addressEn: data.addressEnglish
        }
        validateAddress(updatedAddress);
    }

    useEffect(() => {
        validateAddress(address);
    }, [synchronizedChecked]);

    return (
        <div className={`${commonStyles.gridItem} ${commonStyles.span2}`}>
            <label htmlFor={id}>{label} {essential ? <span className={commonStyles.essential}>*</span> : undefined}</label>
            <div className={`${styles.postcodeOuterWrapper}`}>
                {
                    isModalOpen &&
                    <InputModal onClose={modalClose}>
                        <DaumPostcodeEmbed onComplete={onComplete}/>
                    </InputModal>
                }
                {
                    id === BUSINESS_DETAIL_CORPORATE_FORM_ID.headStoreAddress ?
                    <div><SquareCheckBox
                            checked={synchronizedChecked}
                            id={id}
                            onChange={handleSynchronize}/> <label className={styles.synchronizeLabel} htmlFor={id}>본점의 주소가 사업장 주소와 같나요?</label></div>
                            : undefined
                }
                <div className={styles.postcodeWrapper}>
                    <select className={styles.country} disabled={true}>
                        <option value="korean">대한민국</option>
                    </select>
                    <input type="text" className={styles.zonecode} value={address.zonecode} readOnly={true}/>
                    <input type="text" className={styles.addressKr} value={address.addressKr} readOnly={true}/>
                    <div className={`${commonStyles.userInput} ${styles.remaningAddress} ${address.zonecode !== '' && address.additionalAddress === '' && !valid ? styles.warningBox : undefined}`}>
                        <input type="text" disabled={address.zonecode === ''} value={address.additionalAddress} onChange={handleUserInput}/>
                    </div>
                    <button
                        className={styles.addressSearchBtn}
                        onClick={modalOpen}
                    >
                        검색
                    </button>
                </div>
                <input type="text" className={styles.addressEn} value={address.addressEn} readOnly={true}/>
                <div className={`${commonStyles.warningMessage} ${valid ? commonStyles.confirm : commonStyles.warn}`}>{address.zonecode !== '' ? message : ''}</div>
            </div>
        </div>
    )
}

AddressUserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    user: PropTypes.array.isRequired,
    pickUserInput: PropTypes.func.isRequired
}