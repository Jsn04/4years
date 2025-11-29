// background music autoplay fix for mobile
document.addEventListener('click', () => {
    const music = document.getElementById("bg-music");
    if (music) music.play();
}, { once: true });
