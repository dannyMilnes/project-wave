const video = document.getElementById('liquidBackground');
video.addEventListener('suspend', () => {
    // We're in low-power mode, show fallback UI
});
video.addEventListener('play', () => {
    // Remove fallback UI if user plays video manually
});