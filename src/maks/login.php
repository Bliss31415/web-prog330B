<?php
session_start();

$hostname = "mariadb";
$username = "root";
$password = "password";
$database = "webdb";
$port = "3306";
$con = mysqli_connect($hostname, $username, $password, $database, $port);
if (!$con) {
    die('Could not connect: ' . mysql_error());
} 



// Проверяем данные пользователя
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $login = $_POST["username"];
    $password = $_POST["password"];
    if($login == "admin" && $password == "admin"){
		$_SESSION['logged_in'] = true;
		$_SESSION['username'] = $login;
		header("Location: index.php");
        exit();
	}else{
        $stmt = mysqli_prepare($con, "SELECT * FROM users WHERE login=? AND password=?");
        mysqli_stmt_bind_param($stmt, "ss", $login, $password);
        mysqli_stmt_execute($stmt);
        mysqli_stmt_store_result($stmt);
        if (mysqli_stmt_num_rows($stmt) > 0) {
            $_SESSION['logged_in'] = true;
            $_SESSION['username'] = $login;
            header("Location: index.php");
            exit();
        }else{
            echo "<p color='red'>неверный пароль</p>";
        }
    }
    
    

}

function loginForm()
{
    return "
    <form method='post'>
        <label for='username'>Имя пользователя:</label>
        <input type='text' id='username' name='username'>
        <label for='password'>Пароль:</label>
        <input type='password' id='password' name='password'>
        <input type='submit' value='Войти'>
    </form>";
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php
      echo loginForm();
    
    ?>

</body>

<?php
mysqli_close($con);  
?>
</html>
