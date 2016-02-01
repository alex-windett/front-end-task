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
		singleItem:true,
		responsive: true,
		responsiveRefreshRate: 1
	});

	$('#highlightsCarousel').owlCarousel({
		navigation : true, // Show next and prev buttons
		// navigationText: ["<",">"],
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
});
