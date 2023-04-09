const musicContainer = document.getElementById('music-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playBtn = document.getElementById('btn-play');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('.currTime');
const durTime = document.querySelector('.durTime');

// Song titles
const songs = ['NZ-Sunshine', 'NZ-Remember Me', 'NZ-Miss You'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `cover/${song}.jpg`;
}
// Play song
function playSong() {
    musicContainer.classList.add('play');
    playBtn.src = `pause.png`;
    // playBtn.src = `pause.png`;
    

    audio.play();
}

  // Pause song
function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.src = `play.png`;

    audio.pause();
}
// Previous song
function prevSong() {
    songIndex--;

    if (songIndex < 0) {
    songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

  // Next song
function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
    songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}
// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

  // Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}
// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
    pauseSong();
    } else {
    playSong();
    }
});
// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);