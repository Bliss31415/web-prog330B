<?php
session_start();

if(!isset($_SESSION['col'])){
    $_SESSION['col']=16;
}
if(!isset($_SESSION['row'])){
    $_SESSION['row']=15;
}
if(!isset($_SESSION['font'])){
    $_SESSION['font']=14;
}
if(isset($_POST['logout'])) {
    $_SESSION['logged_in']=false;
    header("Location: index.php");
    exit();
}
function logoutButton()
{
    return "
    <form method='post' id='logout' class='logout'>
        <button type='submit' name='logout'>Выйти</button>
    </form>";
}

function getSettingsForm()
{
    return "
    <form method='post' id='settings' class='settings'>
        <div class='b'>
            <button type='submit' name='save'>Сохранить</button>
            <button name='load'>Загрузить</button>
        </div>
        <div class='l'>
            <label>Колонок <input name='col' type='number'></label>
            <label>Строк <input name='row' type='number'></label>
            <label>Размер шрифта <input name='font' type='number'></label>    
        </div>
    
    </form>";
}

function getSqlForm($col, $row, $font)
{
    return "
    <form method='post' id='divInfo' class='sql'>
        <button name='execute_query'>запрос</button>
        <p>$row,$col,$font</p>
        <textarea name='query' rows='$row' cols='$col' style='font-size: {$font}px'></textarea>
    </form>";
}

if(isset($_POST['save'])){
    if($_POST['col'] != NULL) $_SESSION['col'] = $_POST['col'];
    if($_POST['row'] != NULL) $_SESSION['row'] = $_POST['row'];
    if($_POST['font'] != NULL) $_SESSION['font'] = $_POST['font'];   
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
        
        echo logoutButton();

        echo getSettingsForm();
        
        echo getSqlForm($_SESSION['col'],$_SESSION['row'],$_SESSION['font']);

    if(isset($_POST['execute_query'])) {
        // Ваш код для обработки SQL-запроса
        $hostname = "mariadb";
        $username = "root";
        $password = "password";
        $database = "cljournal";
        $port = "3306";
        $connect = mysqli_connect(
            $hostname, $username,
            $password, $database, $port
        );
        if (!$connect) {
            die('Could not connect: ' . mysql_error());
        }
        echo 'Connected successfully<br>';
        $query = $_POST['query'];
        $result = mysqli_query($connect, $query) or die('Invalid query: ' . mysql_error());
        
        $str = '<table border="1">';
        $str .= '<tr>';
        for($i=0;$i< mysqli_num_fields($result); $i++) {
            $field_info = mysqli_fetch_field_direct($result, $i);
            $str .= '<th>'. $field_info->name . '</th>';
        }
        $str .= '</tr>';
        while( $row = mysqli_fetch_assoc($result)) {
               $str .= '<tr>';
               foreach ($row as $el) {
                   $str .= '<td>'. $el. '</td>';
            }
                $str .= '</tr>';
        }
        $str .= '</table>';
        echo $str;
        mysqli_close($connect);
    }

    if(isset($_POST['load'])){
        ?>
        <script>
            document.getElementById('loadBtn').addEventListener('click', function() {
                document.getElementsByName('col')[0].value = "<?php echo $_SESSION['col']; ?>";
                document.getElementsByName('row')[0].value = "<?php echo $_SESSION['row']; ?>";
                document.getElementsByName('font')[0].value = "<?php echo $_SESSION['font']; ?>";
            });
        </script>
        <?php
    }
    ?>    

</body>
<script src="scripts.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</html>