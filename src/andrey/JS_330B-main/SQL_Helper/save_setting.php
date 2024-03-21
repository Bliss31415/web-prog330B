<?php
session_start();

$columns = $_POST['columns'];
$rows = $_POST['rows'];
$fontsize = $_POST['fontsize'];
$text = $_POST['text'];

$_SESSION['settings'] = array(
    'columns' => $columns,
    'rows' => $rows,
    'fontsize' => $fontsize,
    'text' => $text,
);