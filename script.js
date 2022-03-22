
function clickColor() {
    let colorOption = document.querySelectorAll('.color')
    for (let i = 0; i < colorOption.length; i += 1) {
        colorOption[i].addEventListener('click', selecter);
    }
}
function selecter(event) {
    let seletor = event.target;
    let selecionado = document.querySelectorAll('.selected')[0];
    selecionado.className = 'color';
    seletor.className = 'color selected';
}

clickColor();