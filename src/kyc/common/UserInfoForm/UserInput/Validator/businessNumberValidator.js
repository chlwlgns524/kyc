const satisfiedResult = {
    result: true,
    message: "유효한 사업자등록번호 형식입니다."
};

export function validateBusinessNumber(userInput) {
    return /^[0-9]{3}-[0-9]{2}-[0-9]{5}$/.test(userInput) ? satisfiedResult : {result: false, message: "사업자등록번호 형식에 맞지 않습니다."};
}