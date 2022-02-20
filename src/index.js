function manageTasks() {
  let checkbox = document.querySelectorAll("input[type=checkbox]");
  let taskDone = document.querySelectorAll(".task");
  for (let x = 0; x < checkbox.length; x++) {
    checkbox[x].addEventListener("change", function () {
      if (checkbox[x].checked == true) {
        taskDone[x].classList.add(`isDone`);
        checkbox[x].setAttribute("checked", "checked");
      } else {
        taskDone[x].classList.remove(`isDone`);
      }
    });
  }

  let current_tasks = document.querySelectorAll(".delete-btn");
  for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
}

function addNewTask(event) {
  event.preventDefault();
  let newTask = document.querySelector("#input-task").value.trim();
  if (newTask.length === 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#task-list").innerHTML += `
            <li>
                <input class="form-check-input mt-0" type="checkbox" name="checkbox" value="" /><label for="checkbox" class="task list-group-item" id="taskname">
                    ${newTask}
                </label>
               <button
            type="button"
            class="btn-close delete-btn"
            aria-label="Delete"
          ></button>
            </li>
        `;
    let placeholder = document.querySelector("#input-task");
    placeholder.value = "";
  }

  manageTasks();
}

let form = document.querySelector("#tasks-form");
form.addEventListener("submit", addNewTask);

manageTasks();
