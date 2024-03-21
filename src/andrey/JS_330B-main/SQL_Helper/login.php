<?php
session_start();

$host = "localhost";
$port = "5432";
$dbname = "postgres";
$user = "postgres";
$password = "123456";

$connect = pg_connect("host=$host port=$port dbname=$dbname user=$user password=$password");
if (!$connect) {
    die("Не удалось подключиться к базе данных");
}

if(isset($_SESSION['users']) && $_SESSION['users'] === true){
    header("Location: index.php");
    exit;
}


if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $login = $_POST['login'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE login = $1 AND password = $2";
    $stmt = pg_prepare($connect, "login.php", $query);
    $result = pg_execute($connect, "login.php", array($login, $password));
    
    $user = pg_fetch_assoc($result);

    if ($user) {
        $_SESSION['users'] = true;
        $_SESSION['users_id'] = $user['id'];

        header("Location: index.php");
        exit;
    } else {
        echo "Неверный логин или пароль";
    }
}

function getLoginForm($method,$action){
    return'
     <form id="form" method="'.$method.'" action="'.$action.'" class="login-form">
        <h2 class="text-center">Вход</h2>
        <div class="form-group">
            <input type="text" class="form-control" id="login" name="login"  placeholder="Введите логин">
        </div>
        <div class="form-group">
            <input type="password" class="form-control" id="password" name="password" placeholder="Введите пароль">
        </div>
        <button type="submit" class="btn btn-primary btn-block">Войти</button>
     </form>';
}
?> 

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <title>Вход</title>
</head>
<body>
    <div class="container mt-4">
            <?php
            if(isset($_SESSION['users']) && $_SESSION['users'] === true){
                header("Location: index.php");
                exit;
            }

            echo getLoginForm("POST","login.php");        
            ?>
    </div>
</body>
</html>