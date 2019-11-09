// JavaScript Document

function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

//LI-M LOGO RESIZE
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.fontSize = "25px";
	document.getElementById("header").innerHTML = "andrea li-michelle lim";  
} else {
    //document.getElementById("header").style.fontSize = "90px";
	//document.getElementById("header").innerHTML = "li-m"; 
  }
}


