
var button = document.getElementById('myButton');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var content = document.getElementById('myContent');



button.onclick = function() {
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}
button.onclick = function() {
    modal.style.display = "block";
    setTimeout(opacity1, 100);
}
function opacity1 () {
    content.style.opacity = "1";
}
function none() {
    modal.style.display = "none";
}
close.onclick = function() {
    content.style.opacity = "0";
    setTimeout(none, 1000);
}