const animateButton = document.querySelector("#muzieknoot-button");
const box = document.querySelector(".muzieknoot-container");

animateButton.addEventListener("click", function() {
    box.classList.add("boom");
    animateButton.toggleAttribute("disabled");

    setTimeout(() => {
        box.classList.remove("boom");
        animateButton.toggleAttribute("disabled");
    }, "1000");
});