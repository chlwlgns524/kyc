const satisfiedResult = {
    result: true,
    message: "유효한 회사명입니다."
};

export default function validateCompany(userInput) {
    return userInput.length >= 1 ? satisfiedResult : {result: false, message: "회사명을 입력해주세요."};
}

export function validateCompanyEn(userInput) {
    const companyEnNameValidator = [
        validateIfLengthOfComapnyEnIsEnough,
        validateIfLettersAreAllEn
    ];

    const relevantValidator = companyEnNameValidator.find(validator => {
        const validated = validator(userInput);
        return !validated.result;
    });

    return relevantValidator === undefined ? satisfiedResult : relevantValidator(userInput);
}

function validateIfLengthOfComapnyEnIsEnough(userInput) {
    return userInput.length > 0 ? satisfiedResult : {result: false, message: "회사명을 입력해주세요."};
}

function validateIfLettersAreAllEn(userInput) {
    return /^[a-zA-Z0-9₩~!@#$%^&*()_+=,.<>/?;':"{}[\]\\\s]+$/.test(userInput) ? satisfiedResult : {result: false, message: "영문, 숫자 또는 특수문자여야 합니다."};
}