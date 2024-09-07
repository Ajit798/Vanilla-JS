import { mockQuizData } from './mockData/mockQuizData.js';

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-btn');
const mainContainer = document.querySelector('.main-container');

let questionCount = 0;
let correctAnswer = 0;
function addQuestions() {
	mockQuizData.forEach((item, ind) => {
		const question = document.createElement('p');
		if (ind === questionCount) {
			question.innerText = item.question;
			question.style.color = 'white';
			questionContainer.appendChild(question);
			addOptions(item.options, item.id);
		}
	});
}
addQuestions();

function addOptions(options, id) {
	options.forEach((ele) => {
		const optionDiv = document.createElement('div');
		optionDiv.classList.add('option');
		optionDiv.setAttribute('id', id);
		optionDiv.onclick = handleOptionClick;
		const option = document.createElement('p');
		optionDiv.innerHTML = ele;
		optionDiv.appendChild(option);
		optionsContainer.appendChild(optionDiv);
	});
}

nextButton.addEventListener('click', () => {
	if (questionCount < mockQuizData.length - 1) {
		questionContainer.removeChild(questionContainer.lastChild);
		while (optionsContainer.firstChild) {
			optionsContainer.removeChild(optionsContainer.lastChild);
		}
		questionCount++;
		addQuestions();
	} else {
		while (mainContainer.firstChild) {
			mainContainer.removeChild(mainContainer.lastChild);
		}
		const div = document.createElement('div');
		div.setAttribute('id', 'game-over');

		const text = document.createElement('p');
		// const playAgainButton = document.createElement('button');
		// playAgainButton.textContent = 'PlayAgain';
		// playAgainButton.onclick = function () {
		// 	while (mainContainer.firstChild) {
		// 		mainContainer.removeChild(mainContainer.lastChild);
		// 	}
		// 	correctAnswer = 0;
		// 	questionCount = 0;
		// 	addDomNode();
		// 	addQuestions();
		// };
		div.innerHTML = 'Game is over';
		div.style.padding = '8px 16px';
		text.innerHTML = `your score is ${correctAnswer}/${mockQuizData.length}`;
		div.appendChild(text);
		// div.appendChild(playAgainButton);
		mainContainer.appendChild(div);
	}
});

function handleOptionClick(event) {
	const { id, innerText } = event.target;
	const findQuestion = mockQuizData.find((ele) => ele.id === id);
	if (innerText === findQuestion.correctAnswer) {
		Array.from(optionsContainer.childNodes).forEach((ele) =>
			ele.classList.add('option:disabled')
		);
		event.target.style.background = 'green';

		correctAnswer++;
	} else {
		console.log(optionsContainer.childNodes);
		const correctAnswerNode = Array.from(optionsContainer.childNodes).find(
			(item) => item.innerText === findQuestion.correctAnswer
		);
		correctAnswerNode.style.background = 'green';
		event.target.style.background = 'red';
	}
}

// function addDomNode() {
// 	const questionContainer = document.createElement('div');
// 	const optionsContainer = document.createElement('div');
// 	const buttonContainer = document.createElement('div');
// 	const button = document.createElement('button');
// 	optionsContainer.setAttribute('id', 'options-container');
// 	questionContainer.setAttribute('id', 'question-container');
// 	buttonContainer.setAttribute('id', 'btn-conatiner');
// 	button.setAttribute('id', 'next-btn');
// 	buttonContainer.appendChild(button);

// 	mainContainer.appendChild(questionContainer);
// 	mainContainer.appendChild(optionsContainer);
// 	mainContainer.appendChild(buttonContainer);
// }
