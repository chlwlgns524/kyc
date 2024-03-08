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