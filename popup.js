function changeMode() {
    var m = document.getElementById('mode-select');
    console.log("Yay"+m.value);
    mode = m.value;
}
document.getElementById("mode-select").onchange = function() {
    alert('Yo');
    changeMode();
}
