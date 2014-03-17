$(function(){
	$.get('logos_footer.html'), function(html){
		$('footer').append(html);
	//$('footer').load('logos_footer.html'); si no tuvieramos contenido.
	}// forma correcta de pedir peticion

	$.get('usuario.json', function(info){
		var avatar   = new Image();
		avatar.src   = info.avatar;// le agregamo la imagen de json al archivo
		avatar.title = info.nombre+' '+info.apellido;//le agregamos el nombre y apellido

		$('#avatar').append(avatar);

	});//forma incorrecta
});