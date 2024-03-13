import {useState} from "react";
import MainButton from "../../../../../components/MainButton/MainButton.jsx";
import MainButtonContainer from "../../../../../components/MainButton/MainButtonContainer.jsx";
import {BUSINESS_DETAIL_PRIVATE_FORM_ID, USER_INPUT_LIST} from "./business-detail-private-form.js";
import UserInfoForm from "../../../../common/UserInfoForm/UserInfoForm.jsx";
import {Link, useNavigate} from "react-router-dom";
import {checkUserInfo, extractUserValue} from "../../../utils/utils.js";
import {updateBusinessDetailPrivate} from "../../../../../api/sign-up.js";

export default function BusinessDetailPrivateForm() {
    const [user, setUser] = useState([
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.businessLicense,
            validated: true,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.businessNumber,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.companyKrName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.companyEnName,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.homepageUrl,
            validated: false,
            value: 'https://www.',
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.businessType,
            validated: false,
            value: '',
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.industry,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.productType,
            validated: false,
            value: {
                large: '',
                middle: '',
                small: ''
            }
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.customerTransaction,
            validated: true,
            value: {
                currency: 'KRW',
                value: '0',
            }
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.estimatedVolumePerMonth,
            validated: true,
            value: {
                currency: 'KRW',
                value: '0',
            }
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.address,
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
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.representativeTelephone,
            validated: false,
            value: ''
        },
        {
            id: BUSINESS_DETAIL_PRIVATE_FORM_ID.representativeEmail,
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
                        updateDetailPrivate(user)
                                .then(response => {
                                    console.log(response);
                                    const {responseCode, data} = response;
                                    if (responseCode === 'SUCCESS')
                                        alert('임시저장에 성공하였습니다.');
                                })
                                .catch(error => console.log(error));
                    }
                }
                }/>

                <MainButton label={'다음'} onClick={() => {
                    if (checkUserInfo(user)) {
                        updateDetailPrivate(user)
                                .then(response => {
                                    console.log(response);
                                    const {responseCode, data} = response;
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

function updateDetailPrivate(user) {
    const bizRegFile = extractUserValue(user, "businessLicese");
    const bizNo = extractUserValue(user, "businessNumber");
    const compnayNameKr = extractUserValue(user, "companyKrName");
    const companyNameEn = extractUserValue(user, "companyEnName");
    const homepageUrl = extractUserValue(user, "homepageUrl");
    const salesType = extractUserValue(user, "businessType");
    const companyType = extractUserValue(user, "industry");
    const productTypeBig = extractUserValue(user, "productType").large;
    const productTypeMid = extractUserValue(user, "productType").middle;
    const productTypeSmall = extractUserValue(user, "productType").small;
    const customerTransCurrency = extractUserValue(user, "customerTransaction").currency;
    const customerTransAmount = extractUserValue(user, "customerTransaction").value;
    const monthlyExpectVolumeCurrency = extractUserValue(user, "estimatedVolumePerMonth").currency;
    const monthlyExpectVolumeAmount = extractUserValue(user, "estimatedVolumePerMonth").value;
    const bizAddressKr = `${extractUserValue(user, "address").addressKr} ${extractUserValue(user, "address").additionalAddress}`;
    const bizAddressEn = extractUserValue(user, "address").addressEn;
    const bizRepMobileNo = extractUserValue(user, "representativeTelephone");
    const bizRepEmail = extractUserValue(user, "representativeEmail");

    return updateBusinessDetailPrivate({
        bizRegFile,
        bizNo,
        compnayNameKr,
        companyNameEn,
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
        bizRepMobileNo,
        bizRepEmail
    });
}