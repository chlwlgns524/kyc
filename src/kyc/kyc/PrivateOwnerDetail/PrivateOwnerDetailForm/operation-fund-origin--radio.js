import {Option, OptionsCollection} from "../../../../global/OptionsCollection.js";

export const BUSINESS_INCOME = Symbol('BUSINESS_INCOME').description;
export const REAL_ESTATE_RENTAL_INCOME = Symbol('REAL_ESTATE_RENTAL_INCOME').description;
export const FINANCIAL_INCOME = Symbol('FINANCIAL_INCOME').description;
export const ETC = Symbol('ETC').description;

export const OPERATION_FUND_ORIGIN = new OptionsCollection('operationFundOrigin', [
        new Option(BUSINESS_INCOME, BUSINESS_INCOME, '사업소득'),
        new Option(REAL_ESTATE_RENTAL_INCOME, REAL_ESTATE_RENTAL_INCOME, '부동산소득'),
        new Option(FINANCIAL_INCOME, FINANCIAL_INCOME, '금융소득(이자 및 배당)'),
        new Option(ETC, '', '기타'),
]);