class Pet {
    constructor(name, age) {
        console.log('In Pet Constuctor')
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name} is eating!`
    }
}


class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        console.log('In Cat Constuctor')
        super(name, age)
        this.livesLeft = livesLeft
    }
    meow() {
        return 'Meow'
    }
    eat() {
        return `${this.name} plays with their food!`
    }
}

class Dog extends Pet {
    bark() {
        return 'Woof'
    }
    eat() {
        return `${this.name} scarfs their food down!`
    }
}