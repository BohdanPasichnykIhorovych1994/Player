export default class Player {
  tracks = [];
  trackIndex = 0;
  isPlay = false;
  audio = new Audio();
  т;
  constructor(data) {
    this.tracks = data;
    this.playPauseButton = document.getElementById("play-pause");
    this.prevButton = document.getElementById("prev");
    this.nextButton = document.getElementById("next");
    this.trackTitle = document.getElementById("track-title");

    this.volumeSlider = document.getElementById("volume-slider");
    this.volumeSlider.addEventListener(
      "input",
      () => (this.audio.volume = this.volumeSlider.value)
    );
    this.playPauseButton.addEventListener("click", () => {
      this.playPauseToggle();
    });
    this.prevButton.addEventListener("click", () => this.prevTrack());
    this.nextButton.addEventListener("click", () => this.nextTrack());
    this.audio.addEventListener("ended", () => this.nextTrack());
    this.loadTrack(this.trackIndex);
  }

  loadTrack(index) {
    this.audio.src = this.tracks[index].src;
    this.trackTitle.textContent = this.tracks[index].title;
    this.audio.load();
  }

  playTrack() {
    this.audio.play();
    this.playPauseButton.innerHTML =
      '<img src="./icons/play-or-pause-button-svgrepo-com.svg" alt="Pause">';
  }

  pauseTrack() {
    this.audio.pause();
    this.playPauseButton.innerHTML =
      '<img src="./icons/play-button-svgrepo-com.svg" alt="Play">';
  }

  playPauseToggle() {
    console.log(this.audio);
    if (this.audio.paused) {
      this.playTrack();
    } else {
      this.pauseTrack();
    }
  }
  prevTrack() {
    if (this.trackIndex > 0) {
      this.trackIndex--;
    } else {
      this.trackIndex = this.tracks.length - 1;
    }
    this.loadTrack(this.trackIndex);
    this.playTrack();
  }

  nextTrack() {
    if (this.trackIndex < this.tracks.length - 1) {
      this.trackIndex++;
    } else {
      this.trackIndex = 0;
    }
    this.loadTrack(this.trackIndex);
    this.playTrack();
  }
}
