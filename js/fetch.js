function getTodo() {

    fetchFromJson('services/getTodo.php')
    .then(displayTodoList);
}


const createTodo = (todoData) => {
    let todoItem = document.createElement('div');
    todoItem.classList.add("todoItem");

    let todoText = document.createElement('div');
    todoText.classList.add("todoText");
    if (todoData.isCheck == 0) {
        todoItem.classList.add("isDo");
    } else {
        todoItem.classList.add("isNotDo");
    }
    todoText.textContent = todoData.todo;
    todoItem.append(todoText);
    return todoItem;
} 

const displayTodoTitle = (todoTitle) => {
    const Currenttitle = document.querySelector('.todoTitle');
    todoTitle.textContent = todoTitle;
}

const displayTodoList = (todoListData) => {
    displayTodoTitle(todoListData.result[0].todosName);
    const todoList = document.querySelector('.todoList');
    todoListData.result.forEach((todoItem) => {
        const todo = createTodo(todoItem);
        todoList.append(todo);
    });
}

function getTodoTitle() {
    fetchFromJson('services/getTodoTitles.php')
    .then(displayTodoTitles);
}

const createTodoTitle = (todoTitleData) => {
    let todosTitle = document.createElement('div');
    todosTitle.textContent = todoTitleData.todosName;
    return todosTitle;
} 

const displayTodoTitles = (todoTitlesData) => {
    const sideBarTodoTitle = document.querySelector('.sideBarTodoTitle');
    todoTitlesData.result.forEach((todoTitle) => {
        const title = createTodoTitle(todoTitle);
        sideBarTodoTitle.append(title);
    });
}

"use strict";
  /*
 *   get query string from FormData object
 *   fd : FormData instance
 *   returns : query string with fd parameters (without initial '?')
 */
function formDataToQueryString (fd){
  return Array.from(fd).map(function(p){return encodeURIComponent(p[0])+'='+encodeURIComponent(p[1]);}).join('&');
}

{ 
  let makeFetchFunction = function (type){
    let processResponse = function(response){
      if (response.ok)
        return response[type]();
      else
        throw  Error(response.statusText);
    };
    return function(...args){ return fetch(...args).then(processResponse); };
  };
  /*
   *   Fetch functions :
   *      same arguments as fetch()
   *      each function returns a Promise resolving as received data
   *      each function throws an Error if not response.ok
   *   fetchText : returns Promise resolving as received data, as string
   *   fetchObject : returns Promise resolving as received data, as object (from JSON data)
   *   fetchFromJson : fetchFromObject alias
   *   fetchBlob : returns Promise resolving as received data, as Blob
   *     ...
   */
  var fetchObject = makeFetchFunction('json');
  var fetchFromJson = fetchObject;
  var fetchBlob = makeFetchFunction('blob');
  var fetchText = makeFetchFunction('text');
  var fetchArrayBuffer = makeFetchFunction('arrayBuffer');
  var fetchFormData = makeFetchFunction('formData');
}


getTodo();
getTodoTitle();