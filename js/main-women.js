$(document).ready(function(){
	var imgItems = $('.section-slider li').length; // Numero de Slides
	var imgPos = 1;

	// Agregando paginacion --
	for(i = 1; i <= imgItems; i++){
		$('.section-pagination').append('<li><span class="fa fa-circle"></span></li>');
	} 
	//------------------------

	$('.section-slider li').hide(); // Ocultanos todos los slides
	$('.section-sliderr li:first').show(); // Mostramos el primer slide
	$('.section-pagination li:first').css({'color': '#CD6E2E'}); // Damos estilos al primer item de la paginacion

	// Ejecutamos todas las funciones
	$('.section-pagination li').click(pagination);
	$('.right-w span').click(nextSlider);
	$('.left-w span').click(prevSlider);


	setInterval(function(){
		nextSlider();
	}, 4000);

	// FUNCIONES =========================================================

	function pagination(){
		var paginationPos = $(this).index() + 1; // Posicion de la paginacion seleccionada

		$('.section-slider li').hide(); // Ocultamos todos los slides
		$('.section-slider li:nth-child('+ paginationPos +')').fadeIn(); // Mostramos el Slide seleccionado

		// Dandole estilos a la paginacion seleccionada
		$('.section-pagination li').css({'color': '#858585'});
		$(this).css({'color': '#CD6E2E'});

		imgPos = paginationPos;

	}

	function nextSlider(){
		if( imgPos >= imgItems){imgPos = 1;} 
		else {imgPos++;}

		$('.section-pagination li').css({'color': '#858585'});
		$('.section-pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.section-slider li').hide(); // Ocultamos todos los slides
		$('.section-slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado

	}

	function prevSlider(){
		if( imgPos <= 1){imgPos = imgItems;} 
		else {imgPos--;}

		$('.section-pagination li').css({'color': '#858585'});
		$('.section-pagination li:nth-child(' + imgPos +')').css({'color': '#CD6E2E'});

		$('.section-slider li').hide(); // Ocultamos todos los slides
		$('.section-slider li:nth-child('+ imgPos +')').fadeIn(); // Mostramos el Slide seleccionado
	}

});