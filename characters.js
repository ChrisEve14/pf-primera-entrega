
function saludar () {
    alert ('Welcome to Fictionized');
    console.log('Welcome');
}

saludar();

const title = document.querySelector('#title')
title.innerText = 'Welcome to Fictionized'

//consola de eleccion

const storedCharacters = localStorage.getItem('characters')

let characters = []
console.log(localStorage.getItem('characters'));

if(storedCharacters) {
    characters = JSON.parse(storedCharacters);

}

renderCharacters()

const btn = document.getElementById('botonUno')

btn.onclick = () => {

   
    const valueBtn = btn.value;

    
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

    console.log(entrada.value);
    console.log(entradau.value);
    console.log(entradad.value);

    
    if(valueBtn.trim()){
        characters.push(valueBtn)
        btn.value = '';
        localStorage.setItem('characters', JSON.stringify(characters))
    }

    const ppl = document.getElementById('ppl')
    const nLi = document.createElement('li')
    nLi.innerText = `${entrada.value.toUpperCase()} - ${entradau.value.toUpperCase()} - ${entradad.value.toUpperCase()}`
    ppl.append (nLi)

    let perso = [`${entrada.value.toUpperCase()} - ${entradau.value.toUpperCase()} - ${entradad.value.toUpperCase()}`]
    console.log(perso);
    characters.push(perso)
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

function renderCharacters() {
    const ppl = document.getElementById('ppl')
   
    for (const character of characters) {
        const newLi = document.createElement('li')
        newLi.textContent = character
        ppl.append(newLi)
    }
}



    





