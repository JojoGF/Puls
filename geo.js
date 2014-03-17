$(function(){
	
	var geo      = navigator.geolocation;
	var opciones = {}

	function geo_error() { //si no consigue se activa este
		console.log('No puedo saber donde estas');
	}

	function geo_exito(posicion){ //si consigue los datos se activa este
	var lat  = posicion.coords.latitude;
	var lon  = posicion.coords.longitude; //guardo en las variables long y lat
	var mapa = new Image(); // creamos un obj del tipo imagen
mapa.src = "http://maps.googleapis.com/maps/api/staticmap?maptype=hybrid&zoom=13&size=300x300&sensor=false&center="+lat+","+lon;
		$('#geo').append(mapa);
 // se le agrega el mapa al div geo

	geo.getCurrentPosition(geo_exito,geo_error, opciones);
}
});



