import {Option, OptionsCollection} from "../../../../global/OptionsCollection.js";

export const FOR_TRANSACTION_IN_BUSINESS = Symbol('FOR_TRANSACTION_IN_BUSINESS').description;
export const ETC = Symbol('ETC').description;

export const REGISTRATION_PURPOSE = new OptionsCollection("registrationPurpose", [
        new Option(FOR_TRANSACTION_IN_BUSINESS, FOR_TRANSACTION_IN_BUSINESS, "사업상 거래를 위하여"),
        new Option(ETC, '', "기타"),
]);