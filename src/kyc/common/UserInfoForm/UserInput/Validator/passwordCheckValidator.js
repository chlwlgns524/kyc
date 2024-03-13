const satisfiedResult = {
    result: true,
    message: "비밀번호가 일치합니다."
};

export default function validatePasswordCheck(userInput, password) {
    return userInput === password ? satisfiedResult : {result: false, message: "비밀번호가 일치하지 않습니다."};
}