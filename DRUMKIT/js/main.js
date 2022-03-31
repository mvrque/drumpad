window.addEventListener("keydown",playSound)

const keys = document.querySelectorAll("div")
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    if(!audio) return; // stop the function from running
    audio.currentTime = 0 // rewind to start
    audio.play();
    key.classList.add("playing");
}
function removeTransition(e){
    if(e.propertyName !== "transform") return; //skip it if its not a transform
    this.classList.remove("playing");
}


