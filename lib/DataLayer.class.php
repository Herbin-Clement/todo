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
        $sql = "select * from todo.todo";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetchAll();
        return $res;
    }

    function getTodos(): array {
        $sql = "select * from todo.todos";
        $stmt = $this->conn->prepare($sql);
        $stmt->execute();
        $res = $stmt->fetchAll();
        return $res;
    }
}