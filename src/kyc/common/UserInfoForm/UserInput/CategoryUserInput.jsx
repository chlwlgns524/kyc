import "./UserInput.css";
import styles from "./CategoryUserInput.module.css";
import PropTypes from "prop-types";
import {useState} from "react";
import {PRODUCT_CATEGORY} from "../../../../assets/reference/product-catergory.js";

export default function CategoryUserInput({id, label, validator, essential, pickUserInput}) {
    const [message, setMessage] = useState('');
    const [valid, setValid] = useState(false);
    const [updated, setUpdated] = useState(false);
    const [cateogry, setCategory] = useState({
        large: '',
        middle: '',
        small: '',
    });

    const handleSetCateogry = (pos, value) => {
        const updatedCategory = {
            ...cateogry,
            [pos]: value,
        }

        switch (pos) {
            case 'large':
                updatedCategory.middle = '';
                updatedCategory.small = '';
                break;
            case 'middle':
                updatedCategory.small = '';
                break;
        }

        setCategory(updatedCategory);
        setUpdated(true);

        const validation = validator(updatedCategory);
        setValid(validation.result);
        setMessage(validation.message);
        pickUserInput(id, validation.result, updatedCategory);
    };

    return (
        <div className="gridItem">
            <label htmlFor={id}>{label} {essential ? <span className="essential">*</span> : undefined}</label>
            <div className={`userInputWrapper ${styles.categoryWrapper}`}>
                <div className={`${styles.category}`}>
                    <span>대분류</span>
                    <select
                        onChange={e => handleSetCateogry('large', e.target.value)}>
                        <option value="">선택</option>
                        {
                            Object.keys(PRODUCT_CATEGORY.large).map(
                                large => <option key={large}>{large}</option>
                            )
                        }
                    </select>
                </div>
                <div className={`${styles.category}`}>
                    <span>중분류</span>
                    <select
                        onChange={e => handleSetCateogry('middle', e.target.value)} disabled={cateogry.large === ''}>
                        <option value="">선택</option>
                        {
                            cateogry.large !== '' && Object.keys(PRODUCT_CATEGORY.large[cateogry.large].middle).map(
                                middle => <option key={middle}>{middle}</option>
                            )
                        }
                    </select>
                </div>
                <div className={`${styles.category}`}>
                    <span>소분류</span>
                    <select
                        onChange={e => handleSetCateogry('small', e.target.value)} disabled={cateogry.middle === ''}>
                        <option value="">선택</option>
                        {
                            cateogry.middle !== '' && Object.keys(PRODUCT_CATEGORY.large[cateogry.large].middle[cateogry.middle].small).map(
                                small => <option key={small}>{small}</option>
                            )
                        }
                    </select>
                </div>
                <div className={`warningMessage ${!updated ? '' : (valid ? "confirm" : "warn")}`}>{cateogry.large !== '' ? message : ''}</div>
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