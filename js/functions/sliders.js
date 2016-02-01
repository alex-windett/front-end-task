var sliders = {

    owlCarousel: function() {
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
    }
}
