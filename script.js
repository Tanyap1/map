
function getLocation () { //get location
	if ( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition ( function ( position ) {
			center = new google.maps.LatLng ( position.coords.latitude, position.coords.longitude );
			initialize ();
		}, onError );
	} else {
		center = new google.maps.LatLng ( 40.758895,-73.985131 ); //if not located just put the lat,long
		initialize ();
	}
}

function onError ( error ) {
	center = new google.maps.LatLng ( 40.758895,-73.985131 );
	initialize ();
}
	
function initialize () {

	var properties = {
		center : center,
		zoom : 16,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};

	var map = new google.maps.Map ( document.getElementById ( "map" ), properties );

	var marker = new google.maps.Marker ( {
		position : center,
	} );

	marker.setMap ( map );
}

window.onload = function () {
	getLocation ();
}