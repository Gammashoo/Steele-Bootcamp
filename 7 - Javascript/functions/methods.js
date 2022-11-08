const person = {
    first: 'Bilbo',
    last: 'Baggins',
    fullName() {
        return `${this.first} ${this.last}`
    }
}

const cat = {
    name: 'Gojo',
    color: 'grey',
    breed: 'black',
    meow() {
        console.log(`${this.name} says Meow!`)
    }
}

const meow2 = cat.meow



try {
    hello.toUpperCase()
} catch {
    console.log('Error')
}

function yell(msg) {
    try {
        console.log(msg.toUpperCase().repeat(3))
    } catch (e) {
        console.log(e)
        console.log('Incorrect input')
    }
}