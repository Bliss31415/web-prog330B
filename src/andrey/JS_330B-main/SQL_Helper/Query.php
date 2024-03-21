<?php
$host = "localhost";
$port = "5432";
$dbname = "postgres";
$user = "postgres";
$password = "123456789";

$connect = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
if (!$connect) {
    die("Не удалось подключиться к базе данных");
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $query = $_POST['query'];

    $starttime = microtime(true);

    $result = pg_query($connect, $query);

    $endtime = microtime(true);
    if ($result) {
        $arr = pg_fetch_all($result);
        echo json_encode($arr);
    } else {
        echo json_encode(['Ошибка выполнения запроса']);
    }
}
?> 
