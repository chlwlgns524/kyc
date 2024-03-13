import commonStyles from "./BasicUserInput.module.css";
import PropTypes from "prop-types";
import {useState} from "react";

export default function BusinessTypeUserInput({id, label, validator, essential, pickUserInput}) {
    const [message, setMessage] = useState('');
    const [userInput, setUserInput] = useState('');
    const [valid, setValid] = useState(false);

    const hanldeUserInput = updatedValue => {
        setUserInput(updatedValue);

        const validation = validator(updatedValue);
        setValid(validation.result);
        setMessage(validation.message);
        pickUserInput(id, validation.result, updatedValue);
    };

    return (
        <div className={`${commonStyles.gridItem}`}>
            <label htmlFor={id}>{label} {essential ? <span className={`${commonStyles.essential}`}>*</span> : undefined}</label>
            <div className={`${commonStyles.userInputWrapper}`}>
                <div className={`${commonStyles.userInput} ${userInput !== '' && !valid ? commonStyles.warningBox : undefined}`}>
                    <input
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

BusinessTypeUserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    referenceValue: PropTypes.string,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    pickUserInput: PropTypes.func.isRequired
}