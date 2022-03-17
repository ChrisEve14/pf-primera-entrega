
// function saludar () {
//     alert ('Welcome to Fictionized');
//     console.log('Welcome');
// }

// saludar();

const title = document.querySelector('#title')
title.innerText = 'Welcome to Fictionized'

//consola de eleccion

const storedCharacters = localStorage.getItem('characters')
let characters = []
console.log(characters);
console.log(localStorage.getItem('characters'));

if(storedCharacters) {
    characters = JSON.parse(storedCharacters);
    const addOldLi = document.createElement('li')
    addOldLi.innerText = characters
    ppl.append(addOldLi)

}


const btn = document.getElementById('botonUno')

const entrada = document.getElementById('entradaUno')
entrada.oninput = () => {
    console.log('Ingreso Nombre');  
}

const entradau = document.getElementById('entradaDos')
entradau.oninput = () => {
    console.log('Selecciono opcion');
}
const entradad = document.getElementById('entradaTres')
entradad.oninput = () => {
    console.log('Ingreso Color');
}

btn.onclick = ()=>{
    console.log(entrada.value);
    console.log(entradau.value);
    console.log(entradad.value);

    const ppl = document.getElementById('ppl')

    const newLi = document.createElement('li')
    newLi.innerText = `${entrada.value.toUpperCase()} - ${entradau.value.toUpperCase()} - ${entradad.value.toUpperCase()} `;
    ppl.append(newLi)


   
    let contenido = newLi.innerText
    console.log(contenido);
    characters.push(contenido);
    localStorage.setItem('characters', JSON.stringify(characters))
    
    const color = [entradad.value]

    const encontrar = color.find((x) => `${entradad.value.toUpperCase()}` === 'RED')
    console.log(encontrar);

    const filtrar = color.filter((x) => `${entradad.value.toUpperCase()}` === 'YELLOW')
    console.log(filtrar);

    entrada.value = '';
    entradau.value = '';
    entradad.value = '';

}




