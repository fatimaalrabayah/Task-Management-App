console.log("Task Management App");
const tasks = [
  {
    id: "task-1",
    title: "Study for the exam",
    completed: false
  },
  {
    id: "task-2",
    title: "Finish the project",
    completed: false
  },
  {
    id: "task-3",
    title: "Read a book",
    completed: true
  },
  {
    id: "task-4",
    title: "Go to the gym",
    completed: false
  },
  {
    id: "task-5",
    title: "Buy groceries",
    completed: true
  }
];

function renderTasks() {
  const taskList = document.getElementById("taskList");

  taskList.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task.title;
    taskList.appendChild(li);
  });
}

renderTasks();