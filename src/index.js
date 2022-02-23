var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "close delete-btn";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.remove();
  };
}

var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "INPUT") {
      let spanElem = ev.target.nextSibling;
      spanElem.classList.toggle("isDone");
    }
  },
  false
);

function newElement(e) {
  e.preventDefault();
  let li = document.createElement("li");
  let inputField = document.createElement("INPUT");
  inputField.setAttribute("class", "form-check-input mt-0");
  inputField.setAttribute("type", "checkbox");
  inputField.setAttribute("name", "checkbox");
  inputField.setAttribute("value", "");

  let inputValue = document.getElementById("input-task").value;
  var span = document.createElement("SPAN");
  let t = document.createTextNode(inputValue);
  span.setAttribute("class", "task list-group-item");

  li.appendChild(inputField);
  span.appendChild(t);
  li.appendChild(span);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("task-list").appendChild(li);
  }
  document.getElementById("input-task").value = "";

  var span = document.createElement("button");
  var txt = document.createTextNode("\u00D7");
  span.className = "close delete-btn";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.remove();
    };
  }
}

let form = document.getElementById("tasks-form");
form.addEventListener("submit", newElement);
