var productAccordion = {

    init: function() {
        $('.accordion-item').hide();
        $('.accrodion-item').first().show();
    },

    clicked: function() {
        $('.accordion-nav a').click(function(event){
            event.preventDefault();

            var clickedItem = $(this).attr('href');

            $(this).toggleClass('active');
            clickedItem.slideToggle().addClass('active');
        });
    }
}
