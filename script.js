const inputBox = document.getElementById('input-box');
const addTaskBtn = document.getElementById('add-task');
const tasks = document.querySelector('.tasks');

// function to add tasks to the todo list
function addTask() {
  //   if (inputBox.value) {
  //     console.log(inputBox.value);
  //   } else {
  //     alert('add a task');
  //   }

  //   inputBox.value = '';

  if (inputBox.value === '') {
    alert('You must add a task');
  } else {
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.innerHTML = inputBox.value;
    li.appendChild(span);
    tasks.appendChild(li);
  }

  inputBox.value = '';
  saveTasks();
}

addTaskBtn.addEventListener('click', addTask);

// function to check tasks and also remove tasks
tasks.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveTasks();
  } else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveTasks();
  }
});

// function to store tasks even on refresh
function saveTasks() {
  localStorage.setItem('data', tasks.innerHTML);
}

// function to display saved tasks
function displaySavedTasks() {
  tasks.innerHTML = localStorage.getItem('data');
}
displaySavedTasks();
