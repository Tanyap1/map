
//okkkkk was trying to do the assignment base on previouse week didnot understand, used this  https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API


function getLocation () { //get location
	if ( navigator.geolocation ) {
		navigator.geolocation.getCurrentPosition ( function ( position ) {
			center = new google.maps.LatLng ( position.coords.latitude, position.coords.longitude );
			initialize ();
		}, onError );
	} else {
		center = new google.maps.LatLng ( 44.3777024,-79.7310976 ); //if not located just put the lat,long
		initialize ();
	}
}

function onError ( error ) {
	center = new google.maps.LatLng ( 44.3777024,-79.7310976  );
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