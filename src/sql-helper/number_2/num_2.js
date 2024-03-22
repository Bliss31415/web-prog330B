function use_parameters() {
    let stolbi = Number(document.getElementById("stolb").value);
    let stroki = Number(document.getElementById("strok").value);
    let razmer_shr = Number(document.getElementById("razmer_shr").value);

    let napoleon = document.getElementById("pole");
    napoleon.rows = stolbi;
    napoleon.cols = stroki;
    napoleon.style.fontSize = razmer_shr + "px";
}

function save_parameters() {
    var stolb = Number(document.getElementById("stolb").value);
    var strok = Number(document.getElementById("strok").value);
    var razmer_shr = Number(document.getElementById("razmer_shr").value);
    $.ajax({
        type: "POST",
        url: "saved_parameters.php",
        data: {
            stolb: stolb,
            strok: strok,
            razmer_shr: razmer_shr
        },
        success: function() {
            console.log("AJAX parameters saved");
        },
        error: function() {
            console.log("ERROR!!!");
        }
    });
}

function load_parameters() {
    $.ajax({
        type: "POST",
        url: "load_parameters.php",
        success: function(response) {
            var data = JSON.parse(response);
            var stolb = data.stolb;
            var strok = data.strok;
            var razmer_shr = data.razmer_shr;

            document.getElementById("stolb").value = stolb;
            document.getElementById("strok").value = strok;
            document.getElementById("razmer_shr").value = razmer_shr;

            console.log("Loaded!");
        },
        error: function() {
            console.log("ERROR!!!!!");
        }
    });
}

function make_query() {
    var query = document.getElementById("pole").value;

    $.ajax({
        type: "POST",
        url: "sql_in_textarea.php",
        data: {
            query: query
        },
        //datatype: 'json',
        success: function() {
            console.log("SQL Query has been planted!");
            //let data = JSON.parse(response);

        },
        error: function() {
            console.log("NO SQL query!!!!!");
        }

    });
}