document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('myButton').addEventListener('click', () => {
        const userInput = document.getElementById('userInput').value;
        if (userInput.trim() !== "") {
            const newRow = document.createElement('tr');

            const messageText = document.createElement('td');
            messageText.textContent = userInput;


            const chek = document.createElement('td');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('click', function () { messageText.style.textDecoration = checkbox.checked ? 'line-through' : 'none'; },);
            chek.appendChild(checkbox);

            const actionCell = document.createElement('td');
            const deleteIcon = document.createElement('span');
            deleteIcon.innerHTML = "&#128465;"; // Unicode for trash can
            deleteIcon.classList.add('trash-icon');
            deleteIcon.addEventListener('click', () => {
                newRow.remove();
            });
            actionCell.appendChild(deleteIcon);

            newRow.appendChild(chek);
            newRow.appendChild(messageText);
            newRow.appendChild(actionCell);
            document.getElementById('messages').appendChild(newRow);

            document.getElementById('userInput').value = '';
        }
    });
});

