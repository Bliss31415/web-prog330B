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

$_SESSION['stolb'] = $_POST['stolb'];
$_SESSION['strok'] = $_POST['strok'];
$_SESSION['razmer_shr'] = $_POST['razmer_shr'];

echo '4 NIIGGGGGGGGGERRRRSSSSSSS';
?>
