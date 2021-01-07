<?php
class DataLayer {
    private $conn = NULL;

    function __construct(string $DSNFileName) {
        $dsn = "uri:$DSNFileName";
        // $this->conn = new PDO($dsn);
        $this->conn = new PDO($dsn);
        // paramètres de fonctionnement de PDO :
		$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); // déclenchement d'exception en cas d'erreur
		$this->conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE,PDO::FETCH_ASSOC); // fetch renvoie une table associative
		// réglage d'un schéma par défaut :
        // $this->conn->query('set search_path=todo');
        
    }

    function getTodo(): array {
        $sql = "select * from todo.todo left join todo.todos on todo.todos.todosId=todo.todo.todosId";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetchAll();
        return $res;
    }

    function getTodoTitles(): array {
        $sql = "select * from todo.todos";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetchAll();
        return $res;
    }

    function updateCheck(int $todoId): ?array {
        $sql = "update todo.todo set todo.todo.isCheck=IF(todo.todo.isCheck=1, 0, 1) where todo.todo.todoId=:todoId";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindvalue(":todoId", $todoId);
        $stmt->execute();
        return [];
    }

    function addTodo(int $todosId, string $todoText) {
        $sql = "INSERT INTO todo.todo (todo, isCheck, todosId) VALUES (:todoText, 0, 1)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bindvalue(":todoText", $todoText);
        $stmt->execute();
        return [];
    }
} 