window.onscroll = function() {scrollFunction();myFunction();myFunction2();myFunction6()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("myBtn2").style.opacity = "1";
    document.getElementById("myBtn2").style.cursor = "pointer";
  } else {
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("myBtn2").style.opacity = "0";
    document.getElementById("myBtn2").style.cursor = "default";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function myFunction() {
var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
var scrolled = (winScroll / height) * 100;
document.getElementById("myBar").style.width = scrolled + "%";
}
function myFunction2() {
  var windScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var pass1 = windScroll * -1;
  var pass2 = pass1 + 150;
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("sidepart").style.top = "0";
  } else {
    document.getElementById("sidepart").style.top = pass2 + "px";
  }
}
function myFunction3() {
  document.body.scrollTop = "425";
  document.documentElement.scrollTop = "425";
}
function myFunction4() {
  document.body.scrollTop = "1630";
  document.documentElement.scrollTop = "1630";
}
function myFunction5() {
  document.body.scrollTop = "4230";
  document.documentElement.scrollTop = "4230";
}
