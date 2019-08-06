$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId:'13441161167',
        limit: 20,
        resolution: 'standard_resolution',
        accessToken: '13441161167.1677ed0.4503057340ee42d9b69a10e0725773d9',
        sortBy: 'most-recent',
        template: '<div class="instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',

        after: function(){
             $(document).ready(function() {
               $(".owl-carousel").owlCarousel({
                 autoplay: true,
                 dots: true,
                 loop: true,
                 margin: 20,
                 responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 }
                 }
               });
             });
        }
    });


    userFeed.run();
    //
    // $(".8galeria-slider").slick({
    //   infinite: true,
    //   autoplay: true,
    //   speed: 2000,
    //   slidesToShow: 4,
    //   slidesToScroll: 4,
    //   nextArrow: '<i class="fa fas fa-chevron-circle-right"></i>',
    //   prevArrow: '<i class="fa fas fa-chevron-circle-left"></i>',
    //   responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    //   ]
    //
    // });

    //
    // // This will create a single gallery from all elements that have class "gallery-item"
    // $('.gallery').magnificPopup({
    //     type: 'image',
    //     delegate: 'a',
    //     gallery: {
    //         enabled: true
    //     }
    // });


});
