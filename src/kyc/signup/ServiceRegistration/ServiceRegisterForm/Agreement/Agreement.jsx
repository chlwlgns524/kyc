import styles from "./Agreement.module.css";
import MainCheckBox from "../../../../../components/MainCheckBox/MainCheckBox.jsx";
import downArrow from "../../../../../assets/images/free-icon-down-arrow.png";
import {useState} from "react";
import PropTypes from "prop-types";

export default function Agreement({agreementChecked, setAgreementChecked, agreementDetails}) {
    console.log("<Agreement/> rendered!");

    const [detailShown, setDetailShown] = useState(initDetailShown(agreementDetails));
    const handleAllChecker = () => {
        const targetState = !Object.values(agreementChecked).every(value => value);
        const updatedAgreementChecked = {...agreementChecked};
        for (const key in updatedAgreementChecked)
            updatedAgreementChecked[key] = targetState;
        setAgreementChecked(updatedAgreementChecked);
    }

    return (
        <main className={styles.agreement}>
            <h1>약관동의</h1>
            <p className={styles.description}>아래 내용을 주의 깊게 읽어 주시기 바랍니다. 약관에 동의할 경우, 이용약관을 읽고 동의 한것으로 간주하여 다음 단계를
                진행합니다.</p>
            <ul className={styles.agreementContainer}>
                <li>
                    <MainCheckBox
                        checked={Object.values(agreementChecked).every(value => value)}
                        onChange={handleAllChecker}
                    /> 이용약관, 개인정보처리, 마케팅 수단 이용에 모두 동의합니다.
                </li>
                {
                    agreementDetails.map(detail =>
                        <li key={detail.id}>
                            <div className={styles.agreementTitle}>
                                <MainCheckBox
                                    checked={agreementChecked[detail.id]}
                                    onChange={() => setAgreementChecked({
                                        ...agreementChecked,
                                        [detail.id]: !agreementChecked[detail.id]
                                    })}/> {detail.title}
                                <button onClick={() => {
                                    const updatedDetailShown = {...detailShown, [detail.id]: !detailShown[detail.id]};
                                    setDetailShown(updatedDetailShown);
                                }}>
                                    <img
                                        className={`${styles.detailButton} ${detailShown[detail.id] ? styles.rotate : ''}`}
                                        src={downArrow}
                                        alt="toggle button"
                                    />
                                </button>
                            </div>
                            {
                                detailShown[detail.id] &&
                                <p className={styles.agreementDescription}>{detail.description}</p>
                            }
                        </li>
                    )
                }
            </ul>
        </main>
    )
}

function initDetailShown(agreementDetails) {
    const detailShown = {};
    for (const detail of agreementDetails)
        detailShown[detail.id] = false;
    return detailShown;
}

Agreement.propTypes = {
    agreementChecked: PropTypes.object.isRequired,
    setAgreementChecked: PropTypes.func.isRequired,
    agreementDetails: PropTypes.array.isRequired
}