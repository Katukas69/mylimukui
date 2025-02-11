document.addEventListener("DOMContentLoaded", () => {
    const heartCount = 100; // Number of hearts
    const colors = ["#ff0000", "#ff5e5e", "#ff99cc", "#ff3366"]; // Different shades of red/pink

    for (let i = 0; i < heartCount; i++) {
        createHeart();
    }

    function createHeart() {
        const heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("heart");

        // Random size and position
        const size = Math.random() * 30 + 10; // Between 10px and 40px
        heart.style.fontSize = `${size}px`;
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${Math.random() * window.innerHeight}px`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];

        // Random animation duration
        const duration = Math.random() * 3 + 2; // Between 2s and 5s
        heart.style.animationDuration = `${duration}s`;

        document.body.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
            createHeart(); // Keep the effect continuous
        }, duration * 1000);
    }
});
// Function to open the modal1 with the clicked image
function openModal1(image2) {
    var modal1 = document.getElementById("modal1");
    var modal1Image2 = document.getElementById("modal1-image2");

    modal1.style.display = "flex";
    modal1Image2.src = image2.src;
}

// Function to close the modal1
function close1Modal1() {
    var modal1 = document.getElementById("modal1");
    modal1.style.display = "none";
}
// Function to open the modal2 with the clicked image
function openModal2(image3) {
    var modal2 = document.getElementById("modal2");
    var modal2Image3 = document.getElementById("modal2-image3");

    modal2.style.display = "flex";
    modal2Image3.src = image3.src;
}

// Function to close the modal2
function close2Modal2() {
    var modal2 = document.getElementById("modal2");
    modal2.style.display = "none";
}
