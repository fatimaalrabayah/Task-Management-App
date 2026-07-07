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


    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;


    checkbox.addEventListener('change', function () {

      task.completed = checkbox.checked;

      renderTasks();

    });



    const span = document.createElement('span');
    span.className = "task-text";
    span.textContent = task.title;



    if (task.completed) {

      span.style.textDecoration = "line-through";
      span.style.opacity = "0.5";

    }



    li.appendChild(checkbox);
    li.appendChild(span);

const deleteBtn = document.createElement("button");

deleteBtn.textContent = "Delete";


deleteBtn.addEventListener("click", function(){


    const confirmDelete = confirm(
        "Are you sure you want to delete this task?"
    );


    if(confirmDelete){


        tasks = tasks.filter(function(t){

            return t.id !== task.id;

        });


        renderTasks();

        updateCounter();

    }


});
li.appendChild(deleteBtn);
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