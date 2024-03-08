import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import styles from "./EmailAuthUserInput.module.css";
import commonStyles from "./UserInput.module.css";
import axios from "axios";
import {formatSecondsToStandardTime, generateAuthNumber} from "../../../../utils/utils.js";

const TIME_LIMIT_IN_SECONDS = 180;
const MAXIMUM_LENGTH_OF_AUTH_NUMBER = 6;

export default function EmailAuthUserInput({id, label, placeholder, validator, essential, pickUserInput}) {
    const [message, setMessage] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [authInput, setAuthInput] = useState('');
    const [valid, setValid] = useState(false);

    const handleEmailInput = updatedValue => {
        setEmailInput(updatedValue);

        const validation = validator(updatedValue);
        setValid(validation.result);
        setMessage(validation.message);
        pickUserInput(id, validation.result && isAuthenticated, updatedValue);
    };

    const startAuth = async () => {
        if (emailInput.length === 0 || !valid) {
            alert('올바른 이메일 주소를 입력해 주세요.');
            return;
        }
        setIsActive(true);
        setSeconds(TIME_LIMIT_IN_SECONDS);

        const newAuthNumber = generateAuthNumber(MAXIMUM_LENGTH_OF_AUTH_NUMBER);
        setAuthNumber(newAuthNumber);
        //idkd uyfk ueat zfoo
        try {
            const response = await axios.post('http://localhost:3001/send-email',
                    {
                        to: emailInput,
                        authNumber: newAuthNumber
                    }
            );
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const [seconds, setSeconds] = useState(TIME_LIMIT_IN_SECONDS);
    const [isActive, setIsActive] = useState(false);
    const [authNumber, setAuthNumber] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const authenticate = () => {
        console.log(authNumber);
        if (authInput === authNumber) {
            setIsAuthenticated(true);
            pickUserInput(id, true, emailInput);
        }
        else
            alert('인증번호가 맞지 않습니다.');
    }

    useEffect(() => {
        let timer;
        if (isActive && seconds > 0) {
            timer = setInterval(() => setSeconds(prevState => prevState - 1), 1000);
        } else if (seconds === 0) {
            setIsActive(false);
            setSeconds(TIME_LIMIT_IN_SECONDS);
        }
        return () => clearInterval(timer);
    }, [seconds, isActive]);
    return (
            <div className={`${commonStyles.gridItem}`}>
                <label htmlFor={id}>{label} {essential ?
                        <span className={`${commonStyles.essential}`}>*</span> : undefined}</label>
                <div className={styles.authContainer}>
                    <div className={`${styles.container}`}>
                        <div className={`${styles.item} ${styles.input}`}>
                            <div className={`${styles.inputWrapper} ${emailInput !== '' && !valid ? commonStyles.warningBox : undefined}`}>
                                <input
                                        className={`${styles.input}`}
                                        placeholder={placeholder}
                                        autoComplete="off"
                                        type="text"
                                        id={id}
                                        value={emailInput}
                                        disabled={isAuthenticated}
                                        onChange={e => handleEmailInput(isAuthenticated ? emailInput : e.target.value)}/>
                                <span className={`${styles.span} ${emailInput !== '' && !valid ? commonStyles.warningBox : undefined}`}>!</span>
                            </div>
                        </div>
                        <button
                                className={`${styles.item} ${styles.button} ${isAuthenticated ? styles.disabled : undefined}`}
                                onClick={startAuth}
                                disabled={isAuthenticated}
                        >
                            {isActive ? '재발송' : '이메일인증'}
                        </button>
                    </div>
                    {
                            (isActive && seconds > 0) || isAuthenticated ?
                        <div className={`${styles.container}`}>
                            <div className={`${styles.item} ${styles.input}`}>
                                <div className={`${styles.inputWrapper}`}>
                                    <input
                                            className={`${styles.input}`}
                                            placeholder={placeholder}
                                            autoComplete="off"
                                            type="text"
                                            id={id}
                                            value={authInput}
                                            disabled={isAuthenticated}
                                            maxLength={MAXIMUM_LENGTH_OF_AUTH_NUMBER}
                                            onChange={e => setAuthInput(e.target.value)}/>
                                    <span className={`${styles.span} ${styles.time}`}>{!isAuthenticated && formatSecondsToStandardTime(seconds)}</span>
                                </div>
                            </div>
                            <button
                                    className={`${styles.item} ${styles.button} ${isAuthenticated ? styles.disabled : undefined}`}
                                    onClick={authenticate}
                                    disabled={isAuthenticated}
                            >
                                {isAuthenticated ? '인증완료' : '확인'}
                            </button>
                        </div> : ''
                    }
                    <div className={`${commonStyles.warningMessage} ${emailInput === '' ? '' : (valid ? commonStyles.confirm : commonStyles.warn)}`}>{emailInput !== '' ? message : ''}</div>
                </div>
            </div>
    )
}

EmailAuthUserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    referenceValue: PropTypes.string,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    pickUserInput: PropTypes.func.isRequired
}