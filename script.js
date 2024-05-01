let currentSound = null;
let btns = document.querySelectorAll(".btn");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let sound = btn.textContent.trim().toLowerCase();
    stopCurrentSound();
    play(sound + ".mp3");
  });
});

function play(sound) {
  stopCurrentSound();
  currentSound = new Audio("./sounds/" + sound);
  document.body.appendChild(currentSound);
  currentSound.play();
}

document.querySelector(".stop").addEventListener("click", stopCurrentSound);

function stopCurrentSound() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
    document.body.removeChild(currentSound);
    currentSound = null;
  }
}