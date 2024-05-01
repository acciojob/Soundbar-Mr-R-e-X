let currentSound = null;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let sound = btn.textContent.trim().toLowerCase();
    stopCurrentSound();
    play(sound + ".mp3");
  });
});

function play(sound) {
  currentSound = new Audio("./sounds/" + sound);
  currentSound.onloadeddata = function() {
    currentSound.play();
  };
}

document.querySelector(".stop").addEventListener("click", stopCurrentSound);

function stopCurrentSound() {
  if (currentSound) {
    currentSound.pause();
    currentSound.currentTime = 0;
    currentSound = null;
  }
}