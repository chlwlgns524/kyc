import {Option, OptionsCollection} from "../../../../global/OptionsCollection.js";

export const NATION = Symbol('NATION').description;
export const LOCAL_AUTONOMOUS_ENTITY = Symbol('LOCAL_AUTONOMOUS_ENTITY').description;
export const PUBLIC_ORGANIZATION = Symbol('PUBLIC_ORGANIZATION').description;
export const FINANCIAL_INSTITUTION = Symbol('FINANCIAL_INSTITUTION').description
export const QUOTED_COMPANY = Symbol('QUOTED_COMPANY').description;
export const CORPORATION_SUBJECT_TO_SUBMISSION_OF_BUSINESS_REPORT = Symbol('CORPORATION_SUBJECT_TO_SUBMISSION_OF_BUSINESS_REPORT').description;

export const ORGANIZATION = new OptionsCollection('organization', [
        new Option(NATION, NATION, '국가'),
        new Option(LOCAL_AUTONOMOUS_ENTITY, LOCAL_AUTONOMOUS_ENTITY, '지방자치단체'),
        new Option(PUBLIC_ORGANIZATION, PUBLIC_ORGANIZATION, '공공단체'),
        new Option(FINANCIAL_INSTITUTION, FINANCIAL_INSTITUTION, '금융기관'),
        new Option(QUOTED_COMPANY, QUOTED_COMPANY, '상장회사'),
        new Option(CORPORATION_SUBJECT_TO_SUBMISSION_OF_BUSINESS_REPORT, CORPORATION_SUBJECT_TO_SUBMISSION_OF_BUSINESS_REPORT, '사업보고서제출대상법인')
]);