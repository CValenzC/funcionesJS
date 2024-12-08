const blueBox = document.getElementById('js-blueBox');
const redBox = document.getElementById('js-redBox');
const greenBox = document.getElementById('js-greenBox');
const yellowBox = document.getElementById('js-yellowBox');


function cambiarColorNegro() {
    this.style.backgroundColor = 'black';
}


blueBox.addEventListener('click', cambiarColorNegro);
redBox.addEventListener('click', cambiarColorNegro);
greenBox.addEventListener('click', cambiarColorNegro);
yellowBox.addEventListener('click', cambiarColorNegro);