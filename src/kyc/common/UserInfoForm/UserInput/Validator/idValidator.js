// const satisfiedResult = {
//     result: true,
//     message: "사용 가능한 아이디입니다."
// };
const satisfiedResult = {
    result: false,
    message: "아이디 중복 확인을 해주세요."
};


export default function validateId(userInput) {
    const idValidatorList = [
        validateIfLengthOfIdIsEnough,
    ];

    const relevantValidator = idValidatorList.find(validator => {
        const validated = validator(userInput);
        return !validated.result;
    });

    return relevantValidator === undefined ? satisfiedResult : relevantValidator(userInput);
}

function validateIfLengthOfIdIsEnough(userInput) {
    const longEnough = 5 <= userInput.length && userInput.length <= 20;
    return longEnough ? satisfiedResult : {result: false, message: "아이디의 길이는 5자 이상 20자 이하여야 합니다."};
}