const satisfiedResult = {
    result: true,
    message: "유효한 회사명입니다."
};

export default function validateCompany(userInput) {
    return userInput.length >= 1 ? satisfiedResult : {result: false, message: "회사명을 입력해주세요."};
}
