const satisfiedResult = {
    result: true,
    message: "유효한 값입니다."
};

export default function validatePhoneNumber(userInput) {
    const koreanPhoneNumber = /^\d{7,8}$/;
    return koreanPhoneNumber.test(userInput) ? satisfiedResult : {result: false, message: "전화번호 형식에 맞지 않습니다."};
}