let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
taskList.forEach(newElement);

function newElement(inputValue) {
  let li = document.createElement("li");
  let inputField = document.createElement("INPUT");
  inputField.setAttribute("class", "form-check-input mt-0");
  inputField.setAttribute("type", "checkbox");
  inputField.setAttribute("name", "checkbox");
  inputField.setAttribute("value", "");

  var span = document.createElement("SPAN");
  let t = document.createTextNode(inputValue);
  span.setAttribute("class", "task list-group-item");

  li.appendChild(inputField);
  span.appendChild(t);
  li.appendChild(span);
  document.getElementById("task-list").appendChild(li);

  var btN = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  btN.className = "close delete-btn";
  btN.appendChild(txt);
  li.appendChild(btN);
  btN.addEventListener("click", (e) => {
    li.parentNode.removeChild(li);
    taskList = taskList.filter((e) => e !== inputValue);
    localStorage.setItem("tasks", JSON.stringify(taskList));
  });

  document.getElementById("input-task").value = "";
}

function handleSubmit(e) {
  e.preventDefault();
  let inputValue = document.getElementById("input-task").value;
  console.log(inputValue);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    taskList.push(inputValue);
    localStorage.setItem("tasks", JSON.stringify(taskList));
    newElement(inputValue);
  }
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "INPUT") {
      let spanElem = e.target.nextSibling;
      spanElem.classList.toggle("isDone");
    }
  },
  false
);

let form = document.getElementById("tasks-form");
form.addEventListener("submit", handleSubmit);
