const satisfiedResult = {
    result: true,
    message: "올바른 이메일 형식입니다."
};

export default function validateManagerEmail(userInput) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(userInput) ? satisfiedResult : {result: false, message: '올바른 이메일 형식이 아닙니다.'};
}