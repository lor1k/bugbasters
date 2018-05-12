var cntMarkers = 0;
var univX = 46.97194831081744;  //46.9716994;
var univY = 32.01498090489349;  //32.0150721;
var delta =  0.0005;

function initMap() {
    var maxDelta = Math.min($("#map").width() / 200. , 4) * delta;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: univX+mapDelta(), lng: univY+mapDelta()},
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        //mapTypeId: google.maps.MapTypeId.HYBRID
        disableDefaultUI: true,
        styles: [
            {
                featureType: 'poi',
                elementType: 'labels',
                stylers: [{ "visibility": "off" }]
            }
        ]
    });

    map.addListener('click', function(e) {
        placeMarker(e.latLng, map);
    });
}

function placeMarker(latLng, map) {
    pushMarker(latLng, map, "Maybe here", null, null, null);

    if (dist(latLng) < delta) {
        pushMarker({lat: univX, lng: univY},map,"University",null,google.maps.Animation.BOUNCE,"img/flag.png");
        cntMarkers--;
        $(".ButtonOfLocation").prop('disabled',false); 
        $(".ButtonOfLocation").addClass('btn-primary');
        $(".ButtonOfLocation").removeClass('btn-danger');
    } else {
        alert("Тут університету немає");
    }
}

function pushMarker(latLng, map, title, draggable, animation, icon) {
    var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        title: title,
        draggable: draggable,
        animation: animation,
        icon: icon
    });
    cntMarkers++;
}

function dist(latLng) {
    return Math.sqrt(Math.pow(univX-latLng.lat(),2) + Math.pow(univY-latLng.lng(),2));
}

function mapDelta() {
    var maxDelta = Math.min($("#map").width() / 200. , 4) * delta;
    if (2*Math.random() > 1) {
        return -rand(maxDelta / 4., maxDelta);
    } else {
        return rand(maxDelta / 4., maxDelta);
    }
}

function rand(min, max) {
    return (Math.random() * (max - min)) + min;
}