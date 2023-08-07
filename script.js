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
