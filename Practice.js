var $form = $("#formulario"),
	$titulo = $("#titulo"),
	$url = $("#url"),
	$button = $("#mostrar-form"),
	$list = $('#contenido'),
	$post =  $(".item").first();//contenido

function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = post.clone(); //jquery me da una representacion del objeto


	$clone.find(".titulo_item a")//encontrar elementos que cumplan igual css	
		.text(titulo)//modificar el titulo
		.attr('href', url);//remplazamos el html

	$clone.hide();//atajo para ocultar al clon

	$list.prepend($clone);//embeber el clon creado y ponerlo primero
	$clone.fadeIn();//efecto de aparecer
	
	return false;
}

//Eventos
$button.click(mostrarFormulario);
$form.on('submit', agregarPost);
  