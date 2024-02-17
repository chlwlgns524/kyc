const satisfiedResult = {
    result: true,
    message: "사용 가능한 아이디입니다."
};

export default function validatePassword(userInput) {
    const passwordValidatorList = [
        validateIfLengthOfPasswordIsEnough,
        validateIfAllLettersAreIncluded
    ];

    const relevantValidator = passwordValidatorList.find(validator => {
        const validated = validator(userInput);
        return !validated.result;
    });

    return relevantValidator === undefined ? satisfiedResult : relevantValidator(userInput);
}

function validateIfLengthOfPasswordIsEnough(userInput) {
    const longEnough = 8 <= userInput.length && userInput.length <= 16;
    return longEnough ? satisfiedResult : {result: false, message: "비밀번호는 8자 ~ 16자의 길이여야 합니다."}
}

function validateIfAllLettersAreIncluded(userInput) {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
    return regex.test(userInput) ? satisfiedResult : {result: false, message: "영문, 숫자, 특수문자를 포함하여 입력해 주세요."};
}