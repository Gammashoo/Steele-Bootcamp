const req = new XMLHttpRequest()

req.onload = function () {
    console.log('It loaded!')
    const data = JSON.parse(this.responseText)
    console.log(data.name, data.height)
}

req.onerror = function () {
    console.log('Error!')
    console.log(this)
}

req.open('GET', "https://swapi.dev/api/people/1")
req.send()


// OLD WAY OF SENDING A REQUEST TO API

fetch('https://swapi.dev/api/people/1')
    .then((res) => {
        console.log('RESOLVED!', res)
        return res.json()
    })
    .then((data) => {
        console.log(data)
        return fetch('https://swapi.dev/api/people/2')
    })
    .then((data) => {
        console.log(data)
    })
    .catch((e) => {
        console.log('ERROR', e)
    })

// NEW STYLE OF REQUEST WITH .CATCH

const loadStarWarsPeople = async () => {
    const res = await fetch('https://swapi.dev/api/people/1')
    const data = await res.json()
    console.log(data)
    const res2 = await fetch('https://swapi.dev/api/people/2')
    const data2 = await res2.json()
    console.log(data2)

}

loadStarWarsPeople()



