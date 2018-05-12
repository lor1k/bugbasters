function Valid(){
	if (document.getElementById('passw').value != document.getElementById('passwr').value) {
		document.getElementById('passwr').style.background = "#fdd";
		document.getElementById('passw').style.background = "";
	} else{
		document.getElementById('passwr').style.background = "#dfd";
		document.getElementById('passw').style.background = "#dfd";
	}
	return false;
}

function Navigation(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function Add(){
	if (document.getElementById('selection1').value == 2){$('.Add-reg').css("display", "block");}
	else {$('.Add-reg').css("display", "none");}	
}
function Search(){
	var sel1 = document.getElementById('select1').value,
	sel2 = document.getElementById('select2').value,
	sel3 = document.getElementById('select3').value,
	sel4 = document.getElementById('select4').value;
	var uni1 = document.getElementById('u1').style.display,
	uni2 = document.getElementById('u2'),
	uni3 = document.getElementById('u3');
	if (sel1 == 1) {
		uni2.style.display = "none";
		uni3.style.display = "none";
	} 
	if (sel4 == 1) {
		uni2.style.display = "none";
		uni3.style.display = "none";
	}
	if (sel2 == 1 || sel2 == 2) {
		uni2.style.display = "none";
		uni3.style.display = "none";
	}
	if (sel3 == 1) {
		uni2.style.display = "none";
		uni3.style.display = "none";
	}
}
  $(window).on('load', setTimeout(function () {
  $('.loaderArea').css("display", "none");
  $('.loader').css("display", "none");}, 500)
)
