function activateButton(btn) {
    
    let buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    btn.classList.add('active');
}









