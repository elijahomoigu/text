// Day #3 Week 5

// Selecting Elements
const submitButton = document.querySelector("#new-task-submit");
const tasks = document.querySelector("#tasks");

// Getting Saved Tasks from Local storage on screen Load / refresh
window.addEventListener("DOMContentLoaded", () => {
  const tasks = localStorage.getItem("tasks");
  const taskArr = JSON.parse(tasks);
  taskArr.forEach((task) => {
    createTask(task);
  });
});

// Creating Tasks
submitButton.addEventListener("click", (event) => {
  event.preventDefault();
  const inputBar = document.querySelector("#new-task-input");
  createTask(inputBar.value);
  saveData();
  inputBar.value = "";
});

// Function to create tasks
const createTask = (taskData) => {
  // Selecting Elements
  const checker_El_1 = document.querySelector(".btn-modal-1");
  const modalView = document.querySelector(".modal-view");

  // Creating Elements
  const divTask = document.createElement("div");
  const divContent = document.createElement("div");
  const divActions = document.createElement("div");
  const tagInput = document.createElement("input");
  const edit = document.createElement("button");
  const done = document.querySelector("button");
  const tagBtn_2 = document.createElement("button");

  // Setting Attributes to tags
  divTask.setAttribute("class", "task");
  divContent.setAttribute("class", "content");
  divActions.setAttribute("class", "actions");
  tagInput.setAttribute("class", "text");

  tagInput.setAttribute("type", "text");

  // >>> previously
  // tagInput.setAttribute("value", inputBar.value);
  tagInput.setAttribute("value", taskData);
  tagInput.setAttribute("readonly", "readonly");
  edit.setAttribute("class", "edit");
  done.setAttribute("class", "done");
  
  tagBtn_2.setAttribute("class", "delete");

  // Inserting text into tags
  edit.textContent = "Edit";
  done.textContent = "Done";
  tagBtn_2.textContent = "Delete";

  // Appending Elements
  divContent.appendChild(tagInput);
  divActions.appendChild(edit);
  divActions.appendChild(done);
  divActions.appendChild(tagBtn_2);
  divTask.appendChild(divContent);
  divTask.appendChild(divActions);
  tasks.appendChild(divTask);

  //   Events Listeners
  saveData();
  // Deleting a Task
  tagBtn_2.addEventListener("click", () => {
    // tsk()
    tasks.removeChild(divTask);
    saveData();
  });
  // checker_El_1.addEventListener("click", () => {});

  // Editing a Task
  done.addEventListener("click", () => {
    if (done.textContent === "done") {
      done.textContent = "undone";
      tagInput.classList.add("strike");
    } else {
      done.textContent = "done";
      tagInput.classList.remove("strike");
    }
  });
  edit.addEventListener("click", () => {
    if (edit.textContent === "edit") {
      edit.textContent = "save";
      tagInput.removeAttribute("readonly");
    } else {
      edit.textContent = "edit";
      tagInput.setAttribute("readonly", "readonly");
      saveData();
    }
  });
};
// Finishing a task

// End oF create Task Function
const saveData = () => {
  const tasks = document.querySelectorAll(".task");
  const taskArr = [];
  tasks.forEach((divTask) => {
    const input = divTask.querySelector("input");
    taskArr.push(input.value);
  });
  localStorage.setItem("tasks", JSON.stringify(taskArr));
};
// previously
// submitButton.addEventListener("click", (event) => {
//   event.preventDefault();
//   createTask();
// });
