//your JS code here. If required.
let btns = document.querySelectorAll(".btn");
let audio = [];
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let sound = btn.textContent.trim().toLowerCase();
    play(sound + ".mp3");
  });
});
function play(sound) {
  let newAudio = new Audio("sounds/" + sound);
  newAudio.play();
  audio.push(newAudio);
}

document.querySelector(".stop").addEventListener("click", () => {
  console.log("stop");
  audio.forEach((sound) => {
    // console.log(sound);
    sound.pause();
    sound.currentTime = 0;
  });
});