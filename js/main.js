$(document).ready(function(){
	//console.log("Fichero cargado");


	// Slider

	if(window.location.href.indexOf('index') > -1){
		$(function(){
	  		$('.bxslider').bxSlider({
	    		mode: 'fade',
	    		captions: false,
	    		slideWidth: 1200,
	    		responsive: true,
	    		//pager: false
	  		});
		});	
	}
		

	// Posts
 	// Moment es una libreria que trabaja con fechas

 	if(window.location.href.indexOf('index') > -1){
 		var posts = [
			{
				title: 'Prueba de titulo 1',
				date: 'Publicado el dia:'+ moment().format("MMMM Do YYYY"),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at metus purus. Sed aliquam eros ac urna feugiat aliquam. Nunc ut orci vitae nisi semper pretium. Duis consectetur tellus in augue scelerisque, in maximus nisl laoreet. In convallis erat non ligula imperdiet, ut fringilla felis commodo. In hac habitasse platea dictumst. Vestibulum et magna eros. Nullam ut pulvinar lectus, eget egestas lacus. Mauris tempor porttitor tellus a eleifend. Nam et dictum quam. Nulla posuere rutrum diam, porttitor ornare diam ornare ut.'
			},
			{
				title: 'Prueba de titulo 2',
				date: new Date(),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at metus purus. Sed aliquam eros ac urna feugiat aliquam. Nunc ut orci vitae nisi semper pretium. Duis consectetur tellus in augue scelerisque, in maximus nisl laoreet. In convallis erat non ligula imperdiet, ut fringilla felis commodo. In hac habitasse platea dictumst. Vestibulum et magna eros. Nullam ut pulvinar lectus, eget egestas lacus. Mauris tempor porttitor tellus a eleifend. Nam et dictum quam. Nulla posuere rutrum diam, porttitor ornare diam ornare ut.'
			},
			{
				title: 'Prueba de titulo 3',
				date: new Date(),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at metus purus. Sed aliquam eros ac urna feugiat aliquam. Nunc ut orci vitae nisi semper pretium. Duis consectetur tellus in augue scelerisque, in maximus nisl laoreet. In convallis erat non ligula imperdiet, ut fringilla felis commodo. In hac habitasse platea dictumst. Vestibulum et magna eros. Nullam ut pulvinar lectus, eget egestas lacus. Mauris tempor porttitor tellus a eleifend. Nam et dictum quam. Nulla posuere rutrum diam, porttitor ornare diam ornare ut.'
			},
			{
				title: 'Prueba de titulo 4',
				date: new Date(),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at metus purus. Sed aliquam eros ac urna feugiat aliquam. Nunc ut orci vitae nisi semper pretium. Duis consectetur tellus in augue scelerisque, in maximus nisl laoreet. In convallis erat non ligula imperdiet, ut fringilla felis commodo. In hac habitasse platea dictumst. Vestibulum et magna eros. Nullam ut pulvinar lectus, eget egestas lacus. Mauris tempor porttitor tellus a eleifend. Nam et dictum quam. Nulla posuere rutrum diam, porttitor ornare diam ornare ut.'
			},
			{
				title: 'Prueba de titulo 5',
				date: new Date(),
				content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at metus purus. Sed aliquam eros ac urna feugiat aliquam. Nunc ut orci vitae nisi semper pretium. Duis consectetur tellus in augue scelerisque, in maximus nisl laoreet. In convallis erat non ligula imperdiet, ut fringilla felis commodo. In hac habitasse platea dictumst. Vestibulum et magna eros. Nullam ut pulvinar lectus, eget egestas lacus. Mauris tempor porttitor tellus a eleifend. Nam et dictum quam. Nulla posuere rutrum diam, porttitor ornare diam ornare ut.'
			},
		];

		posts.forEach((item, index) => {
			var post = `
				<article class="post">
						<h2> ${item.title} </h2>
						<span class="date"> ${item.date} </span>
						<p> 
							${item.content}
						</p>
						<a href="#" class="button-more"> Leer más</a>
					</article>
			`;

			$("#posts").append(post);
		})
 	}		

	// Selector de tema

	var theme = $("#theme");

	$("#to-green").click(function(){
		theme.attr("href", "css/green.css");
	});

	$("#to-blue").click(function(){
		theme.attr("href", "css/blue.css");
	});

	$("#to-red").click(function(){
		theme.attr("href", "css/red.css");
	});


	// Scroll arriba de la web

	$('.subir').click(function(e){
		e.preventDefault();

		$('html, body').animate({
			scrollTop: 0
		}, 500);

		return false;
	});

	// Login falso

	$("#login form").submit(function(){
		var form_name = $("#form-name").val();

		localStorage.setItem("form-name", form_name);
	});

	var form_name = localStorage.getItem("form-name");

	

	if (form_name != null && form_name != "undefined") {
		var about_parrafo = $("#about p");
		about_parrafo.html("<hr><strog> Bienvenido, "+ form_name+ " </strong>");
		about_parrafo.append("<a href='#' id='logout'> Cerrar Sesion </a>");
		$("#login form").hide();

		$("#logout").click(function(){
			localStorage.clear();

			// Parte del BOM 
			location.reload();
		});
	}

	if(window.location.href.indexOf('about') > -1){
		$("#acordeon").accordion();
	}

	if(window.location.href.indexOf('reloj') > -1){


		setInterval(function(){
			var reloj = moment().format("hh:mm:ss");

			$("#reloj").html(reloj);
		}, 1000);
	}


	// Validacion 
	if (window.location.href.indexOf('contact') > -1){

		$("form input[name='date']").datepicker({
			dateFormat: 'dd-mm-yy'
		});

		$.validate({
    		lang: 'es',
    		errorMessagePosition: 'top',
    		scrollToTopOnError: true
  		});
  	}

});