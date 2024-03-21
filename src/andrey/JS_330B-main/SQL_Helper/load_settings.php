 
<?php
session_start();

$result = array();

if (isset($_SESSION['query'])) {
    $result['query'] = $_SESSION['query'];
}

if (isset($_SESSION['settings'])) {
    $result['settings'] = $_SESSION['settings'];
}

echo json_encode($result);
?>