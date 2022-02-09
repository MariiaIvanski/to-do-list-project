document.querySelectorAll(".form-check-input").onclick = function () {
  let taskDone = document.querySelectorAll(".task");
  for (var i = 0; i < taskDone.length; i++) {
    taskDone[i].addEventListener("click", function (e) {
      e.preventDefault();
      taskDone[i].classList.toggle("isDone");
    });
  }
};

var current_tasks = document.querySelectorAll(".delete-btn");
for (var i = 0; i < current_tasks.length; i++) {
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
                <input class="form-check-input mt-0" type="checkbox" value="" /><span class="task list-group-item" id="taskname">
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
  var current_tasks = document.querySelectorAll(".delete-btn");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
};
