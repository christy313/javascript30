const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress-filled");
const toggleButton = player.querySelector(".toggle");
const skipButtons = player.querySelector("[data-skip]");
const ranges = player.querySelector(".player__slider");

const togglePlay = () => {
  video.paused ? video.play() : video.pause();
};

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggleButton.textContent = icon;
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);

toggleButton.addEventListener("click", togglePlay);
