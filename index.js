const taskInput = document.getElementById("taskInput");
const addBUtton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addBUtton.addEventListener("click", addTask);

// function to add a new Task
function addTask() {
  var taskText = taskInput.value;
  if (taskText.trim() === "") {
    alert("Please enter a task.");
  }
  var newTask = document.createElement("li");
  newTask.textContent = taskText;
  taskList.appendChild(newTask);

  taskInput.value = "";
  taskInput.focus();

  newTask.addEventListener("click", toggleTask);
}

function toggleTask() {
  this.classList.toggle("completed");
}
