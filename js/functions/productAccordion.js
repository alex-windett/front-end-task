var productAccordion = {

    init: function() {
        // $('.accordion-item').hide();
        // $('.accrodion-item').first().show();
    },

    clicked: function() {
        $('.accordion-trigger').click(function(e){
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
