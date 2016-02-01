jQuery(document).ready(function($){
	console.log('ready');

	// Please annotate your JS so we can see what you’re thinking

	// functions for faces -- found in functions/faces.js
	defaultimages.init();
	defaultimages.rollOver();

	productAccordion.init();
	productAccordion.clicked();

	$('#featuredCarousel').owlCarousel({
		navigation : false, // Show next and prev buttons
		// navigationText: ["<",">"],
		slideSpeed : 300,
		paginationSpeed : 400,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		singleItem:true,
		responsive: true,
		responsiveRefreshRate: 1
	});

	styles.init();

});
