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

  $(window).on('load', setTimeout(function () {
  $('.loaderArea').css("display", "none");
  $('.loader').css("display", "none");}, 500)
)
