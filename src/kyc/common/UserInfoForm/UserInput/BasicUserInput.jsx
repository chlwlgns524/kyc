import commonStyles from "./BasicUserInput.module.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {extractCurrentUserInfo} from "../../../signup/utils/utils.js";

export default function BasicUserInput({id, label, placeholder, defaultValue, referenceValue, validator, essential, user, pickUserInput}) {
    const currentUser = extractCurrentUserInfo(id, user);
    const [message, setMessage] = useState('');

    const hanldeUserInput = updatedValue => {
        const validation = id === 'passwordCheck' ? validator(updatedValue, referenceValue) : validator(updatedValue);
        setMessage(validation.message);
        pickUserInput(id, validation.result, updatedValue);
    };

    useEffect(() => {
        hanldeUserInput(currentUser.value);
    }, [currentUser.value]);

    return (
        <div className={`${commonStyles.gridItem}`}>
            <label htmlFor={id}>{label} {essential ? <span className={`${commonStyles.essential}`}>*</span> : undefined}</label>
            <div className={`${commonStyles.userInputWrapper}`}>
                <div className={`${commonStyles.userInput} ${currentUser.value !== defaultValue && !currentUser.validated ? commonStyles.warningBox : undefined}`}>
                    <input
                        placeholder={placeholder}
                        autoComplete="off"
                        type={`${isPasswordRelated(id) ? 'password' : 'text'}`}
                        id={id}
                        value={currentUser.value}
                        onChange={e => hanldeUserInput(e.target.value)}/>
                    <span className={currentUser.value !== defaultValue && !currentUser.validated ? commonStyles.warningBox : undefined}>!</span>
                </div>
                <div className={`${commonStyles.warningMessage} ${currentUser.value === defaultValue ? '' : (currentUser.validated ? commonStyles.confirm : commonStyles.warn)}`}>{currentUser.value !== defaultValue ? message : ''}</div>
            </div>
        </div>
    )
}

function isPasswordRelated(id) {
    const regex = /password/i;
    return regex.test(id);
}

BasicUserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    referenceValue: PropTypes.string,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    user: PropTypes.array.isRequired,
    pickUserInput: PropTypes.func.isRequired
}