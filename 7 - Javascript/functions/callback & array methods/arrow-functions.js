// const add = function (x, y) {
//     return x + y
// }

const add = (x, y) => {
    return x + y
}

const square = x => {
    return x * x
}

const square2 = num => {
    return num * num
}

const rollDie = () => {
    return Math.floor(Math.random() * 20) + 1
}


// Implicet returns

const rollDie2 = () => (
    Math.floor(Math.random() * 20) + 1
)

const add2 = (a, b) => a + b

// arrow functions & this property
// "This" in a normal method will refer to the object in which it is contained.
// "This" in an arrow function will refer (be scoped to) only the function in which it is created.
// setTimeout is premade method

const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function () {
        return `${this.firstName} ${this.lastName}`
    },
    shoutName: function () {
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}