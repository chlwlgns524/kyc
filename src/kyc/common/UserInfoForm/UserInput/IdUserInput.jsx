import commonStyles from "./BasicUserInput.module.css";
import PropTypes from "prop-types";
import {useState} from "react";
import styles from "./IdUserInput.module.css";
import {checkIdDuplication} from "../../../../api/sign-up.js";
import {extractCurrentUserInfo} from "../../../signup/utils/utils.js";

export default function IdUserInput({id, label, placeholder, validator, essential, user, pickUserInput}) {
    // console.log('<IdUserInput/> rendered!');
    const [message, setMessage] = useState('');
    const [userInput, setUserInput] = useState('');

    const currentUser = extractCurrentUserInfo(id, user);

    const hanldeUserInput = updatedValue => {
        setUserInput(updatedValue);

        const validation = validator(updatedValue);
        setMessage(validation.message);
        pickUserInput(id, false, updatedValue);
    };

    return (
            <div className={`${commonStyles.gridItem}`}>
                <label htmlFor={id}>{label} {essential ?
                        <span className={`${commonStyles.essential}`}>*</span> : undefined}</label>
                <div className={styles.authContainer}>
                    <div className={`${styles.container}`}>
                        <div className={`${styles.item} ${styles.input}`}>
                            <div className={`${styles.inputWrapper} ${getInvalidCssCondition(userInput, currentUser.validated)}`}>
                                <input
                                        className={`${styles.input}`}
                                        placeholder={placeholder}
                                        autoComplete="off"
                                        type="text"
                                        id={id}
                                        onChange={e => hanldeUserInput(e.target.value)}/>
                                <span className={`${styles.span} ${getInvalidCssCondition(userInput, currentUser.validated)}`}>!</span>
                            </div>
                        </div>
                        <button
                                className={`${styles.item} ${styles.button} `}
                                onClick={() => {
                                    checkIdDuplication(userInput)
                                            .then(response => {
                                                const { data } = response;
                                                if (!data) {
                                                    alert('사용 가능한 아이디입니다.');
                                                    setMessage('사용 가능한 아이디입니다.')
                                                    pickUserInput(currentUser.id, true, currentUser.value);
                                                }
                                                else
                                                    alert('아이디가 이미 존재합니다.');
                                            })
                                            .catch(error => {
                                                console.error(error);
                                            });
                                }}
                        >
                            중복 확인
                        </button>
                    </div>
                    <div className={`${commonStyles.warningMessage} ${userInput === '' ? '' : (currentUser.validated ? commonStyles.confirm : commonStyles.warn)}`}>
                        {userInput !== '' ? message : ''}
                    </div>
                </div>
            </div>
    )
}

function getInvalidCssCondition(value, valid) {
    return value !== '' && !valid ? commonStyles.warningBox : undefined
}

IdUserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    referenceValue: PropTypes.string,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    user: PropTypes.array.isRequired,
    pickUserInput: PropTypes.func.isRequired
}