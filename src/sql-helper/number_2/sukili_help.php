<?php
session_start();

$hostname = "mariadb";
$username = "root";
$password = "password";
$database = "cljournal";
$port = "3306";
$connect = mysqli_connect($hostname,$username,$password,$database,$port);

if (!$connect){
    die('ERROR: '. mysql_error());
}

if (!isset($_SESSION['stolb']))  {
    $_SESSION['stolb'] = '15';
}

if (!isset($_SESSION['strok']))  {
    $_SESSION['strok'] = '30';
}

if (!isset($_SESSION['razmer_shr']))  {
    $_SESSION['razmer_shr'] = '14';
}
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <title>СУКИЛИ ХЭЛП</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="generator" content="Geany 2.0" />
</head>

<body>
    <script src = "num_2.js"></script>

    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/ajax/dist/ajax.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

    <button id = 'save_parameters' onclick="save_parameters()">Сохранить</button>
    <button id = 'load_parameters' onclick="load_parameters()">Загрузить</button>
    <button id = 'use_parameters' onclick="use_parameters()">Применить текущие параменты</button>
    <br>

    <a>Столбцов: </a>
    <input id = 'stolb' type = "number" required>
    <br>

    <a>Строк: </a>
    <input id = 'strok' type = "number" required>
    <br>
    
    <a>Размер шрифта: </a>
    <input id = 'razmer_shr' type = "number" required>
    <br>
    <button id = 'make_query' onclick="make_query()">Сделать запрос</button>
    <?php
    echo" <div>
        <textarea id = 'pole' rows = '$_SESSION[stolb]'>

        </textarea>

    </div>";

    /*if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        $query = $_POST['query'];
    
        $result = mysqli_query($connect,$query);

        $data = array();

        while ($row = mysqli_fetch_assoc($result)){
            $data[] = $row;
        }

        echo json_encode($data);
    
    }*/

    ?>
    <div id='res'></div>
</body>



</html>

<?php
mysqli_close($connect);
?>