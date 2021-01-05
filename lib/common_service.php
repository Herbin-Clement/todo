<?php
date_default_timezone_get();
header('Content-type: application/json; charset=UTF-8');

spl_autoload_register(function ($className) {
    include ("lib/{$className}.class.php");
 });

function answer(array $response) {
    global $args;
    if (is_null($args)) {
        $response['args'] = [];
    } else {
        $response['args'] = $args->getValues();
        unset($response['args']['password']);
    }
    $response['time'] = date('Y-m-d H:i:s');
    echo json_encode($response);
}

function produceError(string $message) {
    answer(['status' => 'error', 'message' => $message]);
}

function produceResult($result) {
    answer(['status' => 'ok', 'result' => $result]);
}

?>