let close = document.getElementsByClassName("delete-btn");
let i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    div.style.display = "none";
  };
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue = document.getElementById("input-task").value;
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("task-list").appendChild(li);
  }
  document.getElementById("input-task").value = "";

  let span = document.createElement("SPAN");
  let txt = document.createElement("SPAN");
  txt.innerHTML = `<button
            type="button"
            class="btn-close delete-btn"
            aria-label="Delete"
          ></button>`;
  span.className = "form-check-input mt-0";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      div.style.display = "none";
    };
  }
}

let inputBtn = document.querySelector("#add-task-button");
inputBtn.addEventListener("click", newElement);

/* function addTask(newTask) {
  let taskList = document.querySelector("#task-list");
  let placeholder = document.querySelector("#input-task");
  taskList.innerHTML += `<li>
          <input class="form-check-input mt-0" type="checkbox" value="" /><span
            class="task list-group-item"
            >${newTask}</span
          ><button type="button" class="btn-close delete-btn" aria-label="Delete"></button>
        </li>`;
  placeholder.value = ``;
  var t = document.createTextNode(newTask);
  li.appendChild(t);
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
*/
