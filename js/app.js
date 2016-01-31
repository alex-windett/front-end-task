jQuery(document).ready(function($){
	console.log('ready');

	// Please annotate your JS so we can see what you’re thinking

	// functions for faces -- found in functions/faces.js
	defaultimages.init();
	defaultimages.rollOver();

	$('.accordion-nav a').click(function(event){
		event.preventDefault();

		var clickedItem = $(this).attr('href');

		$(this).toggleClass('active');
		$(clickedItem).slideToggle().addClass('active');
	})

});
