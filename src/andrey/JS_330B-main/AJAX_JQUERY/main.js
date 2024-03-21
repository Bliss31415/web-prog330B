let button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    //console.log("This is button");
    getInfo();
})


function getInfo(){
    $.ajax({
        method: "GET",
        url: "index.php",
        data: {getInfo:'getInfo'},
        //success:function(response){
           //$("#out_info").html(response);
       // }
    }).done(function (result){
        $("#out_info").html(result);
    });
}
