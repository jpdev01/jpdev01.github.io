function render(){
    debugger;
//     var ajaxRequest = new XMLHttpRequest();
//     ajaxRequest.open ('GET', '../../assets/mock/stack.json');
//     ajaxRequest.onreadystatechange = function () {
//  alert (ajaxRequest.responseText); 
//     }]
jQuery.get("http://github.com/jpdev01/jpdev01.github.io/blob/main/assets/mock/stack.json", undefined, function(data) {
    alert(data);
});
readTextFile("https://github.com/jpdev01/jpdev01.github.io/blob/main/assets/mock/stack.json", function(text){
    var data = JSON.parse(text);
    console.log(data);
});
}


function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

