import validateCompany, {validateCompanyEn} from "../../../../common/UserInfoForm/UserInput/Validator/companyNameValidator.js";
import validatePhoneNumber from "../../../../common/UserInfoForm/UserInput/Validator/managerPhoneNumberValidator.js";
import validateManagerEmail from "../../../../common/UserInfoForm/UserInput/Validator/managerEmailValidator.js";
import {INPUT_TYPE} from "../../../../common/UserInfoForm/input-type.js";
import {validateBusinessNumber} from "../../../../common/UserInfoForm/UserInput/Validator/businessNumberValidator.js";
import {validateBusinessType} from "../../../../common/UserInfoForm/UserInput/Validator/businessTypeValidator.js";
import {validateIndustry} from "../../../../common/UserInfoForm/UserInput/Validator/industryValidator.js";
import {validateAmount} from "../../../../common/UserInfoForm/UserInput/Validator/amountValidator.js";
import {validateCategory} from "../../../../common/UserInfoForm/UserInput/Validator/categoryValidator.js";
import {validateAddress} from "../../../../common/UserInfoForm/UserInput/Validator/addressValidator.js";
import {
    validateCorporateRegistrationNumber
} from "../../../../common/UserInfoForm/UserInput/Validator/corporateRegistrationNumberValidator.js";
import validateHomepageUrl from "../../../../common/UserInfoForm/UserInput/Validator/homepageUrlValidator.js";

export const BUSINESS_DETAIL_CORPORATE_FORM_ID = {
    businessLicense: 'businessLicese',
    businessNumber: 'businessNumber',
    corporateRegistrationNumber: 'corporateRegistrationNumber',
    corporateKrName: 'corporateKrName',
    corporateEnName: 'corporateEnName',
    companyKrName: 'companyKrName',
    companyEnName: 'companyEnName',
    homepageUrl: 'homepageUrl',
    businessType: 'businessType',
    industry: 'industry',
    productType: 'productType',
    customerTransaction: 'customerTransaction',
    estimatedVolumePerMonth: 'estimatedVolumePerMonth',
    address: 'address',
    headStoreAddress: 'headStoreAddress',
    representativeTelephone: 'representativeTelephone',
    representativeEmail: 'representativeEmail'
}

export const USER_INPUT_LIST = [
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.businessLicense,
        inputType: INPUT_TYPE.UPLOAD,
        label: '사업자등록증',
        defaultValue: '',
        essential: false,
    },
    {
        id: '',
        inputType: '',
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.businessNumber,
        inputType: INPUT_TYPE.BASIC,
        label: '사업자등록번호',
        placeholder: '-를 포함해서 입력해주세요.',
        defaultValue: '',
        validator: validateBusinessNumber,
        essential: true,
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateRegistrationNumber,
        inputType: INPUT_TYPE.BASIC,
        label: '법인등록번호',
        placeholder: '-를 포함해서 입력해주세요.',
        defaultValue: '',
        validator: validateCorporateRegistrationNumber,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateKrName,
        inputType: INPUT_TYPE.BASIC,
        label: '법인명',
        placeholder: '',
        defaultValue: '',
        validator: validateCompany,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.corporateEnName,
        inputType: INPUT_TYPE.BASIC,
        label: '법인명(영문)',
        placeholder: '',
        defaultValue: '',
        validator: validateCompanyEn,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.companyKrName,
        inputType: INPUT_TYPE.BASIC,
        label: '회사명',
        defaultValue: '',
        validator: validateCompany,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.companyEnName,
        inputType: INPUT_TYPE.BASIC,
        label: '회사명(영문)',
        defaultValue: '',
        validator: validateCompanyEn,
        essential: true,
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.homepageUrl,
        inputType: INPUT_TYPE.BASIC,
        label: '홈페이지 주소',
        defaultValue: 'https://www.',
        validator: validateHomepageUrl,
        essential: true
    },
    {
        id: '',
        inputType: '',
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.businessType,
        inputType: INPUT_TYPE.BASIC,
        label: '업태',
        defaultValue: '',
        validator: validateBusinessType,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.industry,
        inputType: INPUT_TYPE.BASIC,
        label: '종목',
        defaultValue: '',
        validator: validateIndustry,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.productType,
        inputType: INPUT_TYPE.CATEGORY,
        label: '판매 상품의 종류',
        defaultValue: '',
        validator: validateCategory,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.customerTransaction,
        inputType: INPUT_TYPE.AMOUNT,
        label: '객단가',
        defaultValue: '',
        validator: validateAmount,
        essential: true
    },
    {
        id: '',
        inputType: ''
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.estimatedVolumePerMonth,
        inputType: INPUT_TYPE.AMOUNT,
        label: '월 예상 볼륨',
        defaultValue: '',
        validator: validateAmount,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.address,
        inputType: INPUT_TYPE.ADDRESS,
        label: '사업장 주소',
        defaultValue: '',
        validator: validateAddress,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.headStoreAddress,
        inputType: INPUT_TYPE.ADDRESS,
        label: '본점 주소',
        defaultValue: '',
        validator: validateAddress,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.representativeTelephone,
        inputType: INPUT_TYPE.CONTACT,
        label: '사업장 대표 연락처',
        placeholder: '-없이 숫자만 입력해 주세요.',
        defaultValue: '',
        validator: validatePhoneNumber,
        essential: true
    },
    {
        id: BUSINESS_DETAIL_CORPORATE_FORM_ID.representativeEmail,
        inputType: INPUT_TYPE.BASIC,
        label: '사업장 대표 이메일',
        defaultValue: '',
        validator: validateManagerEmail,
        essential: true
    }
];