// for (
//     [initialExpression];
//     [condition];
//     [incrementExpression];
// )

// for (
//     let i = 1;
//     i <= 10;
//     i++
// ) { console.log(i) }

// for (
//     let i = 1; i <= 6; i++) {
//     console.log("Da ba dee da ba daa")
// }


// for (
//     let i = 0; i <= 20; i += 2
// ) {
//     console.log(i)
// }

// for (let i = 100; i >= 0; i -= 10) {
//     console.log(i)
// }

// const animals = ['lions', 'tigers', 'bears']

// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])
// }

// console.log(animals.length)

// const animals = [
//     "Aardvark",
//     "Aardwolf",
//     "Abyssinian",
//     "Addax",
//     "Adelie Penguin",
//     "Aesculapian snake",
//     "Affenpinscher",
//     "Afghan Hound",
//     "African Bullfrog",
//     "African Bush Elephant",
//     "African Civet",
//     "African Clawed Frog",
//     "African Forest Elephant",
//     "African Grey Parrot",
//     "African Palm Civet",
//     "African Penguin",
//     "African Tree Toad",
//     "African Wild Dog",
//     "Agama Lizard",
//     "Aidi",
//     "Ainu",
//     "Airedale Terrier",
//     "Airedoodle",
//     "Akbash",
//     "Akita",
//     "Akita Shepherd",
//     "Alabai",
//     "Alaskan Husky",
//     "Alaskan Klee Kai",
//     "Alaskan Malamute",
//     "Alaskan Pollock",
//     "Alaskan Shepherd",
//     "Albacore Tuna",
//     "Albatross",
//     "Aldabra Giant Tortoise",
//     "Alligator",
//     "Alligator Gar",
//     "Alpaca",
//     "Alpine Dachsbracke",
//     "Alpine Goat",
//     "Alusky",
//     "Amargasaurus",
//     "Amazon Parrot",
//     "Amazon River Dolphin(Pink Dolphin)",
//     "Ambrosia Beetle",
//     "American Alsatian",
//     "American Bulldog",
//     "American Cocker Spaniel",
//     "American Cockroach",
//     "American Coonhound",
//     "American Dog Tick",
//     "American Eskimo Dog",
//     "American Foxhound",
//     "American Hairless Terrier",
//     "American Leopard Hound",
//     "American Pit Bull Terrier",
//     "American Pygmy Goat",
//     "American Robin",
//     "American Staffordshire Terrier",
//     "American Toad",
//     "American Water Spaniel",
//     "Amur Leopard",
//     "Anaconda",
//     "Anatolian Shepherd Dog",
//     "Anchovies",
//     "Angelfish",
//     "Anglerfish",
//     "Angora Ferret",
//     "Angora Goat",
//     "Anole Lizard",
//     "Ant",
//     "Antarctic scale worm",
//     "Anteater",
//     "Antelope",
//     "Ape",
//     "Appenzeller Dog",
//     "Apple Head Chihuahua",
//     "Arabian Cobra",
//     "Arafura File Snake",
//     "Arapaima",
//     "Archaeotherium",
//     "Archelon Turtle",
//     "Arctic Fox",
//     "Arctic Hare",
//     "Arctic Wolf",
//     "Arctodus",
//     "Arctotherium",
//     "Arizona Bark Scorpion",
//     "Arizona Black Rattlesnake",
//     "Arizona Coral Snake",
//     "Armadillo",
//     "Armadillo Lizard",
//     "Armyworm",
//     "Aruba Rattlesnake",
//     "Asian Arowana",
//     "Asian Cockroach",
//     "Asian Elephant",
//     "Asian Giant Hornet",
//     "Asian Palm Civet",
//     "Asian Vine Snake",
//     "Asiatic Black Bear",
//     "Asp",
//     "Assassin Bug",
//     "Atlantic Salmon",
//     "Atlas Moth",
//     "Aurochs",
//     "Aussiedoodle",
//     "Aussiedor",
//     "Australian Bulldog",
//     "Australian Cattle Dog",
//     "Australian Cockroach",
//     "Australian Flathead Perch",
//     "Australian Gecko",
//     "Australian Kelpie Dog",
//     "Australian Labradoodle",
//     "Australian Mist",
//     "Australian Retriever",
//     "Australian Shepherd",
//     "Australian Terrier",
//     "Australopithecus",
//     "Avocet",
//     "Axolotl",
//     "Aye Aye",
// ]

// for (let i = 0; i <= animals.length; i++) {
//     console.log(i, animals[i])
// }

for (let i = 1; i <= 10; i++) {
    console.log(`i is ${i}`)
    for (let j = 1; j < 4; j++)
        console.log(`   j is ${j}`)
}

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    console.log(`ROW ${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}