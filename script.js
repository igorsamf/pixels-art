
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

function pixelColor() {
    let change = document.getElementsByClassName('pixel');
    for (i = 0; i < change.length; i += 1) {
        change[i].addEventListener('click', function (event) {

            let seletor = document.querySelector('.selected');
            let getCss = window.getComputedStyle(seletor, null);
            let changed = getCss.getPropertyValue('background-Color');
            console.log(seletor);
            event.target.style.backgroundColor = changed;
        });
    }
}
pixelColor();