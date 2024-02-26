const satisfiedResult = {
    result: true,
    message: "유효한 값입니다."
};

export function validateCategory(category) {
    console.log(category);
    if (category.large === '')
        return {result: false, message: "대분류를 선택해 주세요."};
    else if (category.middle === '')
        return {result: false, message: "중분류를 선택해 주세요."};
    else if (category.small === '')
        return {result: false, message: "소분류를 선택해 주세요."};
    else
        return satisfiedResult;
}