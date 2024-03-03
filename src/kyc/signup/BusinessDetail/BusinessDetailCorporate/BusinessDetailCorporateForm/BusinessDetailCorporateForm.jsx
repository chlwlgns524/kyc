import {createContext, useContext, useState} from "react";
import MainButton from "../../../../../components/MainButton/MainButton.jsx";
import MainButtonContainer from "../../../../../components/MainButton/MainButtonContainer.jsx";
import {BUSINESS_DETAIL_CORPORATE_FORM_ID, USER_INPUT_LIST} from "./business-detail-corporate-form.js";
import UserInfoForm from "../../../../common/UserInfoForm/UserInfoForm.jsx";
import {Link} from "react-router-dom";
import CorporateUserProvider from "../CorporateUserProvider.jsx";
import CorporateUserContext from "../corporate-user-store.js";

export default function BusinessDetailCorporateForm() {
    const {user} = useContext(CorporateUserContext);
    return (
        <>
            <UserInfoForm
                title={'귀사의 사업장 정보를 입력주세요'}
                description={'자금세탁방지법 및 고객확인제도 이행을 위하여 전체 항목을 필수로 입력 부탁드립니다.'}
                userInputList={USER_INPUT_LIST}
                // pickUserInput={pickUserInput}
            />
            <MainButtonContainer>
                <Link to={"/business-info"}>
                    <MainButton label={'이전'} onClick={() => {
                        alert('이전');
                    }}/>
                </Link>
                <MainButton label={'임시저장'} onClick={() => {
                    alert('임시저장');
                }
                }/>
                <Link to={"/payment-service"}>
                    <MainButton label={'다음'} onClick={() => {
                        console.log(user, USER_INPUT_LIST);
                        alert('다음');
                    }}/>
                </Link>
            </MainButtonContainer>
        </>
    )
}