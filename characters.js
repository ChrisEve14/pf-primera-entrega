
function saludar () {
    alert ('Welcome to Fictionized');
    console.log('Welcome');
}

saludar();

const title = document.querySelector('#title')
title.innerText = 'Welcome to Fictionized'

const btn = document.getElementById('botonUno')

const entrada = document.getElementById('entradaUno')
entrada.oninput = () => {
    console.log('Ingreso Nombre');
}

btn.onclick = ()=>{
    console.log(entrada.value);

    const ppl = document.getElementById('ppl')

    const newLi = document.createElement('li')
    newLi.innerText = `${entrada.value}`;
    ppl.append(newLi)
}

const btnone = document.getElementById('botonDos')

const entradau = document.getElementById('entradaDos')
entradau.oninput = () => {
    console.log('Selecciono opcion');
}

btnone.onclick = ()=>{
    console.log(entradau.value);
}

const btntwo = document.getElementById('botonTres')

const entradad = document.getElementById('entradaTres')
entradad.oninput = () => {
    console.log('Ingreso Color');
}

btntwo.onclick = ()=>{
    console.log(entradad.value);

    const color = [entradad.value]

    const encontrar = color.find((x) => `${entradad.value}` === 'Red')
    console.log(encontrar);

    const filtrar = color.filter((x) => `${entradad.value}` === 'Yellow')
    console.log(filtrar);
}

