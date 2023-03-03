const buttons = document.querySelectorAll("nav button");
const schaduw = document.querySelector(".schaduw");

buttons.forEach(button => {
    button.addEventListener("click", moveIt);
});

function moveIt() {
    document.body.dataset.j = this.id;
    schaduw.classList.add("moveIt");

    schaduw.addEventListener("animationend", moveItKlaar)
}


function moveItKlaar() {
    schaduw.classList.remove("moveIt");
}


