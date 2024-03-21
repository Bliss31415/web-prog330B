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

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <title>СУКИЛИ ХЭЛП</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="generator" content="Geany 2.0" />
</head>

<body>
    <button>Сохранить</button>
    <button>Загрузить</button>
    <br>

    <a>Столбцов: </a>
    <input type = "number" required>
    <br>

    <a>Строк: </a>
    <input type = "number" required>
    <br>
    
    <a>Размер шрифта: </a>
    <input type = "number" required>
    <br>
    <button>Сделать запрос</button>
    <div>
        <textarea>

        </textarea>

    </div>
</body>



</html>

<?php
mysqli_close($connect);
?>