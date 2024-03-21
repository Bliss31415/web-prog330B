let fontsizeInput = document.getElementById("fontsize");
let column = document.getElementById("columns");
let rows = document.getElementById("rows");
let textarea = document.getElementById("text");

fontsizeInput.addEventListener("input", (event)=>{
	let fontsize = event.target.value;
	
	if(fontsize < 10){
		textarea.style.fontSize = "10px";
	}else if(fontsize > 50){
		textarea.style.fontSize = "50px";
	}else{
		textarea.style.fontSize = fontsize + "px";
	}	
});

column.addEventListener("input", (event)=>{
	let columns = event.target.value;
	if(columns < 20){
		textarea.cols = "20";
	}else if(columns > 140){
		textarea.cols = "140";
	}else{
		textarea.cols = columns;
	}
})

rows.addEventListener("input", (event)=>{
	let row = event.target.value;
	if(row < 3){
		textarea.rows = "3";
	}else if(row > 40){
		textarea.rows = "40";
	}else{
		textarea.rows = row;
	}
	
})


$(document).ready(function(){
	$('#btnStart').click(function(){
	  let query = $('#text').val();
	  $.ajax({
		url:'Query.php',
		type:'POST',
		data:{query:query},
		dataType:'json',
		success:function(data){
		  $('#result').empty();
		  if(data.error){
			$('#result').text(data.error);
		  }else{
			for(let i=0; i < data.length;i++){
			  let rowStr = JSON.stringify(data[i]);
			  $('#result').append('<p>' + rowStr + '</p>');
			}
		  }
		},
		error: function(xhr, status, error) {
		  $('#result').text('Ошибка выполнения запроса');
		}
	  });
	});
  });

//Сохранение
$(document).ready(function(){
	$('#btnsave').click(function (){
	  let columns = $('#columns').val();
	  let rows = $('#rows').val();
	  let fontsize = $('#fontsize').val();
	  let text = $('#text').val();
	  $.ajax({
		url:'save_setting.php',
		method: 'POST',
		data:{ columns: columns, rows: rows, fontsize: fontsize, text: text },
		success: function (data){
		  console.log(data);  
		}
	  })
	})
  })

//Загрузка
function loadSettingsAndQuery() {
    $.ajax({
        url: 'load_settings.php',
        method: 'GET',
        success: function(data) {
            let result = JSON.parse(data);
            $('#text').val(result.query);
            $('#columns').val(result.settings.columns);
            $('#rows').val(result.settings.rows);
            $('#fontsize').val(result.settings.fontsize);
        }
    });
}

$('#btnload').on('click', function() {
    loadSettingsAndQuery();
});