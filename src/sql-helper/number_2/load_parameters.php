<?php
session_start();

$ss = [
    'stolb' => $_SESSION['stolb'],
    'strok' => $_SESSION['strok'],
    'razmer_shr' => $_SESSION['razmer_shr']
];

echo json_encode($ss);

?>