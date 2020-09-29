let taskNameTextBox = document.getElementById("taskNameTextBox")
let saveButton = document.getElementById("saveButton")
let tasksUL = document.getElementById("tasksUL")
let tasksCompletedUL = document.getElementById("tasksCompletedUL")


saveButton.addEventListener("click", function() {

    let taskName = taskNameTextBox.value 

    let checkbox = document.createElement("input")
    checkbox.setAttribute("type","checkbox")
    checkbox.addEventListener("click", function() {
        //console.log(this.parentElement) 
        // append li to the completed list 
        tasksCompletedUL.appendChild(this.parentElement)
    })

    let li = document.createElement("li")
    let label = document.createElement("label")
    let removeButton = document.createElement("button")
    removeButton.addEventListener("click", function() {

        let parent = this.parentElement.parentElement
        parent.removeChild(this.parentElement)

        //console.log(this.parentElement.parentElement.getAttribute("id"))
        //tasksUL.removeChild(this.parentElement)
    })

    label.innerHTML = taskName
    removeButton.innerHTML = "Remove"

    li.appendChild(checkbox)
    li.appendChild(label)
    li.appendChild(removeButton)

    tasksUL.appendChild(li)

})


