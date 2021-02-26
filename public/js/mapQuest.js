function initMap() {
	L.mapquest.key ='jtPlDBK3qHe59Tuwvo8NrEHLnbCGpZXM';

	var map = L.mapquest.map('map',{
		center:[32.87920477741168, -117.23618644754849],
		layers:L.mapquest.tileLayer('map'),
		zoom:12,
		zoomControl:false
	});

L.marker([32.87920477741168, -117.23618644754849]).addTo(map);
}