import {createContext, useContext, useState} from "react";
import MainButton from "../../../../../components/MainButton/MainButton.jsx";
import MainButtonContainer from "../../../../../components/MainButton/MainButtonContainer.jsx";
import {BUSINESS_DETAIL_CORPORATE_FORM_ID, USER_INPUT_LIST} from "./business-detail-corporate-form.js";
import UserInfoForm from "../../../../common/UserInfoForm/UserInfoForm.jsx";
import {useNavigate} from "react-router-dom";
import {
    BUSINESS_DETAIL_PRIVATE_FORM_ID
} from "../../BusinessDetailPrivate/BusinessDetailPrivateForm/business-detail-private-form.js";
import {checkUserInfo, extractUserValue} from "../../../utils/utils.js";
import {updateBusinessDetailCorporate} from "../../../../../api/sign-up.js";

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
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.homepageUrl,
            validated: false,
            value: 'https://www.',
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
            validated: true,
            value: {
                currency: 'KRW',
                value: '0',
            }
        },
        {
            id: BUSINESS_DETAIL_CORPORATE_FORM_ID.estimatedVolumePerMonth,
            validated: true,
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
        setUser(prevUser => {
            return prevUser.map(info =>
                    info.id === id ? {...info, validated: validated, value: value} : info
            );
        });
    };

    const navigator = useNavigate();

    return (
            <>
                <UserInfoForm
                        title={'귀사의 사업장 정보를 입력주세요'}
                        description={'자금세탁방지법 및 고객확인제도 이행을 위하여 전체 항목을 필수로 입력 부탁드립니다.'}
                        userInputList={USER_INPUT_LIST}
                        user={user}
                        pickUserInput={pickUserInput}
                />
                <MainButtonContainer>
                    <MainButton label={'이전'} onClick={() => navigator(-1)}/>
                    <MainButton label={'임시저장'} onClick={() => {
                        if (checkUserInfo(user)) {
                            updateDetailCorporate(user)
                                    .then(response => {
                                        const {responseCode, data} = response;
                                        console.log(response);
                                        if (responseCode === 'SUCCESS')
                                            alert('임시저장에 성공하였습니다.');
                                    })
                                    .catch(error => console.log(error));
                        }
                    }
                    }/>

                    <MainButton label={'다음'} onClick={() => {
                        console.log(user);
                        if (checkUserInfo(user)) {
                            updateDetailCorporate(user)
                                    .then(response => {
                                        const {responseCode, data} = response;
                                        console.log(response);
                                        if (responseCode === 'SUCCESS')
                                            navigator('/payment-service');
                                    })
                                    .catch(error => console.log(error));
                        }
                    }}/>
                </MainButtonContainer>
            </>
    )
}

function updateDetailCorporate(user) {
    const bizRegFile = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.businessLicense);
    const bizNo = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.businessNumber);
    const corpNo = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateRegistrationNumber);
    const compnayNameKr = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.companyKrName);
    const companyNameEn = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.companyEnName);
    const corpNameKr = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateKrName);
    const corpNameEn = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateEnName);
    const homepageUrl = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.homepageUrl);
    const salesType = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.businessType);
    const companyType = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.industry);
    const productTypeBig = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.productType).large;
    const productTypeMid = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.productType).middle;
    const productTypeSmall = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.productType).small;
    const customerTransCurrency = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.customerTransaction).currency;
    const customerTransAmount = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.customerTransaction).value;
    const monthlyExpectVolumeCurrency = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.estimatedVolumePerMonth).currency;
    const monthlyExpectVolumeAmount = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.estimatedVolumePerMonth).value;
    const bizAddressKr = `${extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.address).addressKr} ${extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.address).additionalAddress}`;
    const bizAddressEn = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.address).addressEn;
    const officeAddressKr = `${extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.address).addressKr} ${extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.address).additionalAddress}`;
    const officeAddressEn = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.address).addressEn;
    const bizRepMobileNo = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.representativeTelephone);
    const bizRepEmail = extractUserValue(user, BUSINESS_DETAIL_CORPORATE_FORM_ID.representativeEmail);

    return updateBusinessDetailCorporate({
        bizRegFile,
        bizNo,
        corpNo,
        compnayNameKr,
        companyNameEn,
        corpNameKr,
        corpNameEn,
        homepageUrl,
        salesType,
        companyType,
        productTypeBig,
        productTypeMid,
        productTypeSmall,
        customerTransCurrency,
        customerTransAmount,
        monthlyExpectVolumeCurrency,
        monthlyExpectVolumeAmount,
        bizAddressKr,
        bizAddressEn,
        officeAddressKr,
        officeAddressEn,
        bizRepMobileNo,
        bizRepEmail
    });
}