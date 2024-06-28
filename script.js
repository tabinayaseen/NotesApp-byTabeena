document.addEventListener('DOMContentLoaded', () => {
    const noteForm = document.getElementById('note-form');
    const notesContainer = document.getElementById('notes-container');

    noteForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addNote();
    });

    const addNote = () => {
        const name = document.getElementById('name').value;
        const note = document.getElementById('note').value;
        const date = new Date().toLocaleString();

        const noteElement = document.createElement('div');
        noteElement.classList.add('note');

        noteElement.innerHTML = `
            <div class="note-header">
                <strong>${name}</strong> <small>${date}</small>
            </div>
            <div class="note-body">${note}</div>
            <div class="note-actions">
                <button class="details" onclick="showDetails(this)">Details</button>
                <button class="update" onclick="updateNote(this)">Update</button>
                <button class="delete" onclick="deleteNote(this)">Delete</button>
            </div>
        `;

        notesContainer.appendChild(noteElement);
        noteForm.reset();
    };

    window.showDetails = (button) => {
        const note = button.closest('.note');
        alert(note.querySelector('.note-body').textContent);
    };

    window.updateNote = (button) => {
        const note = button.closest('.note');
        const name = prompt('Update your name:', note.querySelector('.note-header strong').textContent);
        const noteContent = prompt('Update your note:', note.querySelector('.note-body').textContent);

        if (name && noteContent) {
            note.querySelector('.note-header strong').textContent = name;
            note.querySelector('.note-body').textContent = noteContent;
        }
    };

    window.deleteNote = (button) => {
        const note = button.closest('.note');
        note.remove();
    };
});
