import "./UserInput.css"
import {useState} from "react";
import PropTypes from "prop-types";
import styles from "./AmountUserInput.module.css";

const CURRENCY = ["KRW", "USD", "JPY", "CNY"];

export default function AmountUserInput({id, label, validator, essential, pickUserInput}) {
    const [message, setMessage] = useState('');
    const [valid, setValid] = useState(true);
    const [amount, setAmount] = useState({
        currency: 'KRW',
        value: '0'
    });

    const validateUserInput = value => {
        const validation = validator(value);
        setValid(validation.result);
        setMessage(validation.message);
        pickUserInput(id, validation.result, amount);
    }
    const updateCurrency = updatedCurrency => {
        setAmount(prevState => ({...prevState, currency: updatedCurrency}));
        validateUserInput(amount.value);
    }

    const updateAmount = updatedValue => {
        setAmount(prevState => ({...prevState, value: updatedValue}));
        validateUserInput(updatedValue);
    }

    return (
        <div className="item">
            <label htmlFor={id}>{label} {essential ? <span className="essential">*</span> : undefined}</label>
            <div className="userInputWrapper">
                <div className={`userInput ${!valid ? "warningBox" : ""}`}>
                    <select
                        value={amount.currency}
                        onChange={e => updateCurrency(e.target.value)}
                        className={styles.currency}>
                        {
                            CURRENCY.map(currency =>
                                <option
                                    key={currency}
                                    value={currency}
                                >
                                    {currency}
                                </option>
                            )
                        }
                    </select>
                    <input
                        className={styles.value}
                        autoComplete="off"
                        type='text'
                        id={id}
                        value={amount.value}
                        onChange={e => updateAmount(e.target.value)}/>{amount.value !== '' && !valid && <span>!</span>}
                </div>
                <span
                    className={valid ? "confirm" : "warn"}>{message}</span>
            </div>
        </div>
    )
}

AmountUserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    pickUserInput: PropTypes.func.isRequired
}