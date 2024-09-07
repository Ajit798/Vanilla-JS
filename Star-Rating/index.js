const container = document.getElementById('star-container');

const fragment = document.createDocumentFragment(); // Does not contribute in dom memory

let ratingCount = -Infinity;

for (let i = 0; i < 5; i++) {
	const div = document.createElement('div');
	div.innerText = `Star${i + 1}`;
	div.setAttribute('id', `Star${i + 1}`);
	div.setAttribute('class', 'btn-star');
	fragment.appendChild(div);
}

container.appendChild(fragment);

const allButtons = document.querySelectorAll('.btn-star');

container.addEventListener('click', (event) => {
	const target = event.target.id;
	const ind = Number(target[target.length - 1]);
	ratingCount = ind - 1;

	for (let i = 0; i < allButtons.length; i++) {
		if (i <= ind - 1) {
			allButtons[i].classList.add('rated');
		} else {
			allButtons[i]?.classList.remove('rated');
		}
	}
});

allButtons.forEach((item, ind) => {
	item.addEventListener('mouseenter', () => {
		for (let i = 0; i <= allButtons.length; i++) {
			if (i <= ind) {
				allButtons[i].classList.add('rated');
			}
		}
	});
});

container.addEventListener('mouseleave', () => {
	allButtons.forEach((item, ind) => {
		if (ind <= ratingCount) {
			item.classList.add('rated');
		} else {
			item.classList.remove('rated');
		}
	});
});
