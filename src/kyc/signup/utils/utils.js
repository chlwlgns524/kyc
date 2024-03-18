import {updateBusinessDetailPrivate} from "../../../api/sign-up.js";

export function formatSecondsToStandardTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

export function generateAuthNumber(n) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++)
        randomNumbers.push(Math.floor(Math.random() * 10));
    return randomNumbers.join('');
}

export function extractCurrentUserInfo(id, user) {
    return user.find(info => info.id === id);
}

export function checkUserInfo(user) {
    const allValidated = user.every(info => info.validated);
    if (!allValidated) {
        alert('입력한 정보가 잘못되었습니다. 다시 확인해 주세요.');
        return false;
    }
    return true;
}

export function extractUserValue(user, id) {
    return user.find(info => info.id === id).value ?? '';
}