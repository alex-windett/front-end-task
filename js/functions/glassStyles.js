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
