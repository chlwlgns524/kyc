export class Gender {
    static MALE = "male";
    static FEMALE = "female";
}

export const REPRESENTATIVE = {
    id: generateId('representative'),
    idCardFront: null,
    idCardBack: null,
    nameKr: '',
    lastName: '',
    firstName: '',
    country: '',
    gender: Gender.MALE,
    birthdate: '',
};

export const AGENT = {
    id: generateId('agent'),
    nameKr: '',
    lastName: '',
    firstName: '',
    country: '',
    gender: Gender.MALE,
    birthDate: ''
};

export const PRIVATE_OWNER = {
    id: generateId('privateOwner'),
    nameKr: '',
    lastName: '',
    firstName: '',
    country: '',
    gender: Gender.MALE,
    birthDate: ''
};

export const CORPORATE_OWNER = {
    id: generateId('corporateOwner'),
    nameKr: '',
    lastName: '',
    firstName: '',
    country: '',
    gender: Gender.MALE,
    birthDate: '',
    ownershipShare: ''
};

export function generateId(prefix) {
    return `${prefix}${new Date().getTime()}`;
}