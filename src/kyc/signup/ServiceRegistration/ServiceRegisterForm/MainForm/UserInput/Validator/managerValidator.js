const satisfiedResult = {
    result: true,
    message: "유효한 값입니다."
};

export default function validateManager(userInput) {
    const idValidatorList = [
        validateIfLengthOfIdIsEnough,
        validateIfLettersAreValid,
    ];

    const relevantValidator = idValidatorList.find(validator => {
        const validated = validator(userInput);
        return !validated.result;
    });

    return relevantValidator === undefined ? satisfiedResult : relevantValidator(userInput);
}

function validateIfLettersAreValid(userInput) {
    const regex = /^[a-zA-Z가-힣]+$/;
    return regex.test(userInput) ? satisfiedResult : {result: false, message: "한글 또는 영문 대/소문자만 사용 가능합니다."};
}

function validateIfLengthOfIdIsEnough(userInput) {
    const longEnough = userInput.length >= 2;
    return longEnough ? satisfiedResult : {result: false, message: "이름은 2자 이상이어야 합니다."};
}