<?php
session_start();

// Проверяем авторизацию
if(!isset($_SESSION['loggedIn']) || $_SESSION['loggedIn'] !== true) {
    header('Location: index.php');
    exit;
}

// Получаем значения из POST-запроса и сохраняем в сессии
$_SESSION['col'] = $_POST['col'];
$_SESSION['row'] = $_POST['row'];
$_SESSION['font'] = $_POST['font'];

// Перенаправляем на главную страницу
header('Location: index.php');
?>