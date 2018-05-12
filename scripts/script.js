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
	if (sel1 == 0 && sel2 == 0 && sel3 == 0 && sel4 == 0) {
		uni2.style.display = "block";
		uni3.style.display = "block";
	}
}
  $(window).on('load', setTimeout(function () {
  $('.loaderArea').css("display", "none");
  $('.loader').css("display", "none");}, 400)
);

function initMap() {
    var x = 46.9716994;
    var y = 32.0150721;

    var uluru = {lat: x, lng: y};

    var map = new google.maps.Map(document.getElementById('mapCHNU'), {
        zoom: 17,
        center: uluru,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        //mapTypeId: google.maps.MapTypeId.HYBRID
        disableDefaultUI: true
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map,
        title: "University",
        draggable: false,
        animation: null,
        icon: null
    });

    google.maps.event.addListener(marker, 'click', function() {
        showMoreMarkerInfo(map, marker);
    });

    map.addListener('center_changed', function() {
        returnCenterMapToMarker(map, marker, 3000);
    });
}

function showMoreMarkerInfo(map, marker) {
    var contentString = generateInfo("CHNUlogo.png", "Чорноморський національний<br>університет імені Петра Могили");
    var infoWindow = new google.maps.InfoWindow({
        content: contentString
    });
    infoWindow.open(map, marker);
}

function returnCenterMapToMarker(map, marker, time) {
    window.setTimeout(function() {
        map.panTo(marker.getPosition());
    }, time);
}

function generateInfo(image, text) {
    return '<div class="map-info-wrapper"><img src="img/' + image + '" alt="logo image"><div class="map-info">' + text + '</div></div>';
}