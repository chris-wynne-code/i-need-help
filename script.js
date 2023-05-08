const doors = document.getElementById('doors');
const button = document.getElementById('button');
const modal = document.getElementById('modal');

doors.addEventListener('click', () => {
    if(!doors.classList.contains('open')) {
        doors.classList.add('open');
    }
});

button.addEventListener('click', (event) => {
    event.preventDefault();
    if(!modal.classList.contains('open')) {
        modal.classList.add('open');
    }
});