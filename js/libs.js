
/*jslint browser: true, white: true, vars: true, plusplus: true, regexp: true, indent: 4, maxerr: 50 */
/*global $, jQuery*/






var player = videojs(document.querySelector('.video-js'));




// if(navigator.userAgent.indexOf('MSIE')!==-1 || navigator.userAgent.indexOf('Edge')!==-1 || navigator.appVersion.indexOf('Trident/') > -1) {
//     console.log('IE');
// } else {
//     // import videojs from 'video.js';
// // import {version as VERSION} from '../package.json';
// // import window from 'global/window';

// // Default options for the plugin.
//     "use strict";

//     var defaults = {
//         fullscreen: {
//             enterOnRotate: true,
//             alwaysInLandscapeMode: true,
//             iOS: true
//         }
//     };
//     var screen = window.screen;
//     /* eslint-disable no-console */

//     screen.lockOrientationUniversal = function (mode) {
//         return screen.orientation && screen.orientation.lock(mode).then(function () {}, function (err) {
//             return console.log(err);
//         }) || screen.mozLockOrientation && screen.mozLockOrientation(mode) || screen.msLockOrientation && screen.msLockOrientation(mode);
//     };

//     var angle = function angle() {
//         // iOS
//         if (typeof window.orientation === 'number') {
//             return window.orientation;
//         } // Android


//         if (screen && screen.orientation && screen.orientation.angle) {
//             return window.orientation;
//         }

//         videojs.log('angle unknown');
//         return 0;
//     }; // Cross-compatibility for Video.js 5 and 6.


//     var registerPlugin = videojs.registerPlugin || videojs.plugin; // const dom = videojs.dom || videojs;

//     /**
//      * Function to invoke when the player is ready.
//      *
//      * This is a great place for your plugin to initialize itself. When this
//      * function is called, the player will have its DOM and child components
//      * in place.
//      *
//      * @function onPlayerReady
//      * @param    {Player} player
//      *           A Video.js player object.
//      *
//      * @param    {Object} [options={}]
//      *           A plain object containing options for the plugin.
//      */

//     var onPlayerReady = function onPlayerReady(player, options) {
//         player.addClass('vjs-landscape-fullscreen');

//         if (options.fullscreen.iOS && videojs.browser.IS_IOS && videojs.browser.IOS_VERSION > 9 && !player.el_.ownerDocument.querySelector('.bc-iframe')) {
//             player.tech_.el_.setAttribute('playsinline', 'playsinline');

//             player.tech_.supportsFullScreen = function () {
//                 return false;
//             };
//         }

//         var rotationHandler = function rotationHandler() {
//             var currentAngle = angle();

//             if (currentAngle === 90 || currentAngle === 270 || currentAngle === -90) {
//                 if (player.paused() === false) {
//                     player.requestFullscreen();
//                     screen.lockOrientationUniversal('landscape');
//                 }
//             }

//             if (currentAngle === 0 || currentAngle === 180) {
//                 if (player.isFullscreen()) {
//                     player.exitFullscreen();
//                 }
//             }
//         };

//         if (videojs.browser.IS_IOS) {
//             window.addEventListener('orientationchange', rotationHandler);
//         } else if (screen && screen.orientation) {
//             // addEventListener('orientationchange') is not a user interaction on Android
//             screen.orientation.onchange = rotationHandler;
//         }

//         player.on('fullscreenchange', function (e) {
//             if (videojs.browser.IS_ANDROID || videojs.browser.IS_IOS) {
//                 if (!angle() && player.isFullscreen() && options.fullscreen.alwaysInLandscapeMode) {
//                     screen.lockOrientationUniversal('landscape');
//                 }
//             }
//         });
//     };
//     /**
//      * A video.js plugin.
//      *
//      * In the plugin function, the value of `this` is a video.js `Player`
//      * instance. You cannot rely on the player being in a "ready" state here,
//      * depending on how the plugin is invoked. This may or may not be important
//      * to you; if not, remove the wait for "ready"!
//      *
//      * @function landscapeFullscreen
//      * @param    {Object} [options={}]
//      *           An object of options left to the plugin author to define.
//      */


//     var landscapeFullscreen = function landscapeFullscreen(options) {
//         var _this = this;

//         if (videojs.browser.IS_ANDROID || videojs.browser.IS_IOS) {
//             this.ready(function () {
//                 onPlayerReady(_this, videojs.mergeOptions(defaults, options));
//             });
//         }
//     }; // Register the plugin with video.js.


//     registerPlugin('landscapeFullscreen', landscapeFullscreen);

// // Include the version number.
// // landscapeFullscreen.VERSION = VERSION;

// // export default landscapeFullscreen;


//     player.landscapeFullscreen();
// }









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

    // player.on('error', () => {
    //     player.createModal('Retrying connection');
    //     if (player.error().code === 4) {
    //         this.player.retryLock = setTimeout(() => {
    //             player.src({
    //                 src: data.url
    //             });
    //             player.load();
    //         }, 5000);
    //     }
    // });

    $('.scroll_down').on('click', function () {
        $('html, body').animate({
            scrollTop: $(document).height()
        }, 'slow');
    });
});