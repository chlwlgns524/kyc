import styles from "./AddressUserInput.module.css";
import "./UserInput.css";
import PropTypes from "prop-types";
import {useState} from "react";
import InputModal from "../../../../components/Modal/InputModal.jsx";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function AddressUserInput({id, label, validator, essential, pickUserInput}) {
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
    return (
        <div className="gridItem span2">
            <label htmlFor={id}>{label} {essential ? <span className="essential">*</span> : undefined}</label>
            <div className={`${styles.postcodeOuterWrapper}`}>
                {
                    isModalOpen &&
                    <InputModal onClose={modalClose}>
                        <DaumPostcodeEmbed onComplete={onComplete}/>
                    </InputModal>
                }
                <div className={styles.postcodeWrapper}>
                    <select className={styles.country} disabled={true}>
                        <option value="korean">대한민국</option>
                    </select>
                    <input type="text" className={styles.zonecode} value={address.zonecode} readOnly={true}/>
                    <input type="text" className={styles.addressKr} value={address.addressKr} readOnly={true}/>
                    <div className={`userInput ${styles.remaningAddress} ${address.zonecode !== '' && address.additionalAddress === '' && !valid ? styles.warningBox : undefined}`}>
                        <input type="text" disabled={address.zonecode === ''} onChange={handleUserInput}/>
                    </div>
                    <button
                        className={styles.addressSearchBtn}
                        onClick={modalOpen}
                    >
                        검색
                    </button>
                </div>
                <input type="text" className={styles.addressEn} value={address.addressEn} readOnly={true}/>
                <div className={`warningMessage ${valid ? "confirm" : "warn"}`}>{address.zonecode !== '' ? message : ''}</div>
            </div>
        </div>
    )
}

AddressUserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    pickUserInput: PropTypes.func.isRequired
}