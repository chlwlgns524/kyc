const satisfiedResult = {
    result: true,
    message: "유효한 값입니다."
};

export function validateAmount(userInput) {
    const companyEnNameValidator = [
        validateIfAmountIsNotEmpty,
        validateIfAmountIsWellFormatted
    ];

    const relevantValidator = companyEnNameValidator.find(validator => {
        const validated = validator(userInput);
        return !validated.result;
    });

    return relevantValidator === undefined ? satisfiedResult : relevantValidator(userInput);
}

function validateIfAmountIsNotEmpty(userInput) {
    return userInput.length !== 0 ? satisfiedResult : {result: false, message: "금액을 입력해 주세요."}
}
function validateIfAmountIsWellFormatted(userInput) {
    return /^\d+(\.\d{0,2})?$/.test(userInput) ? satisfiedResult : {result: false, message: "금액 형식에 맞지 않습니다."};
}