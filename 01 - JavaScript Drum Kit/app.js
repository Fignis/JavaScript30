function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  //checks the transition end of one the property
  if (e.propertyName !== "transform") return;
  //Once transform is returned
  // then remove the class of playing.
  //This refers to the key itself.
  this.classList.remove("playing");
}
//selects the class of key
const keys = document.querySelectorAll(".key");
//for each key add the event listener that listens for the property of transitionend.
//then call the function removetransition.
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);
