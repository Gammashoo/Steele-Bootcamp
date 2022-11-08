// const franc = require(franc)
import { createRequire } from 'module'
const require = createRequire(
    import.meta.url
)
const langs = require('langs')
import { franc } from "franc"
const colors = require('colors')


const input = process.argv[2]
const langCode = franc(input)

if (langCode === 'und') {
    console.log('Sorry not enough sample text.')
} else {

    const language = langs.where('3', langCode)

    console.log(`Our best guess is ${language.name}`.rainbow)
    // console.log(process.argv)
    // Prints out array 
}
