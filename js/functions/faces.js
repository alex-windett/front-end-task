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
                // if in last third show right angled face
                // console.log('this is the last third');
                $('.faces-set#' + faceStyle).find('.face-3').show();
                $('.faces-set#' + faceStyle).find('.face-2').hide();
            } else {
                // if in middle third middle face
                // console.log('this is the middle third');
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
