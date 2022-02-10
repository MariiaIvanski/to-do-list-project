let checkbox = document.querySelectorAll("input[name=checkbox]");
let taskDone = document.querySelectorAll(".task");
for (let x = 0; x < checkbox.length; x++) {
  checkbox[x].addEventListener("change", function () {
    if (this.checked) {
      taskDone[x].classList.toggle(`isDone`);
    } else {
      taskDone[x].classList.toggle(`isDone`);
    }
  });
}

let current_tasks = document.querySelectorAll(".delete-btn");
for (let i = 0; i < current_tasks.length; i++) {
  current_tasks[i].onclick = function () {
    this.parentNode.remove();
  };
}

document.querySelector("#add-task-button").onclick = function () {
  if (document.querySelector("#input-task").value.length === 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#task-list").innerHTML += `
            <li class="task">
                <input class="form-check-input mt-0" type="checkbox" name="checkbox" value="" /><span class="task list-group-item" id="taskname">
                    ${document.querySelector("#input-task").value}
                </span>
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
  let current_tasks = document.querySelectorAll(".delete-btn");
  for (let i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }

  let checkbox = document.querySelectorAll("input[name=checkbox]");
  let taskDone = document.querySelectorAll(".task");
  for (let x = 0; x < checkbox.length; x++) {
    checkbox[x].addEventListener("change", function () {
      if (this.checked) {
        taskDone[x].classList.toggle(`isDone`);
      } else {
        taskDone[x].classList.toggle(`isDone`);
      }
    });
  }
};
