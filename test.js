
/*var m = document.getElementsByTagName("textarea");
var go = function(n) {
    var x = m[n];
    x.value = x.value.toUpperCase();
};
for(var i = 0; i < m.length; m++) {
    m[i].onkeyup = function() {go(m)};
}*/
var go = function() {
    var x = document.getElementById('bio-picker');
    x.value = 'CHEESE';
};
//document.getElementById('bio-picker').onkeypress = function(){go();};
document.getElementById('bio-picker').addEventListener("change", go);
//setInterval(go, 1000);
