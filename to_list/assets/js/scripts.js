document.getElementById('task_form').addEventListener('submit', function(e){
    e.preventDefault();

    const taskInput = document.getElementById('task_input');
    const taskText = taskInput.value;

    if (taskText.trim() !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(text) {
    const taskList = document.getElementById('task_list');
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', toggleTaskCompletion);

    const label = document.createElement('label');
    label.textContent = text;

    li.appendChild(checkbox);
    li.appendChild(label);
    taskList.appendChild(li);
}

function toggleTaskCompletion(e) {
    const ul = e.target.parentElement;
    ul.classList.toggle('background_list')
}

function toggleTaskCompletion(e) {
    const li = e.target.parentElement;
    li.classList.toggle('completed');
}

document.getElementById('reset_button').addEventListener('click', function() {
    const taskList = document.getElementById('task_list');
    taskList.innerHTML = '';
});