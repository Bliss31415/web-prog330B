var a = document.getElementById("btn");

function getInfo() {
    $.ajax({
        type: "POST",
        url: "index.html",
        data: {
            get_info: 'get_info'
        },
    }).done(function(result) {
        $("#divinfo").html(result);
    });

}

a.addEventListener("click", () => {
    getInfo();

    //console.log("HUI");
})