const keyDiv = document.getElementById('key')

document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        keyDiv.style.backgroundColor = 'orange'
    } else if (event.key === 's') {
        keyDiv.style.backgroundColor = 'pink'
    } else if (event.key === 'd') {
        keyDiv.style.backgroundColor = 'lightblue'
    }


    if (event.key === 'q') {
        crearNuevoDiv('purple')
    } else if (event.key === 'w') {
        crearNuevoDiv('gray')
    } else if (event.key === 'e') {
        crearNuevoDiv('brown')
    }
});

function crearNuevoDiv(color) {
    const nuevoDiv = document.createElement('div')
    
    nuevoDiv.style.width = '200px'
    nuevoDiv.style.height = '200px'
    nuevoDiv.style.border = '1px solid black'
    nuevoDiv.style.backgroundColor = color

    document.body.appendChild(nuevoDiv)
}
