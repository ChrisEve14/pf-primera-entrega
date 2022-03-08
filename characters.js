let characters = [];
console.log(characters.length);

const names = () => {

    let nameC = prompt('Pick a name for your character')
    let powerC = prompt('Pick a power for your character')
    let colorC = prompt('Pick a color for your character')

    const characterPicked = new Character (nameC, powerC, colorC)

    console.log(characterPicked);


    function Character( name, power, color ) {
        this.name = name;
        this.power = power;
        this.color = color;
    
    }

    characters.push(characterPicked)

    const colores = characters.find((x) => x.color === "red")
    console.log(colores);

    const colors = characters.filter((x) => x.color === 'yellow')
    console.log(colors);


}

names()
names()


const title = document.querySelector('#title')
console.log(title.innerText);
title.innerText = 'Welcome to Fictionized'

