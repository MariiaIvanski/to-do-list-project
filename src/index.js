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

let items = document.querySelectorAll("#list li"),
  tab = [],
  liIndex;

for (let i = 0; i < items.length; i++) {
  items[i].onclick = function () {
    liIndex = tab.indexOf(this.innerHTML);
    console.log(this.innerHTML + "INDEX=" + liIndex);
  };
  function removeLI() {
    items[liIndex].parentNode.removeChild(items[liIndex]);
  }
}
