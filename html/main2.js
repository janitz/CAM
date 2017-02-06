var menuField = document.getElementById('menu');
var cmdField = document.getElementById('cmd');
var canvas = document.getElementById('canv');
var context = canvas.getContext('2d');
var mPosField = document.getElementById('mousePos');

function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'white';
    context.fillText(message, 10, 25);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: rect.height - (evt.clientY - rect.top) - 1
    };
}

canvas.addEventListener('mousemove', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    mPosField.innerHTML = mousePos.x + ', ' + mousePos.y + '&nbsp';

    var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
    writeMessage(canvas, message);
}, false);

window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

function resizeCanvas(evt){
    var w = window.innerWidth;
    var h = window.innerHeight - menuField.clientHeight - cmdField.clientHeight - mPosField.clientHeight -6;
    canvas.width = w;
    canvas.height = h;
    mPosField.innerHTML = "resized  to: "  + w + ', ' + h + '&nbsp';
}
