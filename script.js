// $(document).ready(function () {
//     Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
//         get: function () {
//             return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
//         }
//     });
//     $('body').on('click touchstart', function () {
//         const videoElement = document.getElementById('liquidBackground');
//         if (videoElement.playing) {
//             // video is already playing so do nothing
//         }
//         else {
//             // video is not playing
//             // so play video now
//             videoElement.play();
//         }
//     });
// });

// $(document).ready(function () {
//     setTimeout(function () {
//         $('#click-down').trigger('click');
//         console.log('Button Down Clicked');
//     }, 2000);
//     $('liquidBackground').controls = false;
// });