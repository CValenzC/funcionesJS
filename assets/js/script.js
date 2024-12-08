const colorInicial = 'green'

function pintar(elemento, color) {
    elemento.style.backgroundColor = color
}

const ele = document.getElementById("ele1")

//le asigna un color inicial (green)
pintar(ele, colorInicial)


ele.addEventListener("click", () => pintar(ele, 'yellow'))
