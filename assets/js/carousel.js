document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const images = document.querySelectorAll("#carousel img");
    const dotsContainer = document.getElementById("dots");

    // Create dots
    images.forEach((_, i) => {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => showImage(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function showImage(i) {
        images[index].style.display = "none";
        dots[index].classList.remove("active");

        index = i;

        images[index].style.display = "block";
        dots[index].classList.add("active");
    }

    // Auto-rotate
    setInterval(() => {
        showImage((index + 1) % images.length);
    }, 3000);

    // Arrow controls
    document.querySelector(".arrow.left").onclick = () => {
        showImage((index - 1 + images.length) % images.length);
    };

    document.querySelector(".arrow.right").onclick = () => {
        showImage((index + 1) % images.length);
    };
});