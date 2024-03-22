import {Option, OptionsCollection} from "../../../../global/OptionsCollection.js";

export const PRIVATE_BUSINESS = Symbol('PRIVATE_BUSINESS').description;
export const OFFICE_WORKER = Symbol('OFFICE_WORKER').description;
export const STUDENT = Symbol('STUDENT').description;
export const HOUSEWIFE = Symbol('HOUSEWIFE').description;
export const UNEMPLOYED = Symbol('UNEMPLOYED').description;

export const OCCUPATION = new OptionsCollection('occupation', [
        new Option(PRIVATE_BUSINESS, PRIVATE_BUSINESS, '개인사업자'),
        new Option(OFFICE_WORKER, OFFICE_WORKER, '회사원'),
        new Option(STUDENT, STUDENT, '학생'),
        new Option(HOUSEWIFE, HOUSEWIFE, '주부'),
        new Option(UNEMPLOYED, UNEMPLOYED, '무직'),
]);