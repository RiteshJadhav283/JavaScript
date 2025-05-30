const video = document.getElementById('myVideo');
const currentTimeDisplay = document.getElementById('currentTime');
const muteBtn = document.getElementById('muteBtn');

function playVideo() 
{
    video.play();
}
function pauseVideo() 
{
    video.pause();
}

function toggleMute() 
{
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
}

video.ontimeupdate = function() 
{
    currentTimeDisplay.textContent = video.currentTime.toFixed(2);
};
function jumpTo10() 
{
    video.currentTime +=10;
}
function previousTo10() 
{
    video.currentTime -=10;
}