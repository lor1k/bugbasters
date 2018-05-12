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