const satisfiedResult = {
    result: true,
    message: "유효한 값입니다."
};

export function validateAddress(userInput) {
    const addressValidator = [
        validateIfLengthOfAddressIsEmpty,
    ];

    const relevantValidator = addressValidator.find(validator => {
        const validated = validator(userInput);
        return !validated.result;
    });

    console.log(relevantValidator);
    return relevantValidator === undefined ? satisfiedResult : relevantValidator(userInput);
}

function validateIfLengthOfAddressIsEmpty(userInput) {
    return userInput?.length !== 0 ? satisfiedResult : {result: false, message: "나머지 주소를 입력해 주세요."}
}