
/*var m = document.getElementsByTagName("textarea");
var go = function(n) {
    var x = m[n];
    x.value = x.value.toUpperCase();
};
for(var i = 0; i < m.length; m++) {
    m[i].onkeyup = function() {go(m)};
}*/
var go = function(n) {
    var x = document.getElementById('bio-picker');
    x.value = x.value.toUpperCase();
};
var m = document.getElementById('bio-picker').onkeyup = function() {go()};

