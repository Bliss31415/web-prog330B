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
    $login = $_POST['username'];
    $pASSword = $_POST['password'];

    if (($login == 'admin') && ($pASSword == 'password')){
        $_SESSION['user_id'] = 1;
        header('Location: sukili_help.php');
        exit;
    }
    else {
        echo'Wrong login or pASSword';
    }

}


?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
    <title>СУКИЛИ</title>
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <meta name="generator" content="Geany 2.0" />
</head>

<body>
    <form method = "POST">
        <label for = "login">login:</label>
        <input id = "login" name = "login" type="text" required><br>

        <label for="password">pASSword:</label>
        <input id="password" name="password" type="password" required><br>

        <button type="submit">Enter</button>
    </form>
    
</body>



</html>

<?php
mysqli_close($connect);
?>