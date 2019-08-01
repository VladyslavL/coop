/*jslint browser: true, white: true, plusplus: true, regexp: true, indent: 4, maxerr: 50, es5: true */
/*jshint multistr: true, latedef: nofunc */
/*global jQuery, $, Swiper*/

$(document).ready(function() {
    'use strict';

    var player = videojs(document.querySelector('.video-js'));

    $('.video__play').on('click', function () {
        player.play();
        $(this).addClass('is_hidden');
        $('.video_scene__inner').addClass('is_hidden');
    });

    player.landscapeFullscreen();

});



$(window).on('load', function() {
    'use strict';

});



$(window).resizeEnd(function() {
    'use strict';
    
});