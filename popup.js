function changeMode() {
    var m = document.getElementById("mode-select");
    console.log("Yay"+m.value);
    mode = m.value;
}
console.log(document.getElementById("mode-select"));
document.getElementById("mode-select").onchange = function() {
    alert('Yo');
    changeMode();
}
