$(document).ready(function() {


    var userFeed = new Instafeed({
        get: 'user',
        userId: '655593012',
        limit: 4,
        resolution: 'standard_resolution',
        accessToken: '655593012.1677ed0.af392e0a3ca24e6dac2356327f8063d5',
        sortBy: 'most-recent',
        template: '<div class="col-lg-3 instaimg"><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
    });


    userFeed.run();

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
