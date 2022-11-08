const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }

const allImages = document.getElementsByTagName('img')

for (let img of allImages) {
    console.log(img.src)
}


for (let link of allLinks) {
    link.style.color = 'rgb(0, 108, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy'
}

const squareImages = document.getElementsByClassName('square')

// for (let img of squareImages) {
//     img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Male_and_female_chicken_sitting_together.jpg/220px-Male_and_female_chicken_sitting_together.jpg'
// }

const links = document.querySelectorAll('p a')

for (let link of links) {
    console.log(link.href)
}



// ----------------
// DIFFERENT METHODS OF CALLING
// 
// document.querySelector('p')
// document.querySelector('#banner')
// document.querySelector('.square')
// document.querySelector('img:nth-of-type(2)')
// document.querySelector('a[title="Java"]')
// document.querySelectorAll('p')
// 
// ----------------

// const image = document.querySelector("img");
// image.style.width = '150px';
// image.style.borderRadius = '50%';
 
// const container = document.querySelector('#container');
// container.style.textAlign = 'center';