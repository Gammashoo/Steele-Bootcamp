let input = prompt("What would you like to do?")
const todos = ['Clean Mountain Bike', 'Clean Cat Litter']
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('-------')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i} : ${todos[i]}`)
        }
        console.log('-------')
    } else if (input === 'new') {
        const newTodo = prompt('Add new todo')
        todos.push(newTodo);
        console.log(`${newTodo} added to list`)
    } else if (input === 'delete') {
        const index = parseInt(prompt('Enter an idex to delete'))
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1)
            console.log(`Deleted - ${deleted[0]}`)
        } else {
            console.log('Unknown Index')
        }

    }
    input = prompt("What would you like to do?")
}
console.log("You have quit.")