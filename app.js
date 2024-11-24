// class for zoo
class Zoo {
    constructor() {
        this.animals = [];
    }
    addToList(animal) {
        this
            .animals
            .push(animal)
        console.log(`${animal.name} have added to the list.`)
    }
    showList() {
        console.log('Animals on the zoo:')
        this
            .animals
            .forEach(animal => {
                console.log(` - ${animal.name}`)
            });
    }
}
// my zoo
const myZoo = new Zoo
// class to describe the animal
class Animal {
    constructor(name, spieces, sound) {
        this.name = name;
        this.spieces = spieces;
        this.sound = sound;
        Animal.addToZoo(this)
    }
    makeSound() {
        console.log(`${this.name} says ${this.sound}!`)
    }
    describe() {
        console.log(`${this.name} is a/an ${this.spieces}.`)
    }
    static addToZoo(animal) {
        myZoo.addToList(animal)
    }
}
// class for mammals
class Mammal extends Animal {
    constructor(name, sound, furColor) {
        super(name, 'Mammal', sound)
        this.furColor = furColor;
    }
}
// class for lions
class Lion extends Mammal {
    constructor(name) {
        super(name, 'Roar', 'Golden')
    }
}

// class for birds
class Bird extends Animal {
    constructor(name, sound, featherColor) {
        super(name, 'Bird', sound)
        this.featherColor = featherColor;
    }
}
// class for peacocks
class Peacock extends Bird {
    constructor(name) {
        super(name, 'chik chik', 'rainbow')
    }
}

// class for reptiles
class Reptile extends Animal {
    constructor(name, sound, skinColor) {
        super(name, 'Reptile', sound)
        this.skinColor = skinColor;
    }
}
// class for snakes
class Snake extends Reptile {
    constructor(name) {
        super(name, 'Hiss', 'green')
    }
}
// new animals
const simba = new Lion('Simba')
const lily = new Peacock('Lily')
const rex = new Snake('Rex')
const lulu = new Lion('Lulu')
const hyfe= new Snake('Hyfe')
// display the list
myZoo.showList()