function onalert() {
    alert("Sorry,Please Create an Account")
}


var menuBtn = document.getElementById('menuBtn')
var closebtn = document.getElementById('closebtn')
var aside = document.getElementById("aside");
var backblur = document.getElementById("backblur");



menuBtn.onclick = function (e) {
    e.preventDefault()
    backblur.style.display = "block"; 
    aside.style.display = "block";
}

closebtn.onclick = function (e) {
    e.preventDefault()
    backblur.style.display = "none";
    aside.style.display = "none";
}
