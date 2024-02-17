import styles from "./UserInput.module.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

export default function UserInput({id, label, referenceValue, validator, essential, pickUserInput}) {
    const [message, setMessage] = useState('');
    const [userInput, setUserInput] = useState('');
    const [valid, setValid] = useState(false);

    const hanldeUserInput = updatedValue => {
        setUserInput(updatedValue);

        const validation = id === 'passwordCheck' ? validator(updatedValue, referenceValue) : validator(updatedValue);
        setValid(validation.result);
        setMessage(validation.message);
        pickUserInput(id, validation.result, updatedValue);
    };

    useEffect(() => {
        hanldeUserInput(userInput);
    }, [referenceValue]);


    return (
        <div className={styles.item}>
            <label htmlFor={id}>{label} {essential ? <span className={styles.essential}>*</span> : undefined}</label>
            <div className={styles.userInputWrapper}>
                <div className={`${styles.userInput} ${userInput !== '' && !valid ? styles.warningBox : undefined}`}>
                    <input
                        autoComplete="off"
                        type={`${isPasswordRelated(id) ? 'password' : 'text'}`}
                           id={id}
                           value={userInput}
                           onChange={e => hanldeUserInput(e.target.value)}/>{userInput !== '' && !valid && <span>!</span>}
                </div>
                <span className={userInput === '' ? '' : (valid ? styles.confirm : styles.warn)}>{userInput !== '' ? message : ''}</span>
            </div>
        </div>
    )
}

function isPasswordRelated(id) {
    const regex = /password/i;
    return regex.test(id);
}

UserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    referenceValue: PropTypes.string,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    pickUserInput: PropTypes.func.isRequired
}