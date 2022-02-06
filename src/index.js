var close = document.getElementsByClassName("delete-btn");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input-task").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("task-list").appendChild(li);
  }
  document.getElementById("input-task").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

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
