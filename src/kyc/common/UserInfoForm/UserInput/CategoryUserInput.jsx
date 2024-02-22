import "./UserInput.css";
import PropTypes from "prop-types";
import {useState} from "react";
import {ProductCategory} from "../../../../assets/reference/product-category.js";

export default function CategoryUserInput({id, label, validator, essential, pickUserInput}) {
    const [message, setMessage] = useState('');
    const [userInput, setUserInput] = useState('');
    const [valid, setValid] = useState(false);

    const [large, setLarge] = useState('');
    const [middle, setMiddle] = useState('');
    const [small, setSmall] = useState('');

    return (
        <div className="item">
            <label htmlFor={id}>{label} {essential ? <span className="essential">*</span> : undefined}</label>
            <div className="userInputWrapper">
                <select onChange={e => setLarge(e.target.value)}>
                    {
                        Object.keys(ProductCategory.large).map(
                            large => <option key={large}>{large}</option>
                        )
                    }
                </select>
                <select onChange={e => setMiddle(e.target.value)} disabled={middle !== ''}>

                </select>
                <select>
                    <option value="mno">mno</option>
                    <option value="pqr">pqr</option>
                </select>
                <span
                    className={userInput === '' ? '' : (valid ? "confirm" : "warn")}>{userInput !== '' ? message : ''}</span>
            </div>
        </div>
    )
}

CategoryUserInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    validator: PropTypes.func.isRequired,
    essential: PropTypes.bool.isRequired,
    pickUserInput: PropTypes.func.isRequired
}