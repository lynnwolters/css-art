const buttons = document.querySelectorAll("nav button");

buttons.forEach(button => {
    button.addEventListener("click", moveIt);
});

function moveIt() {
    document.body.dataset.j = this.id;
}




