
function saludar () {
    alert ('Welcome to Fictionized');
    console.log('Welcome');
}

saludar();

const title = document.querySelector('#title')
title.innerText = 'Welcome to Fictionized'

const ppl = document.getElementById('ppl')

const newLi = document.createElement('li')
newLi.innerText = "Character two";
ppl.append(newLi)


function Character( name, power, color ) {
        this.name = name;
        this.power = power;
        this.color = color;
    
}

let characters = [];

let character = () => {

    let nameC = prompt('Pick a name for your character')
    let powerC = prompt('Pick a power for your character')
    let colorC = prompt('Pick a color for your character')
    
    const characterPicked = new Character (nameC, powerC, colorC)
    
    console.log(characterPicked);

    characters.push(characterPicked)
    
    }

character()
character()

const colores = characters.find((x) => x.color === "red")
console.log(colores);

const colors = characters.filter((x) => x.color === 'yellow')
console.log(colors);

