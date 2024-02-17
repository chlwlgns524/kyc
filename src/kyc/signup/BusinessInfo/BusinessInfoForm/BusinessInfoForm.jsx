import styles from "./BusinessInfoForm.module.css";
import MainForm from "../../../../components/MainForm/MainForm.jsx";
import MainCheckBox from "../../../../components/MainCheckBox/MainCheckBox.jsx";
import {useReducer} from "react";
import MainButton from "../../../../components/MainButton/MainButton.jsx";
import MainButtonContainer from "../../../../components/MainButton/MainButtonContainer.jsx";

const initialState = {
    businessLocation: "domestic",
    businessCategory: "private"
}

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_BUSINESS_LOCATION":
            return {...state, businessLocation: action.payload};
        case "SET_BUSINESS_CATEGORY":
            return {...state, businessCategory: action.payload};
        default:
            return state;
    }
}

export default function BusinessInfoForm() {
    console.log("<BusinessInfoForm/> rendered!");

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <MainForm
            title={'사업자 정보 확인'}
            description={'사업자 정보 및 고객확인 정보 입력 전 아래 사항을 확인해 주세요.(필수)'}
        >
            <ul className={styles.container}>
                <li className={styles.item}>
                    <div className={styles.itemWrapper}>
                        <p className={styles.itemTitle}>사업장 소재지를 선택해 주세요.</p>
                        <div className={styles.radioButtons}>
                            <div className={styles.radioButton}>
                                <MainCheckBox
                                    id={'domestic'}
                                    checked={state.businessLocation === 'domestic'}
                                    onChange={() => dispatch({type: 'SET_BUSINESS_LOCATION', payload: 'domestic'})}
                                />
                                <label htmlFor={'domestic'}>국내</label>
                            </div>
                            <div className={styles.radioButton}>
                                <MainCheckBox
                                    id={'abroad'}
                                    checked={state.businessLocation === 'abroad'}
                                    onChange={() => dispatch({type: 'SET_BUSINESS_LOCATION', payload: 'abroad'})}
                                />
                                <label htmlFor={'abroad'}>해외</label>
                            </div>
                        </div>
                    </div>
                </li>
                <li className={styles.item}>
                    <div className={styles.itemWrapper}>
                        <p className={styles.itemTitle}>사업자 분류를 선택해 주세요.</p>
                        <div className={styles.radioButtons}>
                            <div className={styles.radioButton}>
                                <MainCheckBox
                                    id={'private'}
                                    checked={state.businessCategory === 'private'}
                                    onChange={() => dispatch({type: 'SET_BUSINESS_CATEGORY', payload: 'private'})}
                                />
                                <label htmlFor={'private'}>개인사업자</label>
                            </div>
                            <div className={styles.radioButton}>
                                <MainCheckBox
                                    id={'corporate'}
                                    checked={state.businessCategory === 'corporate'}
                                    onChange={() => dispatch({type: 'SET_BUSINESS_CATEGORY', payload: 'corporate'})}
                                />
                                <label htmlFor={'corporate'}>법인사업자</label>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <MainButtonContainer>
                <MainButton label={'다음'}/>
            </MainButtonContainer>
        </MainForm>
    )
}