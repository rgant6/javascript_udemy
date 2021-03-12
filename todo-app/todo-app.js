let todo = []

const filters = {
    searchText: '',
    checked: false
}

const todoJSON = localStorage.getItem("todos")
if (todoJSON != null){
    todo = JSON.parse(todoJSON)
}

document.querySelector("#filter_todo").addEventListener('input',function (e){
    filters.searchText = e.target.value
    renderedTodos(todo,filters)
})

const renderedTodos = function (todos, filter) {
    const filteredItems = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    let incompleteTodos = {}
    if (filters.checked){
        
        incompleteTodos = filteredItems.filter(function (todos) {
            return !todos.completed
    })}else{
       
        incompleteTodos = filteredItems.filter(function (todos) {
            return todos
    })}
    
    const countTodosLeft = filteredItems.filter(function (todos) {
        return !todos.completed
    })

    document.querySelector('#new_todos').innerHTML = ''

    const newParagraph = document.createElement('h2')
    newParagraph.textContent = `There ${countTodosLeft.length} todos left to finish`
    document.querySelector('#new_todos').appendChild(newParagraph)

    incompleteTodos.forEach(function (todo) {
        const p1 = document.createElement('p')

        p1.textContent = todo.title
        
        p1.className = "todo"

        document.querySelector("#new_todos").appendChild(p1)
    })
    }

renderedTodos(todo, filters)

document.querySelector("#todo-text").addEventListener('submit',function (e) {    
    e.preventDefault()
    todo.push({
        title: e.target.elements.todoTitle.value,
        completed: false
    })    
    
    localStorage.setItem('todos',JSON.stringify(todo))
    renderedTodos(todo,filters)  
    e.target.elements.todoTitle.value = '' 
    })

    

document.querySelector("#hide-completed").addEventListener("change", function (e){
    filters.checked = e.target.checked
    renderedTodos(todo,filters)
})

// const ps = document.querySelectorAll("p")

// ps.forEach(function(ps) {
// console.log(ps.textContent.indexOf("the"))
// if (ps.textContent.indexOf("the") > -1){
// ps.remove()
// }
// })

// Challenge: Iterate over the amount of todos left
// You have 2 todos left (in a paragraph)
// Add a p for each value above

// How he did it:
// const incompleteTodos = todos.filter(function (todo){
// return !todo.completed
// })

// const summary = document.createElement('h2')
// summary.textContent = `You have ${incompleteTodos.length} todos left`
// document.querySelector('body').appendChild(summary)

// let count = 0
// todo.forEach(function (todo) {
//     console.log(todo.completed)
//     if (!todo.completed) {
//         count++
//     }
// })  


// let texter = ''
// let texter1 = ''

// if (count > 1) {
//     texter = "tasks"
//     texter1 = "are"
// } else {
//     texter = "task"
//     texter1 = "is"
// }

// const newParagraph = document.createElement('h2')
// newParagraph.textContent = `There ${texter1} ${count} ${texter} left to finish`
// document.querySelector('body').appendChild(newParagraph)

// todo.forEach(function (todos) {
//     const newPara = document.createElement('p')
//     if (!todos.completed){
//         newPara.textContent = todos.title
//         document.querySelector('#new_todos').appendChild(newPara)
//         newPara.className = "todo"
//     }
// })