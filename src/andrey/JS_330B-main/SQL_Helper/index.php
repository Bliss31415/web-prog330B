<?php
session_start();
function settingForm()
{
    return '
        <div>
            <div class="label-input-container">
                <label for="columns">Столбцев:</label> 
                <input type="number" id="columns">
            </div>
            <div class="label-input-container">
                <label>Строк:</label> 
                <input type="number" id="rows">
            </div>
            <div class="label-input-container">
                <label>Размер Шрифта:</label> 
                <input type="number" id="fontsize" >
            </div>
        </div>
    ';
}


?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>SQL Helper</title>
</head>
<body>
    <div class="container ml-1">
        <?php
         echo settingForm($columns,$rows,$fontsize);
        ?>
        <div class="form-group">
            <button class="btn btn-primary d-block mb-2" id="btnsave">Сохранить</button>
            <button class="btn btn-primary d-block" id="btnload">Загрузить</button>
        </div>
        <button class="btn btn-primary d-block mb-2" id="btnStart">Старт</button>
        <div class="form-group">
            <textarea  type="text" class="form-group" id="text" placeholder="#Поле для SQL запросов"></textarea>
        </div>
        <div id="result"></div>
        <div id="time"></div>
    </div>
	
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./index.js"></script>  
</body>
</html>  
