var player = videojs(document.querySelector('.video-js'));


$(document).ready(function() {
    'use strict';

    $('.video__play').on('click', function () {
        var elem = this;
        player.play();
        $(elem).addClass('is_hidden');
        $('.video_scene__inner').addClass('is_hidden');
        // $('.video_desktop_layer').addClass('is_shown');
        $('.video_desktop_layer').slideDown(400);
        $('.button.scroll_down').addClass('is_shown');
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