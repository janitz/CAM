
var canv = document.getElementById("canvas");
var txtArea = document.getElementById("textarea");
var debug = document.getElementById("debugger");


window.addEventListener('load', resize);
window.addEventListener('resize', resize);
txtArea.addEventListener('change', parse);


function resize(e) {
    canv.width = window.innerWidth / 2.1;
    canv.height = window.innerHeight - 20;
    txtArea.style.width = (window.innerWidth / 2.1) + "px";
    txtArea.style.height = (window.innerHeight - 20) + "px";
}

function parse(e) {
    var lines = txtArea.value.split("\n");
    var txt = ""
    for(var i = 0; i < lines.length; i++){
        txt += lines[i] + "<br>";
    }
    debug.innerHTML = txt;
}

function parseLine(txt) {
    
}

function draw(){

}

