const input = document.getElementById('task');
const button = document.getElementById('btn-task');
const itemsDiv = document.getElementById('items');

let taskArray = [];
let count = 0;
function addTask() {
	taskArray.push(input.value);

	for (let i = 0; i < taskArray.length; i++) {
		const item = document.createElement('input');
		const removeButton = document.createElement('button');
		const editButton = document.createElement('button');

		const createDiv = document.createElement('div');
		item.value = taskArray[i];
		item.setAttribute('id', `item-${count}`);
		item.setAttribute('disabled', true);
		removeButton.textContent = 'Remove';
		editButton.textContent = 'Edit';
		editButton.setAttribute('onclick', 'handleEdit(event)');
		removeButton.setAttribute('onclick', 'handleRemove(event)');
		removeButton.setAttribute('id', `item-${count}`);
		editButton.setAttribute('id', `item-${count}`);

		createDiv.setAttribute('id', `item-${count}`);
		createDiv.appendChild(item);
		createDiv.appendChild(removeButton);
		createDiv.appendChild(editButton);
		itemsDiv.appendChild(createDiv);
		taskArray = [];
		input.value = '';
		input.focus();
		count++;
	}
}

function handleRemove(event) {
	const parentDiv = document.getElementById('items');
	const child = document.getElementById(event.target.id);
	console.log(event.target.child, child);
	parentDiv.removeChild(child);
}

function handleEdit(event) {
	const child = document.getElementById(event.target.id).children[0];
	const editButtonStatus = document.getElementById(event.target.id).children[2];

	if (editButtonStatus.textContent === 'Edit') {
		editButtonStatus.textContent = 'Update';
		child.disabled = false;
		child.focus();
	} else {
		editButtonStatus.textContent = 'Edit';
		child.disabled = true;
		input.focus();
	}
}
