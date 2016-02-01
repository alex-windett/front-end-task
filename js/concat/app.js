// set variables for page elemets
var facesWrapper = $('.faces-set');

// Get the width of the image wrapper and find a third
// of this for the breakpoints
var sectionWidth = facesWrapper.width();
var sectionThird = sectionWidth / 3;

var firstThirdBoundary 	= sectionThird
var lastThirdBoundary 	= sectionWidth - sectionThird;
console.log('face  ' + $('faces-set.partition.half'));

// Start off with the face on image by hiding the first two
var defaultimages = {

    init: function() {
        facesWrapper.find('.face-1').hide();
        facesWrapper.find('.face-2').show();
        facesWrapper.find('.face-3').hide();
    },

    rollOver: function() {
            facesWrapper.mousemove(function (e){
            // find the exposition of mouse inside the wrapper
            var elm = $(this);
            var xPos = e.pageX - elm.offset().left;
            var faceStyle = $(this).attr('id');
            // console.log(faceStyle);
            // console.log(xPos);

            if ( xPos <= firstThirdBoundary ) {
                // if in first third show left angled face
                // console.log('this is the first third');
                $('.faces-set#' + faceStyle).find('.face-1').show();
                $('.faces-set#' + faceStyle).find('.face-2').hide();
            } else if ( xPos >= lastThirdBoundary ) {
                // if in first third show front forward face
                // console.log('this is the middle third');
                $('.faces-set#' + faceStyle).find('.face-3').show();
                $('.faces-set#' + faceStyle).find('.face-2').hide();
            } else {
                // if in first third show right angled face
                // console.log('this is the last third');
                $('.faces-set#' + faceStyle).find('.face-2').show();
                $('.faces-set#' + faceStyle).find('.face-1').hide();
                $('.faces-set#' + faceStyle).find('.face-3').hide();
            }
        });

        // When the mouse leaves the area, return images to page loaded state
        $('.faces-set').mouseleave(function (e) {
            defaultimages.init();
        });
    }
}

// Find how many sunglass styles are being displayed
var glassStyles = $('.styles figure'),
    stylesCount = glassStyles.size();

var styles = {

    init: function() {
        // if there are odd number then add class 'center'
        // to first element to enlarge and center element
        if ( stylesCount % 2 == 0 ) {
            glassStyles.first().addClass('left');
        } else {
            glassStyles.first().addClass('center');
        }
    }
}

var productAccordion = {

    init: function() {
        // $('.accordion-item').hide();
        // $('.accrodion-item').first().show();
    },

    clicked: function() {
        $('.accordion__trigger').click(function(e){
            e.preventDefault();

            if ( $(this).hasClass('active') ) {
                $(this).removeClass('active');
                $(this).siblings('div').removeClass('active').hide();
            } else {
                $(this).addClass('active');
                $(this).siblings('div').addClass('active').show();
            }
        })
    }
}

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
