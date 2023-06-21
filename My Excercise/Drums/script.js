window.addEventListener("keydown", (event) => {
    let code = event.keyCode;
    let keyElement = document.querySelector(`div[data-key=${code}]`);

    let audio = document.querySelector(`audio[data-key="${code}"]`);
    audio.currentTime= 0;
    audio.play();
})