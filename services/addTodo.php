<?php
set_include_path('..'.PATH_SEPARATOR);
require_once('lib/common_service.php');
require_once('lib/initDataLayer.php');

try {
    $todo = $data->addTodo($_GET["todosId"],$_GET["todoText"]);
    produceResult($todo);
}
catch (PDOException $e){
    produceError($e->getMessage());
}

?>