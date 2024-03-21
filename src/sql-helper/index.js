var a = document.getElementById("btn");

function getInfo() {
    $.ajax({
        type: "POST",
        url: "index.php",
        data: {
            get_info: 'get_info'
        },
    }).done(function(result) {
        $("#divinfo").html(result);
    });

}