var productAccordion = {

    init: function() {
        // $('.accordion-item').hide();
        // $('.accrodion-item').first().show();
    },

    clicked: function() {
        $('.accordion__content').hide();
        $('.accordion__content.active').show()
        // Create a simple accordion
        $('.accordion__trigger').click(function(e){
            e.preventDefault();

            if ( $(this).hasClass('active') ) {
                $(this).removeClass('active');
                $(this).siblings('div').removeClass('active').hide();
            } else {
                $(this).addClass('active');
                $(this).siblings('div').addClass('active').show();
            }
        });
    }
}
