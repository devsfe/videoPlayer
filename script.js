const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const timeStamp = document.getElementById('timestamp');

//Play video
function playVideo() {
    if(video.paused) {
        video.play()
    }
}

//Pause video
function pauseVideo() {
    video.pause();
}

//Stop video
function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

play.addEventListener('click', playVideo);
pause.addEventListener('click', pauseVideo);
stop.addEventListener('click', stopVideo);


