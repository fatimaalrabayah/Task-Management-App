console.log("Task Management App");

let tasks = [];
let nextId = 1;

const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const counterSpan = document.querySelector('#incompleteCounter span');

function generateId() {
  return nextId++;
}

function updateCounter() {
  const incomplete = tasks.filter(task => !task.completed).length;
  counterSpan.textContent = incomplete;
}

function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.textContent = task.title;

    li.appendChild(span);
    taskList.appendChild(li);
  });

  updateCounter();
}

function addTask() {
  const title = taskInput.value.trim();

  if (title === '') {
    alert('Please enter a task title.');
    return;
  }

  const newTask = {
    id: generateId(),
    title: title,
    completed: false
  };

  tasks.push(newTask);
  renderTasks();

  taskInput.value = '';
  taskInput.focus();
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

function initializeTasks() {
  const defaultTasks = [
    { id: generateId(), title: 'Study for the exam', completed: false },
    { id: generateId(), title: 'Finish the project', completed: false },
    { id: generateId(), title: 'Read a book', completed: true },
    { id: generateId(), title: 'Go to the gym', completed: false },
    { id: generateId(), title: 'Buy groceries', completed: true }
  ];
  tasks = defaultTasks;
  renderTasks();
}

initializeTasks();