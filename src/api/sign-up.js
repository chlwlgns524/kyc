import axios from "axios";
import {BACK_END_IP_TEST} from "./server-info.js";
import {LOGIN_ID} from "../global/global-const.js";

const apiService = axios.create({
    baseURL: BACK_END_IP_TEST,
});

const get = async (url, params) => {
    const response = await apiService.get(url, {params});
    return response.data;
};

const post = async (url, data, headers = {'Content-Type': 'application/json'}) => {
    const response = await apiService.post(url, data, {headers});
    return response.data;
};


export async function checkIdDuplication(loginId) {
    try {
        return await get('onboarding/v1/account/id/exist', {loginId: loginId});
    } catch (error) {
        console.error(error);
    }
}

export async function signUp({
                                 terms,
                                 personalInfo,
                                 marketing,
                                 loginId,
                                 password,
                                 companyName,
                                 opName,
                                 opMobileNo,
                                 opEmail,
                                 opTelNo
                             }) {
    try {
        const response = await post('onboarding/v1/account/signup',
                {
                    terms,
                    personalInfo,
                    marketing,
                    loginId,
                    password,
                    companyName,
                    opName,
                    opMobileNo,
                    opEmail,
                    opTelNo
                });
        console.log(response);
        return response;
    } catch (error) {
        console.error(error);
    }
}

export async function updateBusinessDetailPrivate({
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
                                                  }) {
    try {
        const headers = {
            'Content-Type': 'multipart/form-data',
        };
        const formData = new FormData();
        const kycVerificationInfo = {
            bizNo: bizNo,
            compnayNameKr: compnayNameKr,
            companyNameEn: companyNameEn,
            homepageUrl: homepageUrl,
            salesType: salesType,
            companyType: companyType,
            productTypeBig: productTypeBig,
            productTypeMid: productTypeMid,
            productTypeSmall: productTypeSmall,
            customerTransCurrency: customerTransCurrency,
            customerTransAmount: customerTransAmount,
            monthlyExpectVolumeCurrency: monthlyExpectVolumeCurrency,
            monthlyExpectVolumeAmount: monthlyExpectVolumeAmount,
            bizAddressKr: bizAddressKr,
            bizAddressEn: bizAddressEn,
            bizRepMobileNo: bizRepMobileNo,
            bizRepEmail: bizRepEmail
        };
        formData.append("bizRegFile", bizRegFile);
        formData.append("kycVerificationInfo", new Blob([JSON.stringify(kycVerificationInfo)], {type: 'application/json'}));
        return await post(`onboarding/v1/account/register/verify/prv/info/?loginId=${sessionStorage.getItem(LOGIN_ID)}`, formData, headers);
    } catch (error) {
        console.error(error);
    }
}

export async function updateBusinessDetailCorporate({
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
                                                    }) {
    try {
        const headers = {
            'Content-Type': 'multipart/form-data',
        };
        const formData = new FormData();
        const kycVerificationInfo = {
            bizNo: bizNo,
            corpNo: corpNo,
            compnayNameKr: compnayNameKr,
            companyNameEn: companyNameEn,
            corpNameKr: corpNameKr,
            corpNameEn: corpNameEn,
            homepageUrl: homepageUrl,
            salesType: salesType,
            companyType: companyType,
            productTypeBig: productTypeBig,
            productTypeMid: productTypeMid,
            productTypeSmall: productTypeSmall,
            customerTransCurrency: customerTransCurrency,
            customerTransAmount: customerTransAmount,
            monthlyExpectVolumeCurrency: monthlyExpectVolumeCurrency,
            monthlyExpectVolumeAmount: monthlyExpectVolumeAmount,
            bizAddressKr: bizAddressKr,
            bizAddressEn: bizAddressEn,
            officeAddressKr: officeAddressKr,
            officeAddressEn: officeAddressEn,
            bizRepMobileNo: bizRepMobileNo,
            bizRepEmail: bizRepEmail
        };
        formData.append("bizRegFile", bizRegFile);
        formData.append("kycVerificationInfo", new Blob([JSON.stringify(kycVerificationInfo)], {type: 'application/json'}));
        return await post(`onboarding/v1/account/register/verify/corp/info/?loginId=${sessionStorage.getItem(LOGIN_ID)}`, formData, headers);
    } catch (error) {
        console.error(error);
    }
}

export async function updatePaymentDetail(payServiceType, payMethods, description, serviceTargetCountries) {
    try {
        return await post(`onboarding/v1/register/account/payment/info?loginId=${sessionStorage.getItem(LOGIN_ID)}`, {
            payServiceType: payServiceType,
            payMethods: payMethods,
            description: description,
            serviceTargetCountries: serviceTargetCountries
        });
    } catch (error) {
        console.error(error);
    }
}

export async function generateFGKey() {
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic dGVzdF8xODQ5NzA1QzY0MkMyMTdFMEIyRDo=',
    }
    try {
        return await post(`'https://api-test.eximbay.com/v1/payments/ready`, {
                    "payment": {
                        "transaction_type": "PAYMENT",
                        "order_id": "20220819105102",
                        "currency": "KRW",
                        "amount": "330000",
                        "lang": "EN"
                    },
                    "merchant": {
                        "mid": "1849705C64"
                    },
                    "buyer": {
                        "name": `${sessionStorage.getItem(LOGIN_ID)}`,
                        "email": "test@eximbay.com"
                    },
                    "url": {
                        "return_url": "eximbay.com",
                        "status_url": "eximbay.com"
                    }
                }
                , headers);
    } catch (error) {
        console.error(error);
    }
}