import "./UserInput.css";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

export default function TelephoneUserInput({id, label, placeholder, validator, essential, pickUserInput}) {
    const [message, setMessage] = useState('');
    const [frontNumber, setFrontNumber] = useState('');
    const [userInput, setUserInput] = useState('');
    const [valid, setValid] = useState(false);

    const hanldeUserInput = updatedValue => {
        setUserInput(updatedValue);

        const validation = validator(updatedValue);
        setValid(validation.result);
        setMessage(validation.message);
        pickUserInput(id, validation.result, frontNumber + updatedValue);
    };

    const frontNumbers = getAppropriateFrontNumbers(id);

    useEffect(() => {
        hanldeUserInput(userInput);
    }, [frontNumber]);

    return (
        <div className="gridItem">
            <label htmlFor={id}>{label} {essential ? <span className="essential">*</span> : undefined}</label>
            <div className="userInputWrapper">
                <div className={`userInput ${userInput !== '' && !valid ? "warningBox" : ""}`}>
                    <select onChange={e => setFrontNumber(e.target.value)}>
                        <option value="">선택</option>
                        {
                            frontNumbers.map(frontNumber =>
                                <option key={frontNumber} value={frontNumber}>{frontNumber}</option>)
                        }
                    </select>
                    <input
                        placeholder={placeholder}
                        autoComplete="off"
                        type='text'
                           id={id}
                           value={userInput}
                           onChange={e => hanldeUserInput(e.target.value)}/>{userInput !== '' && !valid && <span>!</span>}
                </div>
                <div className={`warningMessage ${userInput === '' ? '' : (valid ? "confirm" : "warn")}`}>{userInput !== '' ? message : ''}</div>
            </div>
        </div>
    )
}

function getAppropriateFrontNumbers(id) {
    const frontNumbers = [
        {
            wordToTarget: "mobile",
            numbers: ["010", "019"]
        },
        {
            wordToTarget: "telephone",
            numbers: ["02", "032", "042", "051", "052", "053", "062", "064", "031", "033", "041", "043", "054", "055", "061", "063"]
        }
    ];

    const matchingGroup = frontNumbers.find(group => id.toLowerCase().includes(group.wordToTarget.toLowerCase()));
    return matchingGroup ? matchingGroup.numbers : [];
}

TelephoneUserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    pickUserInput: PropTypes.func.isRequired
}