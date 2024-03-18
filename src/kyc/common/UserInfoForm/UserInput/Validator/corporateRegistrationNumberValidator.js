const satisfiedResult = {
    result: true,
    message: "유효한 법인등록번호 형식입니다."
};

export function validateCorporateRegistrationNumber(userInput) {
    return /^\d{6}-\d{7}$/.test(userInput) ? satisfiedResult : {result: false, message: "법인등록번호 형식에 맞지 않습니다."};
}