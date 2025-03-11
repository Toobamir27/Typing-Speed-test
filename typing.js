const quoteElement = document.getElementById('quote');
const userInputElement = document.getElementById('user-input');
const startBtn = document.getElementById('start-btn');
const timeElement = document.getElementById('time');
const accuracyElement = document.getElementById('accuracy');
const wpmElement = document.getElementById('wpm');

let startTime;
let endTime;
let totalChars;
let correctChars;

startBtn.addEventListener('click', () => {
    userInputElement.value = '';
    userInputElement.focus();
    startTime = new Date();
    startBtn.disabled = true;
});

userInputElement.addEventListener('input', () => {
    const userText = userInputElement.value;
    const quoteText = quoteElement.textContent;

    totalChars = quoteText.length;
    correctChars = 0;

    for (let i = 0; i < userText.length; i++) {
        if (userText[i] === quoteText[i]) {
            correctChars++;
        }
    }

    if (userText.length === quoteText.length) {
        endTest();
    }
});

function endTest() {
    endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    const minutes = timeTaken / 60;
    const wpm = Math.round(correctChars / 5 / minutes);
    const accuracy = Math.round((correctChars / totalChars) * 100);

    timeElement.textContent = timeTaken;
    accuracyElement.textContent = accuracy;
    wpmElement.textContent = wpm;

    startBtn.disabled = false;
}