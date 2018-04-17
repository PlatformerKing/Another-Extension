var tornado = function() {
    var d=document, s = d.createElement("style");
    s.setAttribute("type","text/css"), d.head.appendChild(s), s.innerHTML="*{-webkit-transform:rotate(99999deg);-ms-transform:rotate(99999deg);transform:rotate(9999deg);transition-duration:30s;}";
};
if (confirm('Would you like to unleash a tornado?')) {
    tornado();
}
var main = function() {
    if(!document.body) {
        main();
    }
    var ll = document.getElementsByClassName("user-card-edit-menu");
var para = document.createElement("p");
var node = document.createTextNode("Testing more");
para.appendChild(node);
ll.appendChild(para);
};
main();

