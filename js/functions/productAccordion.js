var productAccordion = {

    init: function() {
        // $('.accordion-item').hide();
        // $('.accrodion-item').first().show();
    },

    clicked: function() {
        $('.accordion-nav a').click(function(event){
            event.preventDefault();

            var clickedItemContent = $(this).attr('href');
            // console.log('accordion-item'clickedItemContent);

            if ( $(this).hasClass('active') ) {
                $(this).removeClass('active');
                $('.accordion-item' + clickedItemContent)
                    .removeClass('active')
                    ;
            } else {
                $(this)
                    .addClass('active')
                $('.accordion-item' + clickedItemContent)
                    .addClass('active')
                    .siblings().removeClass('active');
            }
        });
    }
}
