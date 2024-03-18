const satisfiedResult = {
    result: true,
    message: "유효한 값입니다."
};

export function validateBusinessType(userInput) {
    return userInput.length > 0 ? satisfiedResult : {result: false, message: "업태를 입력해 주세요."};
}