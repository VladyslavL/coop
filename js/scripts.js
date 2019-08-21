/*jslint browser: true, white: true, plusplus: true, regexp: true, indent: 4, maxerr: 50, es5: true */
/*jshint multistr: true, latedef: nofunc */
/*global jQuery, $, Swiper*/



$(document).ready(function() {
    'use strict';

    var md = new MobileDetect(window.navigator.userAgent);

    if ( md.mobile() !== null && md.phone() !== null && md.os() !== null ) {
        $('body').addClass('is_mobile');
    }

    var player = videojs(document.querySelector('.video-js'));

    $('.video__play').on('click', function () {
        player.play();
        $(this).addClass('is_hidden');
        $('.video_scene__inner').addClass('is_hidden');
        // $('.video_desktop_layer').addClass('is_shown');
        $('.video_desktop_layer').slideDown(400);
        $('.button.scroll_down').addClass('is_shown');
    });

    player.landscapeFullscreen({
        fullscreen: {
            enterOnRotate: true,
            alwaysInLandscapeMode: true,
            iOS: true
        }
    });

    player.on('touchstart', function (e) {
        if (e.target.nodeName === 'VIDEO') {
            if (player.paused()) {
                this.play();
            } else {
                this.pause();
            }
        }
    });


    $('.scroll_down').on('click', function () {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
    });

});



$(window).on('load', function() {
    'use strict';

});



$(window).resizeEnd(function() {
    'use strict';
    
});