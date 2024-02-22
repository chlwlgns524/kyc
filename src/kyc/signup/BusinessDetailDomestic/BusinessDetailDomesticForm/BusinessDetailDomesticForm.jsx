import {useState} from "react";
import MainButton from "../../../../components/MainButton/MainButton.jsx";
import MainButtonContainer from "../../../../components/MainButton/MainButtonContainer.jsx";
import {BUSINESS_DETAIL_DOMESTIC_FORM_ID, USER_INPUT_LIST} from "./business-detail-domestic-form.js";
import UserInfoForm from "../../../common/UserInfoForm/UserInfoForm.jsx";

export default function BusinessDetailDomesticForm() {
    const [user, setUser] = useState([
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.businessLicese,
            validated: true,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.businessNumber,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.companyKrName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.companyEnName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.homepageUrl,
            validated: false,
            value: '',
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.businessType,
            validated: false,
            value: '',
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.industry,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.productType,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.customerTransaction,
            validated: false,
            value: {
                currency: 'KRW',
                value: '0',
            }
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.estimatedVolumePerMonth,
            validated: false,
            value: {
                currency: 'KRW',
                value: '0',
            }
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.representativeTelephone,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.representativeEmail,
            validated: false,
            value: ''
        }
    ]);

    const pickUserInput = (id, validated, value) => {
        const updatedUser = user.map(info =>
            info.id === id ? {...info, validated: validated, value: value} : info);
        setUser(updatedUser);
    }

    return (
        <>
            <UserInfoForm
                title={'귀사의 사업장 정보를 입력주세요'}
                description={'자금세탁방지법 및 고객확인제도 이행을 위하여 전체 항목을 필수로 입력 부탁드립니다.'}
                userInputList={USER_INPUT_LIST}
                pickUserInput={pickUserInput}
            />
            <MainButtonContainer>
                <MainButton label={'이전'} onClick={() => {
                    alert('이전');
                }
                }/>
                <MainButton label={'임시저장'} onClick={() => {
                    alert('임시저장');
                }
                }/>
                <MainButton label={'다음'} onClick={() => {
                    console.log(user, USER_INPUT_LIST);
                        alert('다음');
                    }
                }/>
            </MainButtonContainer>
        </>
    )
}