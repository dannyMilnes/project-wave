Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function () {
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
});

const videoElement = document.getElementById('liquidBackground');
videoElement.addEventListener('suspend', () => {
    // suspend invoked
    // show play button
});

videoElement.addEventListener('play', () => {
    // video is played
    // remove play button UI
});

$('body').on('click touchstart', function () {
    const videoElement = document.getElementById('liquidBackground');
    if (videoElement.playing) {
        // video is already playing so do nothing
    }
    else {
        // video is not playing
        // so play video now
        videoElement.play();
    }
});

// Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
//     get: function () {
//         return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
//     }
// });

// const video = document.getElementById('liquidBackground');
// video.addEventListener('suspend', () => {
//     // We're in low-power mode, show fallback UI
// });
// video.addEventListener('play', () => {
//     // Remove fallback UI if user plays video manually
// });