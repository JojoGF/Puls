var $form  = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#link'),
	$primerPost = $('.item').first(),
	$lista = $("#contenido");


// para guardar tit y url x si se me va la pag y no subi el post.
if (localStorage.getItem('autosave')){//Si tiene un item gurdado es true y sigue
	$titulo.val(sessionStorage.getItem('titulo'));
	$url.val(sessionStorage.getItem('url')); 
}

//guardar lo que esta tipeado en cada campo url y titulo. Cada un seg JS ejecuta la funcion
var id = setInterval(function(){//
	sessionStorage.setItem('titulor', $titulo.val());
	sessionStorage.setItem('url', $url.val());
}, 1000/*milisegundos de guardado de tipeado*/);

function mostrarFormulario(){
	$form.slideToggle();
	$list.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val(),
		titulo = $titulo.val(),
		$clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide();

	$list.prepend($clone);
	mostrarFormulario();
	$titulo.val('');// si al .val le pasamos un valor vacio le agregamos un valor
	$url.val('');
	$clone.slideDown();

	return false;
}

// Eventos
$('#publicar_nav a').click( mostrarFormulario );
$('#formulario').on('submit', agregarPost)