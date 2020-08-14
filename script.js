const video = getEl('video');
const progressRange = getEl('.progress-range');
const progressBar = getEl('.progress-bar');
const playBtn = document.getElementById('play-btn');
const volumeIcon = document.getElementById('volume-icon');
const volumeRange = getEl('.volume-range');
const volumeBar = getEl('.volume-bar');
const currentTime = getEl('.time-elapsed');
const durationTime = getEl('.time-duration');
const fullscreenBtn = getEl('.fullscreen');

// Function to quickly assign element constants --- //
function getEl(el) {
  return document.querySelector(el);
}

// Play & Pause ----------------------------------- //
function showPlayIcon() {
  playBtn.classList.replace('fa-pause', 'fa-play');
  playBtn.setAttribute('title', 'Play');
}

function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.classList.replace('fa-play', 'fa-pause');
    playBtn.setAttribute('title', 'Pause');
  } else {
    video.pause();
    showPlayIcon();
  }
}

// show play button when video ends
video.addEventListener('ended', showPlayIcon);

// Progress Bar ----------------------------------- //

// Update Progress bar as video plays
function updateProgress() {
  progressBar.style.width = `${(video.currentTime / video.duration) * 100}%`;
}

// Volume Controls -------------------------------- //

// Change Playback Speed -------------------------- //

// Fullscreen ------------------------------------- //

// Event Listeners -------------------------------- //
playBtn.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('canplay', updateProgress);
