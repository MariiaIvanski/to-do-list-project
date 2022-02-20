let checkbox = document.querySelectorAll("input[name=checkbox]");
let taskDone = document.querySelectorAll(".task");

for (let x = 0; x < checkbox.length; x++) {
  checkbox[x].addEventListener("change", function () {
    if (this.checked) {
      taskDone[x].classList.add(`isDone`);
      console.log("test2");
    } else {
      taskDone[x].classList.remove(`isDone`);
      console.log("test3");
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
  let newTask = document.querySelector("#input-task").value.trim();
  if (newTask.length === 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#task-list").innerHTML += `
            <li>
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
