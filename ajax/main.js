$(document).ready(loadWhenReady);

function loadWhenReady() { 
    $("selector").addClass("add something"); // basic jQuery 

    //AJAX 
    // $.ajax({  //$ is a function of an object and ajax() is the method
    //     type/method: "method",
    //     url: "url", 
    //     data: "data",
    //     dataType: "dataType",
    //     success: function (response) {
    //       //Do something  
    //     }
    // });
console.log("Making ajex fucntions")
    var ajaxCallOption = {
        url: "http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topalbums/limit=25/json",
        method: "GET",
        dataType: "json",
        success: runThisWhenDataComesBack,
        // error: somefunction
    }
    
    function runThisWhenDataComesBack(response) { 
        // var responseObject = JSON.parse(response);
        console.log(response);
        console.log("success was called");
     }
console.log("calling ajax call");
    $.ajax(ajaxCallOption); 
    console.log("ending ajax call");

    //core javascript
    
}