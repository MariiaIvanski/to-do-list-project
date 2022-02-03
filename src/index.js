var close = document.getElementsByClassName("delete-btn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function addTask(newTask) {
  let taskList = document.querySelector("#task-list");
  let placeholder = document.querySelector("#input-task");
  taskList.innerHTML += `<li>
          <input class="form-check-input mt-0" type="checkbox" value="" /><span
            class="task list-group-item"
            >${newTask}</span
          ><button type="button" class="btn-close delete-btn" aria-label="Delete"></button>
        </li>`;
  placeholder.value = ``;
}

function handleSubmit(event) {
  event.preventDefault();
  let newTask = document.querySelector("#input-task");
  if (!newTask.value.match(/^[A-Z a-z_-]+$/)) {
    alert("Add your task in English 😉");
    let placeholder = document.querySelector("#input-task");
    placeholder.value = ``;
  } else if (newTask.value == ` `) {
    alert("Please, write something 😉");
    placeholder.value = ``;
  } else {
    addTask(newTask.value.trim());
  }
}

let inputBtn = document.querySelector("#add-task-button");
inputBtn.addEventListener("click", handleSubmit);
