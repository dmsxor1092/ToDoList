const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  //console.dir(event.target.parentElement.innerText);
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveTodo();
}


function paintToDo(newTodo) {
  // console.log(`i will paint ${newTodo}`);
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = " ❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  //console.log(li);
  toDoList.appendChild(li);
}
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  // console.log(toDoInput.value);
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };
  toDos.push(newTodoObj);
  // console.log(newTodo, toDoInput.value);
  paintToDo(newTodoObj);
  saveTodo();
}


toDoForm.addEventListener("submit", handleToDoSubmit);

const saveTodos = localStorage.getItem(TODOS_KEY);
//console.log(saveTodos);문자열
if (saveTodos !== null) {
  const parsedToDos = JSON.parse(saveTodos);
  toDos = parsedToDos;
  //console.log(parsedToDos);어레이
  parsedToDos.forEach(paintToDo);

  //(item) => console.log("this is the turn of", item );

  //function sayHello(item) {
  // console.log("this is the turn of", item );
}