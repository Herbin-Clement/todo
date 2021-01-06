<?php
set_include_path('..'.PATH_SEPARATOR);
require_once('lib/common_service.php');
require_once('lib/initDataLayer.php');

try {
    $nulle = $data->updateCheck($_GET["todoId"]);
    produceResult($nulle);
}
catch (PDOException $e){
    produceError($e->getMessage());
}

?>