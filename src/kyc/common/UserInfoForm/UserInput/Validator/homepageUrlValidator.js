const satisfiedResult = {
    result: true,
    message: "유효한 URL 주소입니다."
};

export default function validateHomepageUrl(userInput) {
    const idValidatorList = [
        validateIfUrlIsValid,
    ];

    const relevantValidator = idValidatorList.find(validator => {
        const validated = validator(userInput);
        return !validated.result;
    });

    return relevantValidator === undefined ? satisfiedResult : relevantValidator(userInput);
}

function validateIfUrlIsValid(userInput) {
    const urlRegex = /^https:\/\/www\.(.*\.com|.*\.co\.kr|)$/;
    return urlRegex.test(userInput) ? satisfiedResult : {result: false, message: "유효하지 않은 URL 주소입니다."};
}