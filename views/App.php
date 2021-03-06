<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="views/App.css" rel="stylesheet" type="text/css">
    <script src="js/fetchUtils.js" async></script>
    <script src="js/fetch.js" async></script>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <title>App</title>
</head>
<body>
    <div class="App">
        <div class="sideBar">
            <div class="sideBarTitle"><span>Todo Application</span></div>
            <div class="sideBarTools">
                <div class="sideBarTool">
                    <div class="sideBarSubTitle">Todos</div>
                    <div class="sideBarTodoTitle">
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="header">

            </div>
            <div class="todoApp">
                <div class="todoTitle"></div>
                <div class="todoList">
                </div>
                <form id="addTodo">
                    <div class="todoInput">
                        <input class="todoTextToAdd" type="text" placeholder="Enter a todo">
                    </div>
                    <div class="buttonInput">
                        <button type="submit">Add Todo</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</body>
</html>