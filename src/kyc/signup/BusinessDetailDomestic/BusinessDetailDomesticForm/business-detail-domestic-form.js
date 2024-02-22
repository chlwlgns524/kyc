import validateId from "../../../common/UserInfoForm/UserInput/Validator/idValidator.js";
import validateCompany, {validateCompanyEn} from "../../../common/UserInfoForm/UserInput/Validator/companyNameValidator.js";
import validatePhoneNumber from "../../../common/UserInfoForm/UserInput/Validator/managerPhoneNumberValidator.js";
import validateManagerEmail from "../../../common/UserInfoForm/UserInput/Validator/managerEmailValidator.js";
import {INPUT_TYPE} from "../../../common/UserInfoForm/input-type.js";
import {validateBusinessNumber} from "../../../common/UserInfoForm/UserInput/Validator/businessNumberValidator.js";
import {validateBusinessType} from "../../../common/UserInfoForm/UserInput/Validator/businessTypeValidator.js";
import {validateIndustry} from "../../../common/UserInfoForm/UserInput/Validator/industryValidator.js";
import {validateAmount} from "../../../common/UserInfoForm/UserInput/Validator/amountValidator.js";

export const BUSINESS_DETAIL_DOMESTIC_FORM_ID = {
    businessLicese: 'businessLicese',
    businessNumber: 'businessNumber',
    companyKrName: 'companyKrName',
    companyEnName: 'companyEnName',
    homepageUrl: 'homepageUrl',
    businessType: 'businessType',
    industry: 'industry',
    productType: 'productType',
    customerTransaction: 'customerTransaction',
    estimatedVolumePerMonth: 'estimatedVolumePerMonth',
    representativeTelephone: 'representativeTelephone',
    representativeEmail: 'representativeEmail'
}

export const USER_INPUT_LIST = [
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.businessLicese,
        inputType: INPUT_TYPE.UPLOAD,
        label: '사업자등록증',
        essential: false,
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.businessNumber,
        inputType: INPUT_TYPE.BASIC,
        label: '사업자등록번호',
        validator: validateBusinessNumber,
        essential: true,
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.companyKrName,
        inputType: INPUT_TYPE.BASIC,
        label: '회사명',
        validator: validateCompany,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.companyEnName,
        inputType: INPUT_TYPE.BASIC,
        label: '회사명(영문)',
        validator: validateCompanyEn,
        essential: true,
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.homepageUrl,
        inputType: INPUT_TYPE.BASIC,
        label: '홈페이지 주소',
        validator: validateId,
        essential: true
    },
    {
        id: '',
        inputType: '',
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.businessType,
        inputType: INPUT_TYPE.BASIC,
        label: '업태',
        validator: validateBusinessType,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.industry,
        inputType: INPUT_TYPE.BASIC,
        label: '종목',
        validator: validateIndustry,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.productType,
        inputType: INPUT_TYPE.CATEGORY,
        label: '판매 상품의 종류',
        validator: validateIndustry,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.customerTransaction,
        inputType: INPUT_TYPE.AMOUNT,
        label: '객단가',
        validator: validateAmount,
        essential: true
    },
    {
        id: '',
        inputType: '',
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.estimatedVolumePerMonth,
        inputType: INPUT_TYPE.AMOUNT,
        label: '월 예상 볼륨',
        validator: validateAmount,
        essential: true
    },
    {
        id: '',
        inputType: ''
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.representativeTelephone,
        inputType: INPUT_TYPE.CONTACT,
        label: '사업장 대표 연락처',
        validator: validatePhoneNumber,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_DOMESTIC_FORM_ID.representativeEmail,
        inputType: INPUT_TYPE.BASIC,
        label: '사업장 대표 이메일',
        validator: validateManagerEmail,
        essential: true
    }
];