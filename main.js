let addMessage = document.querySelector(".message"),
  addButton = document.querySelector(".add"),
  todo = document.querySelector(".todo");

let todoList = [];

if (localStorage.getItem("todo")) {
  todoList = JSON.parse(localStorage.getItem("todo"));
  displayMessages();
}

addButton.addEventListener("click", function () {
  let newTodo = {
    todo: addMessage.value,
    checked: false,
    important: false,
  };

  todoList.push(newTodo);
  displayMessages();
  localStorage.setItem("todo", JSON.stringify(todoList)); //save to JSON by local storage
});

function displayMessages() {
  let displayMessage = "";

  todoList.forEach(function (item, i) {
    displayMessage += `
        <li>
        <input type="checkbox" id="item_${i}"  ${item.checked ? "checked" : ""}>
        <label for='item_${i}'>${item.todo}</label>
        </li>
    `;
    todo.innerHTML = displayMessage;
  });
}

todo.addEventListener("change", function (e) {
  let valueLabel = todo.querySelector(
    "[for=" + e.target.getAttribute("id") + "]"
  ).innerHTML;

  todoList.forEach(function (item) {
    if (item.todo === valueLabel) {
      item.checked = !item.checked;
      localStorage.setItem("item", JSON.stringify(todoList));
    }
  });
  // console.log("forLabel", forLabel);
});
