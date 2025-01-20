const addButton = document.getElementById('add-btn');
const deleteAllButton = document.getElementById('delete-all-btn');
const notesContainer = document.getElementById('notes-container');

// Function to create a new note
function createNote(text = '', color = '#fffa91', timestamp = new Date().toLocaleString()) {
    const note = document.createElement('div');
    note.classList.add('note');
    note.style.backgroundColor = color;

    note.innerHTML = `
        <textarea placeholder="Write your note...">${text}</textarea>
        <div class="timestamp">${timestamp}</div>
        <button class="delete-btn">&times;</button>
        <input type="color" class="color-picker" value="${color}" />
    `;

    const deleteBtn = note.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        notesContainer.removeChild(note);
    });

    const colorPicker = note.querySelector('.color-picker');
    colorPicker.addEventListener('input', (e) => {
        note.style.backgroundColor = e.target.value;
    });

    notesContainer.appendChild(note);
}

// Add a note on button click
addButton.addEventListener('click', () => {
    createNote();
});

// Clear all notes on "Delete All Notes" button click
deleteAllButton.addEventListener('click', () => {
    notesContainer.innerHTML = ''; // Remove all child elements from notesContainer
});
