export const PAYMENT_SERVICE_TYPE = {
    paymentService: 'paymentService',
    paymentMethod: 'paymentMethod',
    countryCode: 'countryCode',
}

export function convertObjToList(obj, type) {
    const list = [];
    for (const key in obj) {
        if (obj[key])
            list.push(getObjectFromType(type)[key]);
    }
    return list;
}

const PAYMENT_SERVICE = {
    webOrMobile: 'ONLINE_PAY',
    autoPayment: 'AUTO_PAY',
    linkPayment: 'LINK_PAY',
};

const PAYMENT_METHOD = {
    creditCard: 'KR_CREDIT',
    simplePayment: 'KR_SIMPLE',
    cashPayment: 'KR_CASH',
    globalCreditCard: 'GL_CREDIT',
    globalSimplePayment: 'GL_SIMPLE',
    chinesePayment: 'GL_CHINA',
    japanesePayment: 'GL_JAPAN',
    others: 'GL_EXTRA',
};

const COUNTRY_CODE = {
    USD: "USD",
    EUR: "EUR",
    JPY: "JPY",
    SGD: "SGD",
    AUD: "AUD",
    HKD: "HKD",
    THB: "THB",
    GBP: "GBP",
    CAD: "CAD",
    RUB: "RUB",
    TWD: "TWD",
    MYR: "MYR",
    VND: "VND",
    PHP: "PHP",
    MNT: "MNT",
    NZD: "NZD",
    AED: "AED",
    MOP: "MOP",
    BRL: "BRL",
    KZT: "KZT",
    NOK: "NOK",
    SAR: "SAR",
    TRY: "TRY",
    KRW: "KRW",
};

function getObjectFromType(type) {
    switch (type) {
        case PAYMENT_SERVICE_TYPE.paymentService:
            return PAYMENT_SERVICE
        case PAYMENT_SERVICE_TYPE.paymentMethod:
            return PAYMENT_METHOD
        default:
            return COUNTRY_CODE
    }
}