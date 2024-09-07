const inputField = document.getElementById('guess');
const submitButton = document.getElementById('submit-btn');
const userGuessContainer = document.getElementById('guess-container');
const guessNotification = document.getElementById('guess-notification');
const buttonContainer = document.getElementById('btn-container');

const CORRECT_ANSWER = 46;

document.body.addEventListener('keydown', (event) => {
	if (event.key === 'Enter') {
		handleSubmit();
	}
});

submitButton.addEventListener('click', handleSubmit);

function handleSubmit() {
	const userGuesses = [];
	const inputValue = inputField.value;

	if (inputValue > 0 && inputValue < 100) {
		userGuesses.push(inputValue);

		addUserGuess(userGuesses);

		handleToastNotification(inputValue);
	} else {
		alert('Please Enter Valid Number');
	}
}

function addUserGuess(userGuesses) {
	userGuesses.forEach((ele, ind) => {
		const answerText = document.createElement('p');
		answerText.innerHTML = `${ele}${ind === userGuesses.length - 1 ? '' : ','}`;
		userGuessContainer.appendChild(answerText);
	});
}

function handleToastNotification(inputValue) {
	if (Number(inputValue) > CORRECT_ANSWER) {
		guessNotification.innerHTML = 'Your guess is too high';
	}
	if (Number(inputValue) < CORRECT_ANSWER) {
		guessNotification.innerHTML = 'Your guess is too low';
	}
	if (Number(inputValue) === CORRECT_ANSWER) {
		guessNotification.innerHTML = 'Congratulations you won';
		guessNotification.style.color = 'green';
		guessNotification.style.fontWeight = 'bold';
		addResetButton();
	}
}

function addResetButton() {
	const resetButton = document.createElement('button');
	resetButton.textContent = 'Reset';
	resetButton.classList.add('btn');
	resetButton.onclick = function () {
		while (userGuessContainer.firstChild) {
			userGuessContainer.removeChild(userGuessContainer.lastChild);
		}
		guessNotification.innerHTML = '';
		inputField.value = '';
		inputField.focus();
	};
	buttonContainer.appendChild(resetButton);
}
