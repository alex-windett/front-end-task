jQuery(document).ready(function($){
	console.log('ready');

	// Please annotate your JS so we can see what you’re thinking

	// set variables for page elemets
	var facesWrapper = $('.faces');

	// Get the width of the image wrapper and find a third
	// of this for the breakpoints
	var sectionWidth = facesWrapper.width();
	var sectionThird = sectionWidth / 3;

	var firstThirdBoundary 	= sectionThird
	var lastThirdBoundary 	= sectionWidth - sectionThird;
	console.log('face width ' + firstThirdBoundary)

	// Start off with the face on image by hiding the first two
	var defaultimages = {

		init: function() {
			$('.faces').find('.face-1').hide();
			$('.faces').find('.face-2').show();
			$('.faces').find('.face-3').hide();
		}
	}

	defaultimages.init();

	$('.faces.square').mousemove(function (e){
		// find the exposition of mouse inside the wrapper
	    var elm = $(this);
	    var xPos = e.pageX - elm.offset().left;
	    console.log(xPos);

		if ( xPos <= firstThirdBoundary ) {
			// if in first third show left angled face
			console.log('this is the first third');
			$('.faces').find('.face-1').show();
			$('.faces').find('.face-2').hide();
		} else if ( xPos >= lastThirdBoundary ) {
			// if in first third show front forward face
			console.log('this is the middle third');
			$('.faces').find('.face-3').show();
			$('.faces').find('.face-2').hide();
		} else {
			// if in first third show right angled face
			console.log('this is the last third');
			$('.faces').find('.face-2').show();
			$('.faces').find('.face-1').hide();
			$('.faces').find('.face-3').hide();
		}
	});

	// When the mouse leaves the area, return images to page loaded state
	$('.faces.square').mouseleave(function (e) {
		defaultimages.init();
	});

});
