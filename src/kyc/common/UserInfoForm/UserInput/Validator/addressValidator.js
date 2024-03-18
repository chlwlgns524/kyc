const satisfiedResult = {
    result: true,
    message: "나머지 주소가 있을 경우 입력해 주세요."
};

export function validateAddress(userInput) {
    const addressValidator = [
        validateIfLengthOfAddressIsEmpty,
    ];

    const relevantValidator = addressValidator.find(validator => {
        const validated = validator(userInput);
        return !validated.result;
    });

    return relevantValidator === undefined ? satisfiedResult : relevantValidator(userInput);
}

function validateIfLengthOfAddressIsEmpty(userInput) {
    return userInput?.length !== 0 ? satisfiedResult : {result: true, message: "나머지 주소를 입력해 주세요."}
}