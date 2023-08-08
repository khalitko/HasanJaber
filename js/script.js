const selfie = document.getElementById("selfie");

document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (mouseX - centerX) * 0.1; // Adjust the multiplier to change the intensity of the effect
    const deltaY = (mouseY - centerY) * 0.1;

    selfie.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
});


const topLeft = document.getElementById("top-left");
const topRight = document.getElementById("top-right");
const bottomLeft = document.getElementById("bottom-left");
const bottomRight = document.getElementById("bottom-right");
const videoPlayer = document.getElementById("video-player");

topLeft.addEventListener('mouseover', function() {
    selfie.style.display = 'none';
    videoPlayer.src = "assets/videos/office.mp4";
    videoPlayer.style.display = 'block';
    videoPlayer.play();
});

topRight.addEventListener('mouseover', function() {
    selfie.style.display = 'none';
    videoPlayer.src = "assets/videos/JustDoIt.mp4";
    videoPlayer.style.display = 'block';
    videoPlayer.play();
});

bottomLeft.addEventListener('mouseover', function() {
    selfie.style.display = 'none';
    videoPlayer.src = "assets/videos/Sparta.mp4";
    videoPlayer.style.display = 'block';
    videoPlayer.play();
});

bottomRight.addEventListener('mouseover', function() {
    selfie.style.display = 'none';
    videoPlayer.src = "assets/videos/whyAreYouRunning.mp4";
    videoPlayer.style.display = 'block';
    videoPlayer.play();
});

function resetDisplay() {
    videoPlayer.pause();
    videoPlayer.style.display = 'none';
    selfie.style.display = 'block';
}

topLeft.addEventListener('mouseout', resetDisplay);
topRight.addEventListener('mouseout', resetDisplay);
bottomLeft.addEventListener('mouseout', resetDisplay);
bottomRight.addEventListener('mouseout', resetDisplay);
