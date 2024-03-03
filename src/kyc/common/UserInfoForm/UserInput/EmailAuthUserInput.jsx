import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import styles from "./EmailAuthUserInput.module.css";
import axios from "axios";

const TIME_LIMIT_IN_SECONDS = 30;

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
        pickUserInput(id, validation.result, updatedValue);
    };

    const startAuth = async () => {
        if (emailInput.length === 0 || !valid) {
            alert('올바른 이메일 주소를 입력해 주세요.');
            return;
        }
        setIsActive(true);
        setSeconds(TIME_LIMIT_IN_SECONDS);

        const newAuthNumber = generateAuthNumber();
        setAuthNumber(newAuthNumber);

        try {
            const response = await axios.post('http://localhost:3001/send-email',
                {
                    email: emailInput,
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

    useEffect(() => {
        let interval;
        if (isActive && seconds > 0) {
            interval = setInterval(() => setSeconds(prevState => prevState - 1), 1000);
        } else if (seconds === 0) {
            setIsActive(false);
            setSeconds(TIME_LIMIT_IN_SECONDS);
        }
        return () => clearInterval(interval);
    }, [seconds, isActive]);
    return (
        <div className="gridItem">
            <label htmlFor={id}>{label} {essential ? <span className="essential">*</span> : undefined}</label>
            <div className={styles.authContainer}>
                <div className={styles.emailInput}>
                    <div className={`flex3`}>
                        <div className={`userInput ${emailInput !== '' && !valid ? "warningBox" : undefined}`}>
                            <input
                                placeholder={placeholder}
                                autoComplete="off"
                                type="text"
                                id={id}
                                value={emailInput}
                                readOnly={isAuthenticated}
                                onChange={e => handleEmailInput(e.target.value)}/>{emailInput !== '' && !valid &&
                            <span>!</span>}
                        </div>
                    </div>
                    {
                        <button
                            className={`flex1`}
                            disabled={isAuthenticated}
                            onClick={startAuth}
                        >{(isActive || isAuthenticated) ? '재발송' : '이메일인증'}</button>
                    }
                </div>
                {
                    (isActive || isAuthenticated) &&
                    <div className={styles.emailInput}>
                        <div className={`flex3`}>
                            <div className={`${styles.userInput}`}>
                                <input
                                    placeholder={placeholder}
                                    autoComplete="off"
                                    type="text"
                                    id={id}
                                    value={authInput}
                                    readOnly={isAuthenticated}
                                    onChange={e => setAuthInput(e.target.value)}/>
                                <div>{!isAuthenticated && seconds}</div>
                            </div>
                        </div>
                        <button
                            className={`flex1`}
                            disabled={isAuthenticated}
                            onClick={() => {
                                console.log(authInput);
                                if (authInput === authNumber)
                                    setIsAuthenticated(true);
                            }}
                        >{isAuthenticated ? '인증완료' : '확인'}</button>
                    </div>
                }
                <div
                    className={`warningMessage ${emailInput === '' ? '' : (valid ? "confirm" : "warn")}`}>{emailInput !== '' ? message : ''}</div>
            </div>
        </div>
    )
}

function generateAuthNumber() {
    const randomNumbers = [];
    for (let i = 0; i < 6; i++)
        randomNumbers.push(Math.floor(Math.random() * 10));
    return randomNumbers.join('');
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