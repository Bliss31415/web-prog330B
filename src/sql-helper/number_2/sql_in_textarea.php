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

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $query = $_POST['query'];

    $res = array();
    echo json_encode($res);

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

    
</body>



</html>

<?php
mysqli_close($connect);
?>