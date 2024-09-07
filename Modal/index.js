const button = document.getElementById('modal--btn');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('modal__close-btn');

button.addEventListener('click', () => {
	modal.style.display = 'block';
	overlay.style.display = 'block';
});

closeButton.addEventListener('click', () => {
	overlay.style.display = 'none';
	modal.style.display = 'none';
});
