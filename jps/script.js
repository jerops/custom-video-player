'strict mode';
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const timestamp = document.getElementById('timestamp');
const progress = document.getElementById('progress');

//play and pause video

function toggleVideoStatus() {
  if (video.pauded) {
    video.play();
  } else {
    video.pause();
  }
}
//update play icon

function updatePlayIcon() {
  if (video.pauded) {
    play.innerHTML = '<i class=fa fa-play fa-2x></i>';
  } else {
    play.innerHTML = '<i class=fa fa-pause fa-2x></i>';
  }
}

//update progres and timestamp

function updateProgress() {
  return true;
}

//set video tiem to progess bar
function setVideoProgress() {
  return true;
}

//Stop viedo
function stopVideo() {
  return true;
}

//event listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdade', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
