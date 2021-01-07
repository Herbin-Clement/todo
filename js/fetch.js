function getTodo() {
    fetchFromJson('services/getTodo.php')
    .then(displayTodoList);
}

const createTodo = (todoData) => {
    let todoItem = document.createElement('div');
    todoItem.classList.add("todoItem");
    todoItem.setAttribute('id', todoData.todoId);
    
    let todoText = document.createElement('div');
    todoText.classList.add("todoText");
    if (todoData.isCheck == 1) {
        todoText.classList.add("isDo");
    } else {
        todoText.classList.add("isNotDo");
    }
    todoText.textContent = todoData.todo;
    todoItem.addEventListener("click", changeCheck);
    todoItem.append(todoText);
    return todoItem;
} 

const displayTodoTitle = (todoTitle) => {
    const CurrentTitle = document.querySelector('.todoTitle');
    CurrentTitle.textContent = todoTitle;
}

const displayTodoList = (todoListData) => {
    const todoInput = document.querySelector('.todoInput');
    const todoList = document.querySelector('.todoList');
    displayTodoTitle(todoListData.result[0].todosName);
    clearTodoList(todoList);
    todoInput.setAttribute("todosId", todoListData.result[0].todosId);
    todoListData.result.forEach((todoItem) => {
        const todo = createTodo(todoItem);
        todoList.append(todo);
    });
}

function getTodoTitle() {
    fetchFromJson('services/getTodoTitles.php')
    .then(displayTodoTitles);
}

const clearTodoList = (todoList) => {
    while (todoList.lastElementChild) {
        todoList.removeChild(todoList.lastElementChild);
    }
}

const createTodoTitle = (todoTitleData) => {
    let todosTitle = document.createElement('div');
    todosTitle.textContent = todoTitleData.todosName;
    todosTitle.setAttribute("todosId", todoTitleData.todosId);
    return todosTitle;
} 

const displayTodoTitles = (todoTitlesData) => {
    const sideBarTodoTitle = document.querySelector('.sideBarTodoTitle');
    todoTitlesData.result.forEach((todoTitle) => {
        console.log(todoTitle);
        const title = createTodoTitle(todoTitle);
        sideBarTodoTitle.append(title);
    });
}

const changeCheck = (ev) => {
    classList = ev.target.classList;
    classList.toggle("isDo");
    classList.toggle("isNotDo");
    const id = ev.target.parentNode.id;
    fetchFromJson(`services/updateCheck.php?todoId=${id}`)
    .then((x) => console.log(x));
    // fetchFromJson("services/getTodo.php")
    // .then((x) => console.log(x.result[0]));
}

const addTodo = (ev) => {
    ev.preventDefault();
    const todoInput = document.querySelector('.todoInput');
    const todoText = document.querySelector('.todoTextToAdd').value;
    const todosId = todoInput.getAttribute("todosId");
    if (todoText != "") {
        fetchFromJson(`services/addTodo.php?todosId=${todosId}&todoText=${todoText}`)
        .then((x) => console.log(x));
        getTodo();
    }
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


document.forms.addTodo.addEventListener("submit", addTodo);
getTodo();
getTodoTitle();