var newYork = new google.maps.LatLng(40.730610, -73.935242);

map = new google.maps.Map(document.getElementById('map'), {
	center: newYork,
	zoom: 13,
	mapTypeId: 'satellite'
});
