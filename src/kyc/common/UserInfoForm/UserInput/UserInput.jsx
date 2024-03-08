import commonStyles from "./UserInput.module.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

export default function UserInput({id, label, placeholder, referenceValue, validator, essential, pickUserInput}) {
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
        if (referenceValue)
            hanldeUserInput(userInput);
    }, [referenceValue]);

    return (
        <div className={`${commonStyles.gridItem}`}>
            <label htmlFor={id}>{label} {essential ? <span className={`${commonStyles.essential}`}>*</span> : undefined}</label>
            <div className={`${commonStyles.userInputWrapper}`}>
                <div className={`${commonStyles.userInput} ${userInput !== '' && !valid ? commonStyles.warningBox : undefined}`}>
                    <input
                        placeholder={placeholder}
                        autoComplete="off"
                        type={`${isPasswordRelated(id) ? 'password' : 'text'}`}
                           id={id}
                           value={userInput}
                           onChange={e => hanldeUserInput(e.target.value)}/>
                    <span className={userInput !== '' && !valid ? commonStyles.warningBox : undefined}>!</span>
                </div>
                <div className={`${commonStyles.warningMessage} ${userInput === '' ? '' : (valid ? commonStyles.confirm : commonStyles.warn)}`}>{userInput !== '' ? message : ''}</div>
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
    placeholder: PropTypes.string,
    referenceValue: PropTypes.string,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    pickUserInput: PropTypes.func.isRequired
}