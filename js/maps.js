var hotels = [
     ['Atheneum Hotel', 42.334137, -83.042300, 1],
     ['Mgm Grand Hotel', 42.333638, -83.059829, 2],
     ['Book Cadillac Hotel', 42.332085, -83.049964, 3],
     ['Hilton Garden Inn', 42.335933, -83.044985, 4],
     ['Marriott at Renaissance Center', 42.328633, -83.040364, 5]
];
var map = new google.maps.Map(document.getElementById('map'), {
     zoom: 14,
     center: new google.maps.LatLng(42.334498, -83.049642),
     mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow;

var marker, i;

for (i = 0; i < hotels.length; i++) {  
    marker = new google.maps.Marker({
         position: new google.maps.LatLng(hotels[i][1], hotels[i][2]),
         animation: google.maps.Animation.DROP,
         map: map
    }); 

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
             infowindow.setContent(hotels[i][0]);
             infowindow.open(map, marker);
         }
    })(marker, i));
}

google.maps.event.addDomListener(window, 'load', initialize);
