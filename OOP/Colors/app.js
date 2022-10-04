

function rgb(r, g, b) {
    return `rgb(${r},${g},${b},)`
}




// ----------------
// FACTORY FUNCTION
// ----------------

function makeColor(r, g, b) {
    const color = {}
    color.r = r
    color.g = g
    color.b = b
    color.rgb = function () {
        const { r, g, b } = this
        return `rgb(${r},${g},${b},)`
    }
    color.hex = function () {
        const { r, g, b } = this
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
    return color
}

const firstColor = makeColor(35, 255, 150)

const black = makeColor(0, 0, 0)




// The new operator lets developers create an instance of a user-defined object type or of one of the built-in -
// object types that has a constructor function.

// 'this' keyword will refer to 'new' that creates an object

// Arrow functions () => {} do not work correctly with 'this' keyword


function Color(r, g, b) {
    this.r = r
    this.g = g
    this.b = b
}

Color.prototype.rgb = function () {
    const { r, g, b } = this
    return `rgb(${r},${g},${b})`
}

Color.prototype.hex = function () {
    const { r, g, b } = this
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

Color.prototype.rgba = function (a = 1.0) {
    const { r, g, b } = this
    return `rgba(${r},${g},${b},${a})`
}

// document.body.style.backgroundColor = color1.rgb()
// document.body.style.backgroundColor = color1.rgba(0.3)

// Will change background color to color1 and also make it translucent by lower opacity

const color1 = new Color(40, 50, 60)
const color2 = new Color(0, 0, 0)


// constructor function - The constructor method is a special method of a class
//  for creating and initializing an object instance of that class.

// 'constructor function' must be used with new & have a class. 
// Runs immediately before 

// Classes are a template for creating objects. They encapsulate data with code to work on that data.
// Classes in JS are built on prototypes but also have some syntax and semantics that are not shared
// with ES5 class-like semantics.

class conColor {
    constructor(r, g, b, name) {
        this.r = r
        this.g = g
        this.b = b
        this.name = name
    }
    greet() {
        return `Hello from ${this.name}!`
    }
    innerRGB() {
        const { r, g, b } = this
        return `${r}, ${g}, ${b}`
    }
    rgb() {
        return `rgb(${this.innerRGB()})`
    }
    rgba(a = 1.0) {
        return `rgba(${this.innerRGB()}, ${a})`
    }
    hex() {
        const { r, g, b } = this
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
    }
}

const red = new conColor(255, 67, 89, 'tomato')
const white = new conColor(255, 255, 255, 'snow')