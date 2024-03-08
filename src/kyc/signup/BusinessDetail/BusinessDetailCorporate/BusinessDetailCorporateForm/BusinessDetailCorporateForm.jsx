import {createContext, useContext, useState} from "react";
import MainButton from "../../../../../components/MainButton/MainButton.jsx";
import MainButtonContainer from "../../../../../components/MainButton/MainButtonContainer.jsx";
import {BUSINESS_DETAIL_CORPORATE_FORM_ID, USER_INPUT_LIST} from "./business-detail-corporate-form.js";
import UserInfoForm from "../../../../common/UserInfoForm/UserInfoForm.jsx";
import {Link} from "react-router-dom";

export default function BusinessDetailCorporateForm() {
    // const {user} = useContext(CorporateUserContext);
    const [user, setUser] = useState([
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.businessLicense,
            validated: true,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.businessNumber,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateRegistrationNumber,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateKrName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateEnName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.companyKrName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.companyEnName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.homepageUrl,
            validated: false,
            value: '',
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.businessType,
            validated: false,
            value: '',
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.industry,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.productType,
            validated: false,
            value: {
                large: '',
                middle: '',
                small: ''
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.customerTransaction,
            validated: false,
            value: {
                currency: 'KRW',
                value: '0',
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.estimatedVolumePerMonth,
            validated: false,
            value: {
                currency: 'KRW',
                value: '0',
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.address,
            validated: false,
            value: {
                country: 'kr',
                zonecode: '',
                addressKr: '',
                additionalAddress: '',
                addressEn: '',
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.headStoreAddress,
            validated: false,
            value: {
                country: 'kr',
                zonecode: '',
                addressKr: '',
                additionalAddress: '',
                addressEn: '',
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.representativeTelephone,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.representativeEmail,
            validated: false,
            value: ''
        }
    ]);

    const pickUserInput = (id, validated, value) => {
        setUser(prevUser =>
                prevUser.map(info => (info.id === id ? {...info, validated, value} : info))
        );
    };
    return (
            <>
                <UserInfoForm
                        title={'귀사의 사업장 정보를 입력주세요'}
                        description={'자금세탁방지법 및 고객확인제도 이행을 위하여 전체 항목을 필수로 입력 부탁드립니다.'}
                        userInputList={USER_INPUT_LIST}
                        pickUserInput={pickUserInput}
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